#pragma once
#ifndef COMMON_H
#define COMMON_H

#include <opencv2/opencv.hpp>
#include <ft2build.h>
#include FT_FREETYPE_H
#include <iostream>
#include <string>

using namespace cv;

// 图像叠加函数 - 修复角色重叠消失问题
inline void overlayImage(Mat& background, const Mat& foreground, int x, int y) {
    if (foreground.empty() || background.empty()) return;

    // 如果不是透明图像，直接复制
    if (foreground.channels() != 4) {
        Rect roi(x, y, foreground.cols, foreground.rows);
        if (roi.x >= 0 && roi.y >= 0 &&
            roi.x + roi.width <= background.cols &&
            roi.y + roi.height <= background.rows) {
            foreground.copyTo(background(roi));
        }
        return;
    }

    // 优化透明图像叠加：确保前景像素覆盖背景
    int startX = max(0, x);
    int startY = max(0, y);
    int endX = min(background.cols, x + foreground.cols);
    int endY = min(background.rows, y + foreground.rows);

    for (int i = startY - y; i < endY - y; i++) {
        for (int j = startX - x; j < endX - x; j++) {
            Vec4b fgPixel = foreground.at<Vec4b>(i, j);

            // 只有当前景像素不透明时才覆盖背景
            if (fgPixel[3] > 10) {  // alpha > 10 视为不透明
                Vec3b& bgPixel = background.at<Vec3b>(startY + (i - (startY - y)), startX + (j - (startX - x)));

                double alpha = fgPixel[3] / 255.0;

                // 确保前景总是覆盖背景，而不是混合
                if (alpha > 0.8) {  // 高度不透明，直接覆盖
                    bgPixel[0] = fgPixel[0];
                    bgPixel[1] = fgPixel[1];
                    bgPixel[2] = fgPixel[2];
                }
                else {  // 半透明，正常混合
                    bgPixel[0] = alpha * fgPixel[0] + (1 - alpha) * bgPixel[0];
                    bgPixel[1] = alpha * fgPixel[1] + (1 - alpha) * bgPixel[1];
                    bgPixel[2] = alpha * fgPixel[2] + (1 - alpha) * bgPixel[2];
                }
            }
        }
    }
}

// 移除白色背景
inline Mat removeWhiteBackground(const Mat& inputImage, int threshold = 200) {
    if (inputImage.empty()) return inputImage;

    Mat result;
    if (inputImage.channels() == 3) {
        cvtColor(inputImage, result, COLOR_BGR2BGRA);

        for (int y = 0; y < result.rows; y++) {
            for (int x = 0; x < result.cols; x++) {
                Vec4b& pixel = result.at<Vec4b>(y, x);
                if (pixel[0] > threshold && pixel[1] > threshold && pixel[2] > threshold) {
                    pixel[3] = 0;
                }
            }
        }
    }
    else if (inputImage.channels() == 4) {
        result = inputImage.clone();

        for (int y = 0; y < result.rows; y++) {
            for (int x = 0; x < result.cols; x++) {
                Vec4b& pixel = result.at<Vec4b>(y, x);
                if (pixel[0] > threshold && pixel[1] > threshold && pixel[2] > threshold) {
                    pixel[3] = 0;
                }
            }
        }
    }
    else {
        result = inputImage.clone();
    }

    return result;
}

// 中文文本渲染类
class ChineseTextRenderer {
private:
    FT_Library library;
    FT_Face face;
    bool initialized;

public:
    ChineseTextRenderer() : initialized(false), face(nullptr) {
        if (FT_Init_FreeType(&library)) {
            std::cerr << "ERROR: 无法初始化FreeType库" << std::endl;
            return;
        }

        // 直接尝试加载字体
        if (FT_New_Face(library, "simhei.ttf", 0, &face)) {
            std::cerr << "ERROR: 无法加载字体文件 simhei.ttf" << std::endl;
            return;
        }

        initialized = true;
        std::cout << "FreeType中文渲染器初始化成功" << std::endl;
    }

    ~ChineseTextRenderer() {
        if (face) FT_Done_Face(face);
        if (library) FT_Done_FreeType(library);
    }

    void putText(Mat& img, const std::string& text, Point pos, Scalar color, int fontSize = 24) {
        if (!initialized) {
            // 回退到英文
            cv::putText(img, "CHS:" + text, pos, FONT_HERSHEY_SIMPLEX, 0.5, color, 1);
            return;
        }

        FT_Set_Pixel_Sizes(face, 0, fontSize);
        int x = pos.x;
        int y = pos.y + fontSize;

        // 正确的UTF-8解码
        for (size_t i = 0; i < text.length();) {
            unsigned char c = text[i];
            unsigned int unicode = 0;

            // UTF-8解码
            if ((c & 0x80) == 0) {
                // 1字节ASCII
                unicode = c;
                i += 1;
            }
            else if ((c & 0xE0) == 0xC0) {
                // 2字节UTF-8
                if (i + 1 < text.length()) {
                    unicode = ((c & 0x1F) << 6) | (text[i + 1] & 0x3F);
                    i += 2;
                }
                else {
                    i += 1;
                    continue;
                }
            }
            else if ((c & 0xF0) == 0xE0) {
                // 3字节UTF-8（中文字符）
                if (i + 2 < text.length()) {
                    unicode = ((c & 0x0F) << 12) | ((text[i + 1] & 0x3F) << 6) | (text[i + 2] & 0x3F);
                    i += 3;
                }
                else {
                    i += 1;
                    continue;
                }
            }
            else {
                // 其他情况，跳过
                i += 1;
                continue;
            }

            // 加载并渲染字符
            if (FT_Load_Char(face, unicode, FT_LOAD_RENDER)) {
                continue;
            }

            FT_Bitmap* bitmap = &face->glyph->bitmap;

            for (int row = 0; row < bitmap->rows; ++row) {
                for (int col = 0; col < bitmap->width; ++col) {
                    int px = x + col + face->glyph->bitmap_left;
                    int py = y - row + face->glyph->bitmap_top;

                    if (px >= 0 && px < img.cols && py >= 0 && py < img.rows) {
                        unsigned char alpha = bitmap->buffer[row * bitmap->width + col];
                        if (alpha > 0) {
                            double alphaValue = alpha / 255.0;
                            Vec3b& pixel = img.at<Vec3b>(py, px);
                            pixel[0] = alphaValue * color[0] + (1 - alphaValue) * pixel[0];
                            pixel[1] = alphaValue * color[1] + (1 - alphaValue) * pixel[1];
                            pixel[2] = alphaValue * color[2] + (1 - alphaValue) * pixel[2];
                        }
                    }
                }
            }
            x += (face->glyph->advance.x >> 6);
        }
    }

    bool isInitialized() const { return initialized; }
};

// 全局中文渲染器实例
inline ChineseTextRenderer& getChineseRenderer() {
    static ChineseTextRenderer renderer;
    return renderer;
}

// 中文文本渲染函数
inline void putChineseText(Mat& img, const std::string& text, Point pos, Scalar color, int fontSize = 24) {
    getChineseRenderer().putText(img, text, pos, color, fontSize);
}

// 游戏状态结构
struct GameState {
    bool foundXiaolongnv = false;
    bool foundJueqingdan = false;
    bool foundBloodyWine = false;
    bool openedChest = false;
    bool enteredCave = false;
};

#endif // COMMON_H