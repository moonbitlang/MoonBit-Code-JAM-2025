// 游戏 UI 测试脚本 - 在浏览器控制台中运行此脚本测试 UI 功能

console.log('=== 游戏 UI 测试开始 ===');

// 测试 1: 检查 gameUI API 是否存在
if (window.gameUI) {
    console.log('✅ gameUI API 已加载');
} else {
    console.error('❌ gameUI API 未找到');
}

// 测试 2: 更新玩家1 HP (模拟受到攻击)
console.log('测试: 玩家1 HP 100 -> 70');
window.gameUI.updateHP(1, 70, 100);

setTimeout(() => {
    console.log('测试: 玩家1 HP 70 -> 40');
    window.gameUI.updateHP(1, 40, 100);
}, 1000);

setTimeout(() => {
    console.log('测试: 玩家1 HP 40 -> 10 (危险)');
    window.gameUI.updateHP(1, 10, 100);
}, 2000);

// 测试 3: 更新玩家2 HP
setTimeout(() => {
    console.log('测试: 玩家2 HP 100 -> 60');
    window.gameUI.updateHP(2, 60, 100);
}, 1500);

setTimeout(() => {
    console.log('测试: 玩家2 HP 60 -> 0 (死亡)');
    window.gameUI.updateHP(2, 0, 100);
}, 3000);

// 测试 4: 更新胜利次数
setTimeout(() => {
    console.log('测试: 玩家1 胜利次数 +1');
    window.gameUI.updateWins(1, 1);
}, 3500);

// 测试 5: 更新游戏状态
setTimeout(() => {
    console.log('测试: 设置状态 "玩家1获胜！"');
    window.gameUI.setStatus('玩家1获胜！');
}, 4000);

// 测试 6: 重置游戏
setTimeout(() => {
    console.log('测试: 重置游戏状态');
    window.gameUI.updateHP(1, 100, 100);
    window.gameUI.updateHP(2, 100, 100);
    window.gameUI.setStatus('等待开始...');
}, 5000);

// 测试 7: 模拟多回合
setTimeout(() => {
    console.log('测试: 模拟回合 2');
    window.gameUI.setStatus('回合 2/5');
    window.gameUI.updateHP(1, 85, 100);
    window.gameUI.updateHP(2, 75, 100);
}, 6000);

setTimeout(() => {
    console.log('测试: 玩家2 获胜');
    window.gameUI.updateHP(1, 0, 100);
    window.gameUI.updateWins(2, 1);
    window.gameUI.setStatus('玩家2获胜！');
}, 7000);

setTimeout(() => {
    console.log('测试: 平局显示');
    window.gameUI.updateHP(1, 100, 100);
    window.gameUI.updateHP(2, 100, 100);
    window.gameUI.setStatus('战况激烈！双方势均力敌');
}, 8000);

setTimeout(() => {
    console.log('=== 游戏 UI 测试完成 ===');
    console.log('如果看到 HP 条、胜利次数、状态都正确更新，说明 UI 工作正常！');
}, 9000);

// 注册开始游戏回调（仅用于测试）
window.gameUI.onStartGame = function() {
    console.log('🎮 开始游戏按钮被点击！');
    console.log('执行游戏初始化...');
    window.gameUI.updateHP(1, 100, 100);
    window.gameUI.updateHP(2, 100, 100);
    window.gameUI.setStatus('游戏进行中...');
    console.log('✅ 游戏初始化完成');
};
