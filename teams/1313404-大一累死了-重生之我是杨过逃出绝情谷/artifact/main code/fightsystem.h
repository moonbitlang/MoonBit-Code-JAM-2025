#pragma once
#ifndef FIGHTSYSTEM_H
#define FIGHTSYSTEM_H

#include "common.h"
#include <vector>
#include <string>

using namespace cv;
using namespace std;

// 战斗角色属性
struct BattleStats {
    int health;
    int maxHealth;
    int attackDamage;
    double attackSpeed;
    int attackRange;
    double lastAttackTime;
    bool isAttacking;
    string attackType;
    string currentAnimation;
    double animationStartTime;
    int moveSpeed;


    double skill1Cooldown;      // 玉女素心剑法CD
    double skill2Cooldown;      // 天罗地网式CD
    double skill1LastUsedTime;  // 玉女素心剑法上次使用时间
    double skill2LastUsedTime;  // 天罗地网式上次使用时间
};

// 战斗角色类
class BattleCharacter {
public:
    string name;
    int size;
    Point position;
    BattleStats stats;
    bool isChasing = false;
    string facing = "right";

    // 杨过的方向性动画帧
    vector<Mat> yangguo_idleLeftFrames;
    vector<Mat> yangguo_idleRightFrames;
    vector<Mat> yangguo_sprintLeftFrames;
    vector<Mat> yangguo_sprintRightFrames;
    vector<Mat> yangguo_attackFrames;

    // 公孙止的方向性动画帧
    vector<Mat> gongsunzhi_idleLeftFrames;
    vector<Mat> gongsunzhi_idleRightFrames;
    vector<Mat> gongsunzhi_battleFrames;  // 只有这个，没有 battleRightFrames

    // 通用动画帧
    vector<Mat> idleFrames;
    vector<Mat> sprintFrames;
    vector<Mat> battleFrames;
    vector<Mat> attackFrames;

    void setAnimation(const string& animationType);
    void updateAnimation();
    void move(const string& direction, int sceneWidth, int sceneHeight);
    void chaseTarget(const Point& target, double deltaTime, int sceneWidth, int sceneHeight);
    Mat getCurrentFrame() const;

private:
    const vector<Mat>& getFacingFrames(const vector<Mat>& leftFrames, const vector<Mat>& rightFrames) const;
};
// 战斗系统主类
class FightSystem {
private:
    bool battleActive;
    double lastBattleUpdateTime;
    bool isUsingSkill;
    double skillStartTime;
    string currentSkill;
    int battleSceneWidth;

    vector<string> battleLog;

    // 新增：控制说明相关
    bool showControlHelp;
    double controlHelpStartTime;
    bool battleLogicPaused;

public:
    BattleCharacter yangguo;
    BattleCharacter gongsunzhi;

    // 使用外部定义的 GameState（在 common.h 中）
    GameState currentGameState;

    FightSystem();

    // 战斗管理
    void startBattle(int sceneWidth);
    void endBattle();
    void updateBattle(double currentTime);
    bool isBattleActive() const { return battleActive; }

    // 玩家输入处理
    void handlePlayerMove(int key);
    void handlePlayerAttack(int key);

    // 渲染
    void renderBattle(Mat& displayImage);

    // 工具函数
    void setGameState(const GameState& state) { currentGameState = state; }
    void addBattleLog(const string& message);

    // 将 initializeBattleCharacters 改为 public，以便在 main.cpp 中调用
    void initializeBattleCharacters();

private:
    vector<Mat> loadBattleFrames(const string& characterName,
        const string& animationType,
        int frameCount, int size,int startFrame=1);
    bool isInAttackRange(const BattleCharacter& attacker, const BattleCharacter& target);
    void performAttack(BattleCharacter& attacker, BattleCharacter& target, const string& skillName);
    void updateCharacterAnimations(double currentTime);
    double lastMoveTime;
};

// 创建默认战斗帧的函数声明
Mat createDefaultBattleFrame(const string& characterName, const string& animationType, int frameIndex, int size);

#endif // FIGHTSYSTEM_H