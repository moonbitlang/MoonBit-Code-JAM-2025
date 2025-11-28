#pragma comment(linker, "/SUBSYSTEM:WINDOWS /ENTRY:mainCRTStartup")
#include<windows.h>
#include <opencv2/core/core.hpp>
#include "movesystem.h"
#include "fightsystem.h"
#include "common.h"
#include "stdafx.h"
#define _CRT_SECURE_NO_WARNINGS
#include <opencv2/imgproc/imgproc.hpp>
#include <opencv2/highgui/highgui.hpp>
#include <iostream>
#include <vector>
#include <chrono>
using namespace cv;
using namespace std;

struct Character
{
    Point position;
    vector<Mat> walkLeftFrames;
    vector<Mat> walkRightFrames;
    int currentFrame = 0;
    int frameDelay = 0;
    int frameSpeed = 6;
    bool isMoving = false;
    string direction = "right";
    int characterSize = 40;


    int width() const {
        if (!getCurrentFrames().empty())
            return getCurrentFrames()[currentFrame].cols;
        return 0;
    }
    int height() const {
        if (!getCurrentFrames().empty())
            return getCurrentFrames()[currentFrame].rows;
        return 0;
    }

    const vector<Mat>& getCurrentFrames() const {
        return (direction == "left") ? walkLeftFrames : walkRightFrames;
    }

    Mat getCurrentFrame() const {
        const auto& frames = getCurrentFrames();
        if (!frames.empty() && currentFrame < frames.size()) {
            return frames[currentFrame];
        }
        return Mat();
    }

    void setSize(int newSize) {
        if (characterSize != newSize) {
            characterSize = newSize;
        }
    }
};

int currentScene = 0;
Character player;
vector<Scene> scenes;
GameState gameState;
FightSystem fightSystem;
bool inBattle = false;

Mat chestImage;
Mat caveImage;
Mat pillImage;
Mat xiaolongnvImage;
Mat battleBackground;
Mat gongsunlveImage;
Mat qiuchiImage;
Mat wineImage;
Mat victoryImage;
Mat defeatImage;

vector<Mat> chestAnimationFrames;
vector<Mat> pillAnimationFrames;
vector<Mat> xiaolongnvAnimationFrames;

bool showAnimation = false;
int animationFrame = 0;
string currentAnimationType = "";

bool showDialogue = false;
string dialogueText = "";
string currentDisplayText = "";
double dialogueStartTime = 0;
double lastCharTime = 0;
int currentCharIndex = 0;
bool dialogueFinished = false;
double charDelay = 0.1;

bool showWineAfterDialogue = false;
double wineShowStartTime = 0;

bool showBattleResult = false;
string battleResultType = ""; // "victory" 或 "defeat"
int battleResultFrame = 0;
double battleResultStartTime = 0;

Mat createDefaultAnimationFrame(const string& type, int frameIndex, int width) {
    Mat frame(width, width, CV_8UC4, Scalar(0, 0, 0, 255));

    if (type.find("chest") != string::npos) {
        rectangle(frame, Point(10, 10), Point(width - 10, width - 10),
            Scalar(139, 69, 19, 255), -1);

        if (frameIndex == 1) {
            rectangle(frame, Point(width / 2 - 8, 15), Point(width / 2 + 8, 25),
                Scalar(192, 192, 192, 255), -1);
            putText(frame, "1", Point(width / 2 - 5, 45), FONT_HERSHEY_SIMPLEX, 0.5, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else {
            rectangle(frame, Point(20, 20), Point(width - 20, width - 30),
                Scalar(255, 215, 0, 255), -1);
            putText(frame, "2", Point(width / 2 - 5, 45), FONT_HERSHEY_SIMPLEX, 0.5, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
    }
    else if (type.find("pill") != string::npos) {
        circle(frame, Point(width / 2, width / 2), width / 2 - 10,
            Scalar(255, 0, 0, 255), -1);
        circle(frame, Point(width / 2, width / 2), width / 4,
            Scalar(255, 200, 200, 255), -1);
        circle(frame, Point(width / 2, width / 2), width / 8,
            Scalar(255, 255, 255, 255), -1);
        putText(frame, "Pill", Point(15, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
    }
    else if (type.find("xiaolongnv") != string::npos) {
        circle(frame, Point(width / 2, width / 2), width / 2 - 10,
            Scalar(255, 182, 193, 255), -1);
        putText(frame, "小龙女", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
    }
    else if (type.find("kongfu") != string::npos) {
        circle(frame, Point(width / 2, width / 2), width / 2 - 10,
            Scalar(255, 105, 180, 255), -1);
        line(frame, Point(width / 2, 20), Point(width / 2, width - 20),
            Scalar(255, 255, 255, 255), 4);
    }

    return frame;
}

Mat loadAndResizeImage(const string& filename, int width = 80) {
    Mat img = imread(filename, IMREAD_UNCHANGED);

    if (img.empty()) {
        Mat placeholder(width, width, CV_8UC4, Scalar(0, 0, 0, 255));

        if (filename.find("chest") != string::npos) {
            rectangle(placeholder, Point(10, 10), Point(width - 10, width - 10), Scalar(0, 255, 255, 255), -1);
            putText(placeholder, "Chest", Point(15, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(0, 0, 0, 255), 1, LINE_AA);
        }
        else if (filename.find("cave") != string::npos) {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 10, Scalar(100, 100, 100, 255), -1);
            putText(placeholder, "Cave", Point(20, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else if (filename.find("pill") != string::npos) {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 5, Scalar(0, 0, 255, 255), -1);
            putText(placeholder, "pill", Point(25, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else if (filename.find("xiaolongnv") != string::npos) {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 5, Scalar(255, 182, 193, 255), -1);
            putText(placeholder, "小龙女", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else if (filename.find("gongsunlve") != string::npos) {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 5, Scalar(0, 255, 0, 255), -1);
            putText(placeholder, "绿萼", Point(20, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else if (filename.find("qiuchi") != string::npos) {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 5, Scalar(128, 0, 128, 255), -1);
            putText(placeholder, "裘千尺", Point(10, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else if (filename.find("wine") != string::npos) {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 5, Scalar(0, 0, 255, 255), -1);
            circle(placeholder, Point(width / 2, width / 2), width / 4, Scalar(200, 0, 0, 255), -1);
            putText(placeholder, "Wine", Point(15, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
        }
        else {
            circle(placeholder, Point(width / 2, width / 2), width / 2 - 5, Scalar(255, 255, 255, 255), -1);
        }
        return placeholder;
    }

    double aspectRatio = (double)img.rows / img.cols;
    int height = (int)(width * aspectRatio);

    cv::resize(img, img, Size(width, height), 0, 0, INTER_LINEAR);
    img = removeWhiteBackground(img);

    return img;
}

vector<Mat> loadWalkFrames(const string& direction, int frameCount = 3, int width = 25) {
    vector<Mat> frames;

    for (int i = 1; i <= frameCount; i++) {
        string filename = direction + to_string(i) + ".png";
        Mat frame = loadAndResizeImage(filename, width);

        if (frame.empty()) {
            frame = Mat(width, width, CV_8UC4, Scalar(0, 0, 0, 255));

            if (direction == "left") {
                if (i == 1) {
                    circle(frame, Point(width / 2, width / 2), width / 2 - 5, Scalar(0, 255, 0, 255), -1);
                    putText(frame, "L1", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
                }
                else if (i == 2) {
                    circle(frame, Point(width / 2 - 2, width / 2), width / 2 - 5, Scalar(0, 200, 0, 255), -1);
                    putText(frame, "L2", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
                }
                else {
                    circle(frame, Point(width / 2 + 2, width / 2), width / 2 - 5, Scalar(0, 150, 0, 255), -1);
                    putText(frame, "L3", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
                }
            }
            else {
                if (i == 1) {
                    circle(frame, Point(width / 2, width / 2), width / 2 - 5, Scalar(255, 0, 0, 255), -1);
                    putText(frame, "R1", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
                }
                else if (i == 2) {
                    circle(frame, Point(width / 2 + 2, width / 2), width / 2 - 5, Scalar(200, 0, 0, 255), -1);
                    putText(frame, "R2", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
                }
                else {
                    circle(frame, Point(width / 2 - 2, width / 2), width / 2 - 5, Scalar(150, 0, 0, 255), -1);
                    putText(frame, "R3", Point(5, width / 2), FONT_HERSHEY_SIMPLEX, 0.4, Scalar(255, 255, 255, 255), 1, LINE_AA);
                }
            }
        }

        frames.push_back(frame);
    }

    return frames;
}

vector<Mat> loadAnimationFrames(const string& baseName, int frameCount, int width = 80) {
    vector<Mat> frames;

    if (baseName == "kongfu") {
        frameCount = 1;
    }

    for (int i = 1; i <= frameCount; i++) {
        vector<string> possibleFilenames;

        if (baseName == "kongfu") {
            possibleFilenames = {
                "kongfu.png",
                "kongfu1.png",
                "KongFu.png",
                "KONGFU.png"
            };
        }
        else {
            possibleFilenames = {
                baseName + to_string(i) + ".png",
                baseName + "_anim" + to_string(i) + ".png",
                baseName + "anim" + to_string(i) + ".png",
                "chest_anim" + to_string(i) + ".png",
                "pill_anim" + to_string(i) + ".png",
                "xiaolongnv" + to_string(i) + ".png",
                baseName + ".png"
            };
        }

        Mat frame;
        bool loaded = false;

        for (const auto& filename : possibleFilenames) {
            frame = loadAndResizeImage(filename, width);
            if (!frame.empty()) {
                loaded = true;
                break;
            }
        }

        if (!loaded) {
            frame = createDefaultAnimationFrame(baseName, i, width);
        }

        frames.push_back(frame);
    }

    return frames;
}

Point findSafeStartingPosition() {
    Point desiredPosition(340, 620);
    Rect testRect(desiredPosition.x, desiredPosition.y, player.width(), player.height());

    if (!scenes[0].collisionDetector.isRectColliding(testRect)) {
        return desiredPosition;
    }

    vector<Point> nearbyPositions = {
        Point(340, 620),
        Point(340, 610), Point(340, 630),
        Point(330, 620), Point(350, 620),
        Point(330, 610), Point(350, 610),
        Point(330, 630), Point(350, 630),
        Point(320, 620), Point(360, 620),
        Point(340, 600), Point(340, 640)
    };

    for (const auto& pos : nearbyPositions) {
        Rect testRect(pos.x, pos.y, player.width(), player.height());
        if (!scenes[0].collisionDetector.isRectColliding(testRect)) {
            return pos;
        }
    }

    vector<Point> safePositions = {
        Point(100, 100), Point(200, 200), Point(350, 100),
        Point(100, 350), Point(600, 100), Point(600, 600),
        Point(100, 600), Point(350, 350), Point(500, 500)
    };

    for (const auto& pos : safePositions) {
        Rect testRect(pos.x, pos.y, player.width(), player.height());
        if (!scenes[0].collisionDetector.isRectColliding(testRect)) {
            return pos;
        }
    }

    for (int y = 50; y < scenes[0].image.rows - 50; y += 10) {
        for (int x = 50; x < scenes[0].image.cols - 50; x += 10) {
            Rect testRect(x, y, player.width(), player.height());
            if (!scenes[0].collisionDetector.isRectColliding(testRect)) {
                return Point(x, y);
            }
        }
    }

    return Point(340, 620);
}

void reloadCharacterAnimation() {
    Point savedPosition = player.position;
    string savedDirection = player.direction;
    bool savedMoving = player.isMoving;

    player.walkLeftFrames = loadWalkFrames("left", 3, player.characterSize);
    player.walkRightFrames = loadWalkFrames("right", 3, player.characterSize);

    player.position = savedPosition;
    player.direction = savedDirection;
    player.isMoving = savedMoving;
    player.currentFrame = 0;
    player.frameDelay = 0;
}

void drawAnimation(Mat& displayImage) {
    if (!showAnimation) return;

    int centerX = displayImage.cols / 2;
    int centerY = displayImage.rows / 2;

    Mat overlay = displayImage.clone();
    rectangle(overlay, Point(0, 0), Point(displayImage.cols, displayImage.rows),
        Scalar(0, 0, 0), FILLED);
    overlay = overlay * 0.7;

    if (currentAnimationType == "chest") {
        int totalFrames = chestAnimationFrames.size();
        if (totalFrames > 0) {
            int frameIndex = min(animationFrame / 5, totalFrames - 1);
            Mat& frame = chestAnimationFrames[frameIndex];

            int x = centerX - frame.cols / 2;
            int y = centerY - frame.rows / 2;
            overlayImage(overlay, frame, x, y);
        }
    }
    else if (currentAnimationType == "pill") {
        int totalFrames = pillAnimationFrames.size();
        if (totalFrames > 0) {
            int frameIndex = min(animationFrame / 5, totalFrames - 1);
            Mat& frame = pillAnimationFrames[frameIndex];

            int x = centerX - frame.cols / 2;
            int y = centerY - frame.rows / 2;
            overlayImage(overlay, frame, x, y);
        }
    }
    else if (currentAnimationType == "xiaolongnv") {
        int totalFrames = xiaolongnvAnimationFrames.size();
        if (totalFrames > 0) {
            int frameIndex = min(animationFrame / 5, totalFrames - 1);
            Mat& frame = xiaolongnvAnimationFrames[frameIndex];

            int x = centerX - frame.cols / 2;
            int y = centerY - frame.rows / 2;
            overlayImage(overlay, frame, x, y);
        }
    }
    else if (currentAnimationType == "kongfu") {
        vector<Mat> kongfuFrames = loadAnimationFrames("kongfu", 1, 200);

        if (!kongfuFrames.empty() && !kongfuFrames[0].empty()) {
            Mat& frame = kongfuFrames[0];
            int x = centerX - frame.cols / 2;
            int y = centerY - frame.rows / 2;
            overlayImage(overlay, frame, x, y);
        }
        else {
            Mat defaultFrame = createDefaultAnimationFrame("kongfu", 1, 200);
            int x = centerX - defaultFrame.cols / 2;
            int y = centerY - defaultFrame.rows / 2;
            overlayImage(overlay, defaultFrame, x, y);
        }
    }

    addWeighted(displayImage, 0.3, overlay, 0.7, 0, displayImage);

    animationFrame++;

    int maxFrames = 0;
    if (currentAnimationType == "chest") {
        maxFrames = chestAnimationFrames.size() * 5;
    }
    else if (currentAnimationType == "pill") {
        maxFrames = pillAnimationFrames.size() * 5;
    }
    else if (currentAnimationType == "xiaolongnv") {
        maxFrames = xiaolongnvAnimationFrames.size() * 5;
    }
    else if (currentAnimationType == "kongfu") {
        maxFrames = 3;
    }

    if (animationFrame >= maxFrames) {
        if (currentAnimationType == "chest") {
            currentAnimationType = "pill";
            animationFrame = 0;
            gameState.foundJueqingdan = true;
            gameState.openedChest = true;
        }
        else if (currentAnimationType == "xiaolongnv" || currentAnimationType == "kongfu") {
            gameState.foundXiaolongnv = true;
            showAnimation = false;
            animationFrame = 0;
            currentAnimationType = "";
        }
        else {
            showAnimation = false;
            animationFrame = 0;
            currentAnimationType = "";
        }
    }
}

void updateCharacterAnimation() {
    const auto& currentFrames = player.getCurrentFrames();
    if (currentFrames.empty()) return;

    if (player.isMoving) {
        player.frameDelay++;
        if (player.frameDelay >= player.frameSpeed) {
            player.currentFrame = (player.currentFrame + 1) % currentFrames.size();
            player.frameDelay = 0;
        }
    }
    else {
        player.currentFrame = 0;
        player.frameDelay = 0;
    }
}

void updateDialogue(double currentTime) {
    if (!showDialogue || dialogueFinished) return;

    if (currentCharIndex >= dialogueText.length()) {
        dialogueFinished = true;
        return;
    }

    if (currentTime - lastCharTime >= charDelay) {
        currentDisplayText += dialogueText[currentCharIndex];
        currentCharIndex++;
        lastCharTime = currentTime;

        if (currentCharIndex >= dialogueText.length()) {
            dialogueFinished = true;
        }
    }
}

void drawWineImage(Mat& displayImage) {
    int centerX = displayImage.cols / 2;
    int centerY = displayImage.rows / 2;

    Mat overlay = displayImage.clone();
    rectangle(overlay, Point(0, 0), Point(displayImage.cols, displayImage.rows),
        Scalar(0, 0, 0, 180), FILLED);
    addWeighted(displayImage, 0.3, overlay, 0.7, 0, displayImage);

    if (!wineImage.empty()) {
        int wineSize = 150;
        Mat resizedWine;
        cv::resize(wineImage, resizedWine, Size(wineSize, wineSize));

        int x = centerX - resizedWine.cols / 2;
        int y = centerY - resizedWine.rows / 2;
        overlayImage(displayImage, resizedWine, x, y);

       
    }
}

void drawDialogue(Mat& displayImage) {
    if (!showDialogue) return;

    int centerX = displayImage.cols / 2;
    int centerY = displayImage.rows / 2;

    Mat overlay = displayImage.clone();
    rectangle(overlay, Point(0, 0), Point(displayImage.cols, displayImage.rows),
        Scalar(0, 0, 0, 180), FILLED);
    addWeighted(displayImage, 0.3, overlay, 0.7, 0, displayImage);

    int dialogWidth = 600;
    int dialogHeight = 200;
    int dialogX = centerX - dialogWidth / 2;
    int dialogY = centerY + 50;

    rectangle(displayImage,
        Point(dialogX - 10, dialogY - 10),
        Point(dialogX + dialogWidth + 10, dialogY + dialogHeight + 10),
        Scalar(50, 50, 50), FILLED);
    rectangle(displayImage,
        Point(dialogX - 10, dialogY - 10),
        Point(dialogX + dialogWidth + 10, dialogY + dialogHeight + 10),
        Scalar(255, 215, 0), 3);

    if (!qiuchiImage.empty()) {
        int headX = dialogX + 20;
        int headY = dialogY + 20;
        overlayImage(displayImage, qiuchiImage, headX, headY);
        putChineseText(displayImage, "裘千尺",
            Point(headX, headY - 10), Scalar(255, 255, 0), 18);
    }

    if (!gongsunlveImage.empty()) {
        int headX = dialogX + dialogWidth - 100;
        int headY = dialogY + 20;
        overlayImage(displayImage, gongsunlveImage, headX, headY);
        putChineseText(displayImage, "公孙绿萼",
            Point(headX - 20, headY - 10), Scalar(255, 255, 0), 18);
    }

    if (!wineImage.empty()) {
        int wineX = dialogX - 80;
        int wineY = dialogY + 50;
        overlayImage(displayImage, wineImage, wineX, wineY);
        putChineseText(displayImage, "血酒",
            Point(wineX - 10, wineY + wineImage.rows + 20), Scalar(255, 0, 0), 16);
    }

    int textX = dialogX + 120;
    int textY = dialogY + 60;

    vector<string> lines;
    string currentLine = "";
    for (char c : currentDisplayText) {
        currentLine += c;
        if (currentLine.length() >= 15) {
            lines.push_back(currentLine);
            currentLine = "";
        }
    }
    if (!currentLine.empty()) {
        lines.push_back(currentLine);
    }

    for (int i = 0; i < lines.size(); i++) {
        putChineseText(displayImage, lines[i],
            Point(textX, textY + i * 30), Scalar(255, 255, 255), 20);
    }

    if (dialogueFinished) {
        putChineseText(displayImage, "按任意键继续...",
            Point(dialogX + dialogWidth - 150, dialogY + dialogHeight - 10),
            Scalar(255, 255, 0), 16);
    }
}

void initializeGame()
{
    gameState = { false, false, false, false, false };

    Mat mazeimg = imread("maze.png");
    Mat valleyimg = imread("valley.png");
    Mat lakeimg = imread("lake.png");
    victoryImage = loadAndResizeImage("victory.png", 720);
    defeatImage = loadAndResizeImage("defeat.png", 720);

    battleBackground = imread("battle_bg.png");
    if (battleBackground.empty()) {
        battleBackground = imread("valley.png");
        if (battleBackground.empty()) {
            battleBackground = Mat(600, 800, CV_8UC3, Scalar(50, 50, 50));
        }
    }

    cv::resize(battleBackground, battleBackground, Size(800, 600));

    chestImage = loadAndResizeImage("chest1.png", 50);
    caveImage = loadAndResizeImage("cave.png", 50);
    pillImage = loadAndResizeImage("pill.png", 50);
    xiaolongnvImage = loadAndResizeImage("xiaolongnv.png", 50);
    gongsunlveImage = loadAndResizeImage("gongsunlve.png", 80);
    qiuchiImage = loadAndResizeImage("qiuchi.png", 80);

    wineImage = loadAndResizeImage("wine.png", 50);
    if (wineImage.empty()) {
        wineImage = Mat(50, 50, CV_8UC4, Scalar(0, 0, 0, 255));
        circle(wineImage, Point(25, 25), 20, Scalar(0, 0, 255, 255), -1);
        circle(wineImage, Point(25, 25), 10, Scalar(200, 0, 0, 255), -1);
        putText(wineImage, "Wine", Point(10, 25), FONT_HERSHEY_SIMPLEX, 0.3, Scalar(255, 255, 255, 255), 1, LINE_AA);
    }

    chestAnimationFrames = loadAnimationFrames("chest", 2, 120);
    pillAnimationFrames = loadAnimationFrames("pill", 1, 100);
    xiaolongnvAnimationFrames = loadAnimationFrames("xiaolongnv", 1, 120);

    if (mazeimg.empty() || valleyimg.empty() || lakeimg.empty())
    {
        return;
    }

    cv::resize(mazeimg, mazeimg, Size(720, 720), 0, 0, INTER_LINEAR);
    cv::resize(valleyimg, valleyimg, Size(910, 512), 0, 0, INTER_LINEAR);
    cv::resize(lakeimg, lakeimg, Size(910, 512), 0, 0, INTER_LINEAR);

    scenes.clear();

    Scene mazeScene("绝情谷迷宫", mazeimg);
    Scene valleyScene("绝情谷", valleyimg);
    Scene lakeScene("鳄鱼潭", lakeimg);

    mazeScene.triggers = {
        {Rect(50, 610, 50, 50), 2, Point(400, 300), "cave"},
        {Rect(340, 25, 60, 60), 1, Point(200, 200), "valley"},
        {Rect(615, 610, 40, 40), 0, Point(100, 100), "chest"},
        {Rect(570, 100, 50, 50), 0, Point(150, 150), "xiaolongnv"}
    };

    valleyScene.triggers = {
        {Rect(50, 50, 100, 100), 0, Point(340, 620), "cave"}
    };

    lakeScene.triggers = {
        {Rect(50, 400, 60, 60), 0, Point(340, 620), "cave"}
    };

    scenes.push_back(mazeScene);
    scenes.push_back(valleyScene);
    scenes.push_back(lakeScene);

    player.position = Point(340, 620);
    player.characterSize = 40;

    player.walkLeftFrames = loadWalkFrames("left", 3, player.characterSize);
    player.walkRightFrames = loadWalkFrames("right", 3, player.characterSize);

    if (player.walkLeftFrames.empty() || player.walkRightFrames.empty()) {
        vector<Mat> genericFrames = loadWalkFrames("walk", 3, player.characterSize);

        if (!genericFrames.empty()) {
            if (player.walkLeftFrames.empty()) {
                player.walkLeftFrames = genericFrames;
            }
            if (player.walkRightFrames.empty()) {
                player.walkRightFrames = genericFrames;
            }
        }
    }

    if (player.walkLeftFrames.empty()) {
        player.walkLeftFrames = loadWalkFrames("default_left", 3, player.characterSize);
    }
    if (player.walkRightFrames.empty()) {
        player.walkRightFrames = loadWalkFrames("default_right", 3, player.characterSize);
    }

    player.currentFrame = 0;
    player.direction = "right";
    player.isMoving = false;

    if (scenes.size() > 0) {
        Rect playerRect(player.position.x, player.position.y, player.width(), player.height());
        bool collisionAtStart = scenes[0].collisionDetector.isRectColliding(playerRect);
        if (collisionAtStart) {
            player.position = findSafeStartingPosition();
        }
    }
}

void handleInput(int key)
{
    if (showDialogue && dialogueFinished) {
        if (key != -1) {
            showDialogue = false;
            dialogueFinished = false;
            showWineAfterDialogue = true;
            wineShowStartTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();
            return;
        }
    }

    if (showWineAfterDialogue) {
        if (key != -1) {
            showWineAfterDialogue = false;
        }
        return;
    }

    if (showAnimation || showDialogue) return;

    if (inBattle)
    {
        if (key == 'a' || key == 'A' || key == 'd' || key == 'D' ||
            key == 'w' || key == 'W' || key == 's' || key == 'S') {
            fightSystem.handlePlayerMove(key);
        }
        else if (key == '1' || key == '2' || key == ' ') {
            fightSystem.handlePlayerAttack(key);
        }
        else if (key == 27) {
            inBattle = false;
            fightSystem.endBattle();
        }
        return;
    }

    Point newPosition = player.position;
    int moveDistance = 3;
    bool wasMoving = player.isMoving;

    player.isMoving = false;

    switch (key)
    {
    case 'w': case 'W':
        newPosition.y -= moveDistance;
        player.isMoving = true;
        break;
    case 's': case 'S':
        newPosition.y += moveDistance;
        player.isMoving = true;
        break;
    case 'a': case 'A':
        newPosition.x -= moveDistance;
        player.isMoving = true;
        player.direction = "left";
        break;
    case 'd': case 'D':
        newPosition.x += moveDistance;
        player.isMoving = true;
        player.direction = "right";
        break;
    case 'b': case 'B':
        if (!inBattle && currentScene == 1)  // 只能在绝情谷场景（场景1）开始战斗
        {
            inBattle = true;
            fightSystem.setGameState(gameState);
            fightSystem.startBattle(scenes[currentScene].image.cols);
        }
        break;
    default:
        return;
    }

    int sceneWidth = scenes[currentScene].image.cols;
    int sceneHeight = scenes[currentScene].image.rows;

    if (newPosition.x < 0 || newPosition.y < 0 ||
        newPosition.x + player.width() >= sceneWidth ||
        newPosition.y + player.height() >= sceneHeight)
    {
        return;
    }

    if (currentScene == 0) {
        Rect playerRect(newPosition.x, newPosition.y, player.width(), player.height());

        if (!scenes[currentScene].collisionDetector.isRectColliding(playerRect)) {
            player.position = newPosition;
        }
        else {
            player.isMoving = false;
        }
    }
    else {
        player.position = newPosition;
    }
}
void checkTriggerZones()
{
    if (showAnimation || showDialogue) return;

    Rect playerRect(player.position.x, player.position.y, player.width(), player.height());

    for (const auto& zone : scenes[currentScene].triggers) {
        Rect intersection = playerRect & zone.area;

        if (intersection.area() > 0) {
            if (zone.type == "chest" && currentScene == 0) {
                if (!gameState.openedChest) {
                    showAnimation = true;
                    animationFrame = 0;
                    currentAnimationType = "chest";
                }
            }
            else if (zone.type == "xiaolongnv" && currentScene == 0) {
                if (!gameState.foundXiaolongnv) {
                    showAnimation = true;
                    animationFrame = 0;
                    currentAnimationType = "kongfu";
                    gameState.foundXiaolongnv = true;
                    fightSystem.setGameState(gameState);
                }
            }
            else if (zone.type == "cave" && currentScene == 0) {
                gameState.enteredCave = true;
                gameState.foundBloodyWine = true;
                fightSystem.setGameState(gameState);

                int oldScene = currentScene;
                currentScene = zone.targetScene;
                player.position = zone.spawnPoint;

                if (oldScene == 0 && (currentScene == 1 || currentScene == 2)) {
                    player.setSize(120);
                    reloadCharacterAnimation();
                }

                if (currentScene == 2) {
                    showDialogue = true;
                   
                    currentDisplayText = "";
                    currentCharIndex = 0;
                    dialogueStartTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();
                    lastCharTime = dialogueStartTime;
                    dialogueFinished = false;
                    showWineAfterDialogue = false;
                }
            }
            else {
                int oldScene = currentScene;
                currentScene = zone.targetScene;
                player.position = zone.spawnPoint;

                if (oldScene == 0 && (currentScene == 1 || currentScene == 2)) {
                    player.setSize(120);
                    reloadCharacterAnimation();
                }
                else if ((oldScene == 1 || oldScene == 2) && currentScene == 0) {
                    player.setSize(40);
                    reloadCharacterAnimation();
                }
            }
            break;
        }
    }
}

void renderScene()
{
    Mat displayImage = scenes[currentScene].image.clone();

    if (inBattle) {
        fightSystem.renderBattle(displayImage);
        imshow("Battle", displayImage);
        return;
    }

    for (const auto& zone : scenes[currentScene].triggers) {
        if (zone.type == "valley" && currentScene == 0) {
            continue;
        }
        Mat triggerImage;
        string hintText;

        if (zone.type == "chest") {
            triggerImage = chestImage;
        }
        else if (zone.type == "cave") {
            triggerImage = caveImage;
        }
        else if (zone.type == "xiaolongnv") {
            triggerImage = xiaolongnvImage;
        }
        else {
            triggerImage = pillImage;
        }

        overlayImage(displayImage, triggerImage, zone.area.x, zone.area.y);
        putChineseText(displayImage, hintText,
            Point(zone.area.x, zone.area.y - 5),
            Scalar(0, 0, 255), 16);
    }

    Mat currentFrame = player.getCurrentFrame();
    if (!currentFrame.empty()) {
        overlayImage(displayImage, currentFrame, player.position.x, player.position.y);
    }

    if (showAnimation) {
        drawAnimation(displayImage);
    }

    if (showDialogue) {
        drawDialogue(displayImage);
    }

    if (showWineAfterDialogue) {
        drawWineImage(displayImage);
    }

    // 新增：直接显示战斗结果图片（无半透明背景）
    if (showBattleResult) {
        int centerX = displayImage.cols / 2;
        int centerY = displayImage.rows / 2;

        if (battleResultType == "victory" && !victoryImage.empty()) {
            // 直接显示胜利图片
            int x = centerX - victoryImage.cols / 2;
            int y = centerY - victoryImage.rows / 2;
            overlayImage(displayImage, victoryImage, x, y);
        }
        else if (battleResultType == "defeat" && !defeatImage.empty()) {
            // 直接显示失败图片
            int x = centerX - defeatImage.cols / 2;
            int y = centerY - defeatImage.rows / 2;
            overlayImage(displayImage, defeatImage, x, y);
        }
    }

    imshow(scenes[currentScene].name, displayImage);
}

void updateGameLogic() {
    double currentTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();

    if (showDialogue) {
        updateDialogue(currentTime);
    }

    if (showWineAfterDialogue) {
        if (currentTime - wineShowStartTime >= 2.0) {
            showWineAfterDialogue = false;
        }
    }

    updateCharacterAnimation();

    if (inBattle) {
        fightSystem.updateBattle(currentTime);
        if (!fightSystem.isBattleActive()) {
            // 判断战斗结果并触发相应动画
            if (fightSystem.yangguo.stats.health <= 0) {
                showBattleResult = true;
                battleResultType = "defeat";
                battleResultFrame = 0;
                battleResultStartTime = currentTime;
            }
            else if (fightSystem.gongsunzhi.stats.health <= 0) {
                showBattleResult = true;
                battleResultType = "victory";
                battleResultFrame = 0;
                battleResultStartTime = currentTime;
            }
            inBattle = false;
        }
    }
}

int main(int argc, char* argv[])
{
    initializeGame();
    fightSystem.initializeBattleCharacters();

    if (scenes.empty()) {
        return -1;
    }

    namedWindow(scenes[0].name, WINDOW_NORMAL);
    resizeWindow(scenes[0].name, 720, 720);

    while (true)
    {
        updateGameLogic();

        static int renderCounter = 0;
        if (renderCounter % 2 == 0) {
            renderScene();
        }
        renderCounter++;

        int key = waitKey(16);

        if (key == 27) {
            if (inBattle) {
                inBattle = false;
                fightSystem.endBattle();
            }
            else {
                break;
            }
        }

        if (key != -1) {
            handleInput(key);
            if (!inBattle && !showDialogue) {
                checkTriggerZones();
            }
        }
    }

    destroyAllWindows();
    return 0;
}
