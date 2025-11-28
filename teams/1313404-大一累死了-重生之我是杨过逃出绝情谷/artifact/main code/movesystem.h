#ifndef MOVESYSTEM_H
#define MOVESYSTEM_H

#include <opencv2/opencv.hpp>
#include <vector>
#include <string>

class OpenCVMazeCollision {
private:
    cv::Mat mazeImage;
    cv::Vec3b wallColor;

public:
    OpenCVMazeCollision(const std::string& imagePath);
    OpenCVMazeCollision(const cv::Mat& image);
    bool isColliding(int x, int y);
    bool isColliding(float x, float y);
    bool isRectColliding(const cv::Rect& rect);
    bool isWallColor(const cv::Vec3b& color, int tolerance = 30);
    cv::Size getMazeSize() const;
    cv::Mat getImage() const;
    void debugPixelInfo(int x, int y);
};

struct TriggerZone {
    cv::Rect area;
    int targetScene;
    cv::Point spawnPoint;
    std::string type;
};

struct Scene {
    std::string name;
    cv::Mat image;
    OpenCVMazeCollision collisionDetector;
    std::vector<TriggerZone> triggers;
    cv::Size windowSize;

    Scene() : collisionDetector(cv::Mat()) {}

    Scene(const std::string& sceneName, const cv::Mat& sceneImage)
        : name(sceneName), image(sceneImage), collisionDetector(sceneImage) {
        windowSize = image.size();
    }
};

#endif // MOVESYSTEM_H