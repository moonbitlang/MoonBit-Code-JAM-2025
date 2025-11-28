#include "movesystem.h"
#include "stdafx.h"
#include <iostream>
#define _CRT_SECURE_NO_WARNINGS
#include <cmath>

OpenCVMazeCollision::OpenCVMazeCollision(const std::string& imagePath) {
    mazeImage = cv::imread(imagePath);
    if (mazeImage.empty()) {
       
        return;
    }

    wallColor = cv::Vec3b(0, 0, 0);
}

OpenCVMazeCollision::OpenCVMazeCollision(const cv::Mat& image) {
    mazeImage = image.clone();
    if (mazeImage.empty()) {
       
        return;
    }

    wallColor = cv::Vec3b(0, 0, 0);
}

bool OpenCVMazeCollision::isColliding(int x, int y) {
    if (x < 0 || y < 0 || x >= mazeImage.cols || y >= mazeImage.rows) {
        return true;
    }

    cv::Vec3b pixelColor = mazeImage.at<cv::Vec3b>(y, x);
    return isWallColor(pixelColor);
}

bool OpenCVMazeCollision::isColliding(float x, float y) {
    return isColliding(static_cast<int>(x), static_cast<int>(y));
}

bool OpenCVMazeCollision::isRectColliding(const cv::Rect& rect) {
    cv::Rect imageBounds(0, 0, mazeImage.cols, mazeImage.rows);
    if (!(rect & imageBounds).area()) {
        return true;
    }

    for (int x = rect.x; x < rect.x + rect.width; x += std::max(1, rect.width / 4)) {
        for (int y = rect.y; y < rect.y + rect.height; y += std::max(1, rect.height / 4)) {
            if (x >= 0 && y >= 0 && x < mazeImage.cols && y < mazeImage.rows) {
                if (isWallColor(mazeImage.at<cv::Vec3b>(y, x))) {
                    return true;
                }
            }
        }
    }
    return false;
}

bool OpenCVMazeCollision::isWallColor(const cv::Vec3b& color, int tolerance) {
    return (color[0] <= tolerance && color[1] <= tolerance && color[2] <= tolerance);
}

cv::Size OpenCVMazeCollision::getMazeSize() const {
    return mazeImage.size();
}

cv::Mat OpenCVMazeCollision::getImage() const {
    return mazeImage.clone();
}

void OpenCVMazeCollision::debugPixelInfo(int x, int y) {
    if (x >= 0 && y >= 0 && x < mazeImage.cols && y < mazeImage.rows) {
        cv::Vec3b color = mazeImage.at<cv::Vec3b>(y, x);
       
    }
}