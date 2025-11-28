#include "fightsystem.h"
#include "common.h"
#include "stdafx.h"
#define _CRT_SECURE_NO_WARNINGS
#include <iostream>

// FightSystem 构造函数
FightSystem::FightSystem() :
    battleActive(false),
    lastBattleUpdateTime(0),
    isUsingSkill(false),
    skillStartTime(0),
    battleSceneWidth(800),
    showControlHelp(false),
    controlHelpStartTime(0),
    battleLogicPaused(false),// 初始化为false
    lastMoveTime(0)
   
{
    currentGameState = { false, false, false, false, false };
}
// 根据面向方向获取对应的动画帧
const vector<Mat>& BattleCharacter::getFacingFrames(const vector<Mat>& leftFrames, const vector<Mat>& rightFrames) const {
    return (facing == "left") ? leftFrames : rightFrames;
}

vector<Mat> FightSystem::loadBattleFrames(const string& baseName, const string& animationType, int frameCount, int size,int startFrame) {
    vector<Mat> frames;

    cout << "=== 开始加载战斗帧 ===" << endl;
    cout << "基础名称: " << baseName << " 动画类型: " << animationType << " 帧数: " << frameCount << " 尺寸: " << size << endl;

    for (int i = 1; i <= frameCount; i++) {
        vector<string> possibleFilenames;

        // 根据你的文件名格式生成可能的文件名
        if (animationType.find("sprint") != string::npos) {
            // 疾跑动画：sprint_right1, sprint_right2, sprint_left1, sprint_left2
            possibleFilenames = {
                baseName + to_string(i) + ".png",
                baseName + to_string(i) + ".jpg",
                baseName + "_" + to_string(i) + ".png",
                baseName + ".png"
            };
        }
        else if (animationType.find("yangguo") != string::npos) {
            // 杨过静止和攻击动画
            if (baseName == "yangguo_left" || baseName == "yangguo_right") {
                // 静止动画：yangguo_left1, yangguo_right1
                possibleFilenames = {
                    baseName + "1.png",
                    baseName + ".png",
                    baseName + "1.jpg",
                    baseName + ".jpg"
                };
            }
            else {
                // 攻击动画：yangguo2, yangguo3, yangguo4
                possibleFilenames = {
                "yangguo" + to_string(i) + ".png",
                "yangguo_" + to_string(i) + ".png",
                "yangguo_attack" + to_string(i - startFrame + 1) + ".png",
                "yangguo_attack.png",
                baseName + ".png"
             
                 
                };
            }
        }
        else if (baseName.find("gongsunzhi") != string::npos) {
            // 公孙止动画：gongsunzhi1.png, gongsunzhi2.png 等
            possibleFilenames = {
                "gongsunzhi" + to_string(i) + ".png",
                "gongsunzhi" + to_string(i) + ".jpg",
                baseName + to_string(i) + ".png",
                baseName + to_string(i) + ".jpg",
                baseName + ".png"
            };
        }
        else {
            // 其他动画的默认文件名格式
            possibleFilenames = {
                baseName + to_string(i) + ".png",
                baseName + "_" + to_string(i) + ".png",
                baseName + animationType + to_string(i) + ".png",
                baseName + ".png"
            };
        }

        Mat frame;
        bool loaded = false;
        string loadedFilename;

        for (const auto& filename : possibleFilenames) {
            cout << "尝试加载: " << filename << endl;
            frame = imread(filename, IMREAD_UNCHANGED);
            if (!frame.empty()) {
                loaded = true;
                loadedFilename = filename;
                cout << "✓ 成功加载: " << filename << endl;

                // 调整尺寸
                cv::resize(frame, frame, Size(size, size), 0, 0, INTER_LINEAR);
                frame = removeWhiteBackground(frame);
                break;
            }
        }

        if (!loaded) {
            cout << "✗ 所有文件都加载失败，创建默认图像" << endl;
            frame = createDefaultBattleFrame(baseName, animationType, i, size);
        }
        else {
            cout << "使用文件: " << loadedFilename << endl;
        }

        frames.push_back(frame);
    }

    cout << "=== 加载完成，共 " << frames.size() << " 帧 ===" << endl;
    return frames;
}

Mat createDefaultBattleFrame(const string& characterName, const string& animationType, int frameIndex, int size) {
    Mat frame = Mat(size, size, CV_8UC4, Scalar(0, 0, 0, 0));

    Scalar color;
    string text;
    string direction = "";

    // 检测方向
    if (animationType.find("_left") != string::npos) {
        direction = "左";
    }
    else if (animationType.find("_right") != string::npos) {
        direction = "右";
    }

    string baseType = animationType;
    if (!direction.empty()) {
        baseType = animationType.substr(0, animationType.find("_"));
    }

    if (characterName.find("yangguo") != string::npos) {
        // 杨过的颜色逻辑保持不变
        // ... 原有的杨过逻辑
    }
    else if (characterName.find("gongsunzhi") != string::npos) {
        if (baseType == "idle") {
            color = Scalar(139, 0, 0, 255);
            text = "公孙止-待机" + to_string(frameIndex);
        }
        else if (baseType == "battle") {
            color = Scalar(178, 34, 34, 255);
            text = "公孙止-战斗" + to_string(frameIndex);
        }
        else {
            color = Scalar(128, 128, 128, 255);
            text = "公孙止-默认" + to_string(frameIndex);
        }

        // 为公孙止添加更多视觉变化，便于区分5帧动画
        if (baseType == "battle") {
            int intensity = 150 + (frameIndex * 20);
            color = Scalar(min(intensity, 255), 34, 34, 255);
        }
    }

    circle(frame, Point(size / 2, size / 2), size / 2 - 10, color, -1);

    string frameText = text + "(" + to_string(frameIndex) + ")";
    putText(frame, frameText, Point(5, size / 2), FONT_HERSHEY_SIMPLEX, 0.3,
        Scalar(255, 255, 255, 255), 1, LINE_AA);

    return frame;
}

void FightSystem::initializeBattleCharacters() {
    cout << "=== 初始化战斗角色 ===" << endl;

    yangguo.name = "杨过";
    yangguo.size = 120;
    yangguo.position = Point(200, 300);
    yangguo.facing = "right";

    cout << "加载杨过动画帧..." << endl;

    // 只加载必要的动画帧
    yangguo.yangguo_sprintLeftFrames = loadBattleFrames("sprint_left", "", 2, yangguo.size);
    yangguo.yangguo_sprintRightFrames = loadBattleFrames("sprint_right", "", 2, yangguo.size);
    yangguo.yangguo_idleLeftFrames = loadBattleFrames("yangguo_left", "", 1, yangguo.size);
    yangguo.yangguo_idleRightFrames = loadBattleFrames("yangguo_right", "", 1, yangguo.size);
    yangguo.yangguo_attackFrames = loadBattleFrames("yangguo", "attack", 3, yangguo.size,2);

    // 设置通用动画帧
    yangguo.idleFrames = yangguo.yangguo_idleRightFrames;
    yangguo.sprintFrames = yangguo.yangguo_sprintRightFrames;
    yangguo.attackFrames = yangguo.yangguo_attackFrames;

    cout << "杨过动画帧统计:" << endl;
    cout << "- 待机左: " << yangguo.yangguo_idleLeftFrames.size() << " 帧" << endl;
    cout << "- 待机右: " << yangguo.yangguo_idleRightFrames.size() << " 帧" << endl;
    cout << "- 疾跑左: " << yangguo.yangguo_sprintLeftFrames.size() << " 帧" << endl;
    cout << "- 疾跑右: " << yangguo.yangguo_sprintRightFrames.size() << " 帧" << endl;
    cout << "- 攻击: " << yangguo.yangguo_attackFrames.size() << " 帧" << endl;

    yangguo.stats.health = 3379;
    yangguo.stats.maxHealth = 3379;
    yangguo.stats.attackDamage = 43;
    yangguo.stats.attackSpeed = 0.2;
    yangguo.stats.attackRange = 50;
    yangguo.stats.lastAttackTime = 0;
    yangguo.stats.isAttacking = false;
    yangguo.stats.attackType = "普通攻击";
    yangguo.stats.currentAnimation = "idle";
    yangguo.stats.animationStartTime = 0;
    yangguo.stats.moveSpeed = 6;
    yangguo.stats.skill1Cooldown = 10.0;      // 玉女素心剑法CD 3秒
    yangguo.stats.skill2Cooldown = 3.0;      // 天罗地网式CD 2秒
    yangguo.stats.skill1LastUsedTime = -10;  // 初始化为负值，表示可以立即使用
    yangguo.stats.skill2LastUsedTime = -10;

    gongsunzhi.name = "公孙止";
    gongsunzhi.size = 150;
    gongsunzhi.position = Point(500, 300);

    cout << "加载公孙止动画帧..." << endl;

    gongsunzhi.battleFrames = loadBattleFrames("gongsunzhi", "battle", 5, gongsunzhi.size);

    cout << "公孙止动画帧统计:" << endl;
  
    cout << "- 战斗: " << gongsunzhi.battleFrames.size() << " 帧" << endl;
   
    
    gongsunzhi.stats.health = 9999;
    gongsunzhi.stats.maxHealth = 9999;
    gongsunzhi.stats.attackDamage = 300;
    gongsunzhi.stats.attackSpeed = 2;
    gongsunzhi.stats.attackRange = 40;
    gongsunzhi.stats.lastAttackTime = 0;
    gongsunzhi.stats.isAttacking = false;
    gongsunzhi.stats.attackType = "普通攻击";
    gongsunzhi.stats.currentAnimation = "battle";
    gongsunzhi.stats.animationStartTime = 0;
    gongsunzhi.stats.moveSpeed = 0;

    cout << "=== 角色初始化完成 ===" << endl;
}
void FightSystem::startBattle(int sceneWidth) {
    battleActive = true;
    battleSceneWidth = sceneWidth;
    lastBattleUpdateTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();
    lastMoveTime = lastBattleUpdateTime;
    battleLog.clear();

    // 设置初始位置
    yangguo.position = Point(100, 300);
    gongsunzhi.position = Point(600, 300);
    yangguo.facing = "right";

    yangguo.setAnimation("idle");
    gongsunzhi.setAnimation("battle");

    // 设置控制说明显示时间，并暂停战斗逻辑
    showControlHelp = true;
    battleLogicPaused = true;  // 暂停战斗逻辑
    controlHelpStartTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();

    
    // 中毒状态提示
  
}
void FightSystem::endBattle() {
    battleActive = false;
    isUsingSkill = false;
    
}

void BattleCharacter::move(const string& direction, int sceneWidth, int sceneHeight) {
    int moveDistance = stats.moveSpeed;

    if (direction == "left") {
        position.x = max(0, position.x - moveDistance);
    }
    else if (direction == "right") {
        position.x = min(sceneWidth - size, position.x + moveDistance);
    }
    else if (direction == "up") {
        position.y = max(0, position.y - moveDistance);
    }
    else if (direction == "down") {
        position.y = min(sceneHeight - size, position.y + moveDistance);
    }

    // 移除这里的 setAnimation("sprint")，让调用者决定动画状态
}
void FightSystem::handlePlayerMove(int key) {
    if (!battleActive || battleLogicPaused) return;

    int sceneHeight = 600;
    double currentTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();

    switch (key) {
    case 'a': case 'A':
        yangguo.move("left", battleSceneWidth, sceneHeight);
        yangguo.facing = "left";
        yangguo.setAnimation("sprint");
        lastMoveTime = currentTime;  // 使用成员变量
        cout << "向左移动，设置疾跑动画" << endl;
        break;
    case 'd': case 'D':
        yangguo.move("right", battleSceneWidth, sceneHeight);
        yangguo.facing = "right";
        yangguo.setAnimation("sprint");
        lastMoveTime = currentTime;  // 使用成员变量
        cout << "向右移动，设置疾跑动画" << endl;
        break;
    case 'w': case 'W':
        yangguo.move("up", battleSceneWidth, sceneHeight);
        yangguo.setAnimation("sprint");
        lastMoveTime = currentTime;  // 使用成员变量
        cout << "向上移动，设置疾跑动画" << endl;
        break;
    case 's': case 'S':
        yangguo.move("down", battleSceneWidth, sceneHeight);
        yangguo.setAnimation("sprint");
        lastMoveTime = currentTime;  // 使用成员变量
        cout << "向下移动，设置疾跑动画" << endl;
        break;
    }
}
void BattleCharacter::updateAnimation() {
    // 空实现 - 因为动画帧切换逻辑已经在 getCurrentFrame() 中处理了
    // 这个函数只是为了保持接口一致性
}

void FightSystem::updateCharacterAnimations(double currentTime) {
    if (!battleActive) return;

    // 杨过的动画逻辑 - 攻击动画优先级最高
    if (yangguo.stats.isAttacking) {
        if (yangguo.stats.currentAnimation != "attack") {
            yangguo.setAnimation("attack");
            cout << "杨过设置攻击动画" << endl;
        }
    }
    else if (yangguo.stats.currentAnimation == "sprint") {
        // 保持疾跑动画一段时间
        if (currentTime - lastMoveTime > 0.5) {
            yangguo.setAnimation("idle");
            cout << "杨过切换到静止动画" << endl;
        }
    }
    else {
        // 默认状态使用静止动画
        yangguo.setAnimation("idle");
    }

    // 公孙止的动画逻辑 - 始终使用战斗动画
    if (gongsunzhi.stats.currentAnimation != "battle") {
        gongsunzhi.setAnimation("battle");
        cout << "公孙止设置为战斗动画" << endl;
    }
}
void FightSystem::updateBattle(double currentTime) {
    if (!battleActive) return;

    double deltaTime = currentTime - lastBattleUpdateTime;
    lastBattleUpdateTime = currentTime;

    // 检查控制说明显示时间
    if (showControlHelp && (currentTime - controlHelpStartTime > 3.0)) {
        showControlHelp = false;
        battleLogicPaused = false;
    }

    if (battleLogicPaused) {
        updateCharacterAnimations(currentTime);
        return;
    }

    // 杨过中毒扣血逻辑
    static double lastPoisonTime = 0;
    if (currentTime - lastPoisonTime >= 0.5) {
        lastPoisonTime = currentTime;

        if (!currentGameState.foundJueqingdan && yangguo.stats.health > 0) {
            int poisonDamage = 4;
            yangguo.stats.health -= poisonDamage;
            if (yangguo.stats.health < 0) yangguo.stats.health = 0;

            addBattleLog("杨过中毒！扣血 " + to_string(poisonDamage) + " 点");
            addBattleLog("杨过剩余血量: " + to_string(yangguo.stats.health) + "/" + to_string(yangguo.stats.maxHealth));

            if (yangguo.stats.health <= 0) {
                endBattle();
                return;
            }
        }
    }

    updateCharacterAnimations(currentTime);

    int sceneHeight = 600;
    gongsunzhi.chaseTarget(yangguo.position, deltaTime, battleSceneWidth, sceneHeight);

    // 攻击状态重置
    if (yangguo.stats.isAttacking &&
        currentTime - yangguo.stats.lastAttackTime >= 0.8) {
        yangguo.stats.isAttacking = false;
    }

    // 公孙止攻击逻辑
    if (currentTime - gongsunzhi.stats.lastAttackTime >= gongsunzhi.stats.attackSpeed) {
        if (isInAttackRange(gongsunzhi, yangguo)) {
            performAttack(gongsunzhi, yangguo, "普通攻击");
            gongsunzhi.stats.lastAttackTime = currentTime;
        }
    }

    if (yangguo.stats.health <= 0 || gongsunzhi.stats.health <= 0) {
        endBattle();
    }
}
void FightSystem::handlePlayerAttack(int key) {
    if (!battleActive || battleLogicPaused) return;

    double currentTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();

    if (currentTime - yangguo.stats.lastAttackTime >= yangguo.stats.attackSpeed) {
        yangguo.stats.isAttacking = true;
        yangguo.setAnimation("attack");

        bool inRange = isInAttackRange(yangguo, gongsunzhi);

        switch (key) {
        case '1':
            // 检查玉女素心剑法CD
            if (currentTime - yangguo.stats.skill1LastUsedTime < yangguo.stats.skill1Cooldown) {
                double remainingCD = yangguo.stats.skill1Cooldown - (currentTime - yangguo.stats.skill1LastUsedTime);
               
                return;
            }

            if (inRange) {
                performAttack(yangguo, gongsunzhi, "玉女素心剑法");
              
                yangguo.stats.skill1LastUsedTime = currentTime;  // 记录使用时间
            }
            else {
               
                yangguo.stats.skill1LastUsedTime = currentTime;  // 即使没命中也进入CD
            }
            break;

        case '2':
            // 检查天罗地网式CD
            if (currentTime - yangguo.stats.skill2LastUsedTime < yangguo.stats.skill2Cooldown) {
                double remainingCD = yangguo.stats.skill2Cooldown - (currentTime - yangguo.stats.skill2LastUsedTime);
              
                return;
            }

            if (inRange) {
                performAttack(yangguo, gongsunzhi, "天罗地网式");
               
                yangguo.stats.skill2LastUsedTime = currentTime;
            }
            else {
               
                yangguo.stats.skill2LastUsedTime = currentTime;
            }
            break;

        case ' ':
            if (inRange) {
                performAttack(yangguo, gongsunzhi, "普通攻击");
             
            }
            else {
             
            }
            break;
        }

        yangguo.stats.lastAttackTime = currentTime;
    }
    else {
       
    }
}
bool FightSystem::isInAttackRange(const BattleCharacter& attacker, const BattleCharacter& target) {
    double distance = norm(attacker.position - target.position);
    return distance <= attacker.stats.attackRange;
}

void FightSystem::performAttack(BattleCharacter& attacker, BattleCharacter& target, const string& skillName) {
    int baseDamage = attacker.stats.attackDamage;
    int finalDamage = baseDamage;

    // 带血的酒加成
    if (currentGameState.foundBloodyWine && &attacker == &yangguo) {
        finalDamage = static_cast<int>(baseDamage * 1.2);
    }

    // 技能伤害加成
    if (skillName == "玉女素心剑法") {
        if (!currentGameState.foundXiaolongnv) {
          
            return;
        }
        finalDamage = 3000; 
       
    }
    else if (skillName == "天罗地网式") {
        finalDamage = static_cast<int>(finalDamage * 1.8);  // 技能2：1.8倍伤害
      
    }
    else {
       
    }

    // 正常扣血（绝情丹不再免除攻击伤害，只免除中毒扣血）
    target.stats.health -= finalDamage;
    if (target.stats.health < 0) target.stats.health = 0;

    

    // 带血的酒提示
    if (currentGameState.foundBloodyWine && &attacker == &yangguo) {
       
    }
}

Mat BattleCharacter::getCurrentFrame() const {
    const vector<Mat>* frames = nullptr;
    double animDuration = 0.5; // 默认动画持续时间

    if (name == "公孙止") {
        if (!battleFrames.empty()) {
            frames = &battleFrames;
            animDuration = 0.3;
        }
    }
    else if (name == "杨过") {
        if (stats.currentAnimation == "idle") {
            if (!yangguo_idleLeftFrames.empty() && !yangguo_idleRightFrames.empty()) {
                frames = &getFacingFrames(yangguo_idleLeftFrames, yangguo_idleRightFrames);
                animDuration = 1.0;
            }
        }
        else if (stats.currentAnimation == "sprint") {
            if (!yangguo_sprintLeftFrames.empty() && !yangguo_sprintRightFrames.empty()) {
                frames = &getFacingFrames(yangguo_sprintLeftFrames, yangguo_sprintRightFrames);
                animDuration = 0.2;
            }
        }
        else if (stats.currentAnimation == "attack") {
            if (!yangguo_attackFrames.empty()) {
                frames = &yangguo_attackFrames;
                animDuration = 0.8; // 增加攻击动画持续时间
                cout << "杨过攻击动画帧数: " << yangguo_attackFrames.size() << endl;
            }
        }
    }

    if (frames && !frames->empty()) {
        double currentTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();
        double timeSinceStart = currentTime - stats.animationStartTime;

        // 更稳定的帧索引计算
        int totalFrames = frames->size();
        double frameTime = animDuration / totalFrames;
        int frameIndex = static_cast<int>(timeSinceStart / frameTime) % totalFrames;

        // 确保帧索引在有效范围内
        frameIndex = max(0, min(frameIndex, totalFrames - 1));

        cout << name << " 动画: " << stats.currentAnimation
            << " 帧 " << frameIndex + 1 << "/" << totalFrames
            << " 时间: " << timeSinceStart << "s" << endl;

        return (*frames)[frameIndex];
    }

    cout << "警告: " << name << " 没有找到动画帧 for " << stats.currentAnimation << endl;
    return Mat();
}

void FightSystem::renderBattle(Mat& displayImage) {
    if (!battleActive) return;

    // 使用半透明背景而不是纯色
    Mat overlay = displayImage.clone();
    rectangle(overlay, Point(0, 0), Point(displayImage.cols, displayImage.rows),
        Scalar(50, 50, 50, 128), FILLED);
    addWeighted(displayImage, 0.1, overlay, 0.9, 0, displayImage);

    // 渲染角色
    Mat yangguoFrame = yangguo.getCurrentFrame();
    if (!yangguoFrame.empty()) {
        overlayImage(displayImage, yangguoFrame, yangguo.position.x, yangguo.position.y);
    }

    Mat gongsunzhiFrame = gongsunzhi.getCurrentFrame();
    if (!gongsunzhiFrame.empty()) {
        overlayImage(displayImage, gongsunzhiFrame, gongsunzhi.position.x, gongsunzhi.position.y);
    }

    // 血条 - 在顶部显示
    int yangguoHealthBarWidth = 200;
    int yangguoHealthPercent = (yangguo.stats.health * yangguoHealthBarWidth) / yangguo.stats.maxHealth;
    rectangle(displayImage, Point(50, 20), Point(50 + yangguoHealthBarWidth, 40), Scalar(100, 100, 100), FILLED);
    rectangle(displayImage, Point(50, 20), Point(50 + yangguoHealthPercent, 40), Scalar(0, 255, 0), FILLED);
    putText(displayImage, "杨过: " + to_string(yangguo.stats.health) + "/" + to_string(yangguo.stats.maxHealth),
        Point(50, 15), FONT_HERSHEY_SIMPLEX, 0.6, Scalar(255, 255, 255), 2);

    int gongsunzhiHealthBarWidth = 200;
    int gongsunzhiHealthPercent = (gongsunzhi.stats.health * gongsunzhiHealthBarWidth) / gongsunzhi.stats.maxHealth;
    rectangle(displayImage, Point(displayImage.cols - 250, 20),
        Point(displayImage.cols - 250 + gongsunzhiHealthBarWidth, 40), Scalar(100, 100, 100), FILLED);
    rectangle(displayImage, Point(displayImage.cols - 250, 20),
        Point(displayImage.cols - 250 + gongsunzhiHealthPercent, 40), Scalar(0, 0, 255), FILLED);
    putText(displayImage, "公孙止: " + to_string(gongsunzhi.stats.health) + "/" + to_string(gongsunzhi.stats.maxHealth),
        Point(displayImage.cols - 250, 15), FONT_HERSHEY_SIMPLEX, 0.6, Scalar(255, 255, 255), 2);

    // 状态图标 - 在中间显示艺术字，3秒后消失
    double currentTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();
    if (currentTime - controlHelpStartTime <= 3.0) {
        int centerX = displayImage.cols / 2;
        int centerY = displayImage.rows / 2 - 100;

        //// 绘制半透明背景框
        //Mat statusOverlay = displayImage.clone();
        //rectangle(statusOverlay,
        //    Point(centerX - 200, centerY - 80),
        //    Point(centerX + 200, centerY + 80),
        //    Scalar(0, 0, 0, 180), FILLED);
        //addWeighted(displayImage, 0.3, statusOverlay, 0.7, 0, displayImage);

        //// 绘制边框
        //rectangle(displayImage,
        //    Point(centerX - 200, centerY - 80),
        //    Point(centerX + 200, centerY + 80),
        //    Scalar(255, 215, 0), 3);

        int iconY = centerY - 50;

        if (currentGameState.foundXiaolongnv) {
            // 艺术字效果 - 带阴影
           
            iconY += 35;
        }
        if (currentGameState.foundJueqingdan) {
          
            iconY += 35;
        }
        if (currentGameState.foundBloodyWine) {
           
        }
    }

    // 控制说明 - 对话框模式显示3秒后消失
    //if (showControlHelp && (currentTime - controlHelpStartTime <= 3.0)) {
    //    int dialogX = displayImage.cols / 2 - 250;
    //    int dialogY = displayImage.rows - 200;

    //    // 绘制对话框背景
    //    Mat dialogOverlay = displayImage.clone();
    //    rectangle(dialogOverlay,
    //        Point(dialogX - 20, dialogY - 20),
    //        Point(dialogX + 500, dialogY + 120),
    //        Scalar(0, 0, 0, 200), FILLED);
    //    addWeighted(displayImage, 0.2, dialogOverlay, 0.8, 0, displayImage);

    //    // 绘制对话框边框
    //    rectangle(displayImage,
    //        Point(dialogX - 20, dialogY - 20),
    //        Point(dialogX + 500, dialogY + 120),
    //        Scalar(255, 255, 0), 2);

    //    // 绘制标题
    //    putChineseText(displayImage, "战斗控制说明",
    //        Point(dialogX, dialogY), Scalar(255, 255, 0), 24);

    //    // 绘制控制说明
    //    putChineseText(displayImage, "移动: W上 S下 A左 D右",
    //        Point(dialogX, dialogY + 30), Scalar(255, 255, 255), 18);
    //    putChineseText(displayImage, "攻击: 空格-普通攻击 1-玉女剑法 2-天罗地网",
    //        Point(dialogX, dialogY + 55), Scalar(255, 255, 255), 18);
    //    putChineseText(displayImage, "ESC退出战斗",
    //        Point(dialogX, dialogY + 80), Scalar(255, 200, 200), 18);
    //}

    // 退出战斗提示 - 始终显示在底部
    putChineseText(displayImage, "ESC退出战斗",
        Point(50, displayImage.rows - 30), Scalar(255, 255, 255), 16);
}

void FightSystem::addBattleLog(const string& message) {
    battleLog.push_back(message);
    if (battleLog.size() > 20) {
        battleLog.erase(battleLog.begin());
    }
    cout << message << endl;
}

void BattleCharacter::setAnimation(const string& animationType) {
    if (stats.currentAnimation != animationType) {
        cout << name << " 动画从 " << stats.currentAnimation << " 切换到 " << animationType << endl;
        stats.currentAnimation = animationType;
        stats.animationStartTime = static_cast<double>(cv::getTickCount()) / cv::getTickFrequency();
    }
}

void BattleCharacter::chaseTarget(const Point& target, double deltaTime, int sceneWidth, int sceneHeight) {
    // 增加追逐速度
    int chaseSpeed = 80;  // 从20增加到80，让公孙止移动更快

    // 计算移动距离
    int moveDistance = static_cast<int>(chaseSpeed * deltaTime);
    if (moveDistance < 1) moveDistance = 1;  // 确保至少移动1像素

    // 计算方向向量
    Point direction = target - position;
    double distance = norm(direction);

    // 如果距离较远，开始追逐
    if (distance > stats.attackRange) {
        // 标准化方向向量
        if (distance > 0) {
            direction.x = static_cast<int>((direction.x / distance) * moveDistance);
            direction.y = static_cast<int>((direction.y / distance) * moveDistance);
        }

        // 更新位置
        position.x += direction.x;
        position.y += direction.y;

        // 更新面向方向
        if (direction.x < 0) {
            facing = "left";
        }
        else if (direction.x > 0) {
            facing = "right";
        }

        isChasing = true;

        // 设置追逐动画
        if (name == "公孙止") {
            setAnimation("battle");
        }
    }
    else {
        // 在攻击范围内，停止追逐
        isChasing = false;
    }

    // 边界检查
    position.x = max(0, min(sceneWidth - size, position.x));
    position.y = max(0, min(sceneHeight - size, position.y));
}