# Pokemon Moon - 编程语言宝可梦战斗游戏

## 游戏简介

### 创作背景
Pokemoon 是一款基于 MoonBit 语言开发的类宝可梦战斗游戏。我们将编程语言拟人化为宝可梦角色，让程序员在熟悉的编程环境中体验宝可梦战斗的乐趣。每个宝可梦都代表一种编程语言，拥有独特的技能和属性，体现了该语言的特性和文化。

### 玩法目标
- 体验编程语言之间的"战斗"，了解不同语言的特点
- 通过回合制战斗系统，学习编程语言的特性和优势
- 在娱乐中加深对编程语言的理解和认知

### 设计理念
- **文化融合**：结合编程语言文化和宝可梦元素
- **技术展示**：展示 MoonBit 语言在游戏开发中的能力

## 操作说明

### 开始游戏
可以在右侧选择其他pokemoon进行对战
选择pokemoon后 点击开始对战

可以通过重新开始战斗等选项来restart

### 控制方式
- ↑↓←→：移动选择光标
- **Enter键**：确认选择 选中技能
- **X键**：取消选择，返回上级菜单

### 游戏流程
1. **游戏启动**：自动加载 Moonbit月兔 vs Java咖啡杯 的战斗
2. **选择行动**：使用方向键选择战斗选项
   - 战斗：选择技能进行攻击
   - 背包：查看道具（待实现）
   - 宝可梦：查看宝可梦信息（待实现）
   - 逃跑：尝试逃离战斗（待实现）
3. **技能选择**：在技能菜单中使用上下键选择技能，Z键确认
4. **战斗执行**：系统自动计算伤害并更新血条
5. **回合切换**：玩家回合结束后自动切换到敌人回合
6. **胜负判定**：当一方HP归零时战斗结束

## 技术特色

### 关键实现方式

#### 1. 模块化架构设计
- **分离关注点**：将游戏逻辑、渲染系统、输入处理等分离到不同模块
- **状态管理**：使用全局状态管理战斗状态和UI状态
- **组件化UI**：血条、菜单、文本等UI元素独立管理

#### 2. 回合制战斗系统
```moonbit
pub struct BattleState {
  is_active: Bool
  turn: Int
  current_turn_type: TurnType
  player_pokemon: Option[Pokemon]
  enemy_pokemon: Option[Pokemon]
  battle_log: Array[String]
  actions_this_turn: Int
  max_actions_per_turn: Int
}
```

#### 3. 类型克制系统
实现了完整的宝可梦类型克制关系，支持18种属性类型：
- 火、水、草、电、冰、格斗、毒、地面、飞行
- 超能、虫、岩石、幽灵、龙、恶、钢、妖精、普通

#### 4. 伤害计算系统
使用标准宝可梦伤害公式：
```moonbit
// Damage = (((((2 * Level) / 5 + 2) * Power * Attack / Defense) / 50) + 2) * Modifier
let level_factor = (2 * level) / 5 + 2
let base_damage = (level_factor * power * attack) / defense
let damage_before_modifier = base_damage / 50 + 2
let modifier = get_type_effectiveness_multiplier(skill.element_type, defender.types)
let final_damage = (damage_before_modifier.to_double() * modifier).to_int()
```



## 团队信息

### 团队名称
**果壳超玩会**

### 成员名单
- **项目负责人**：KrystalRay
- **核心开发**：KrystalRay
- **游戏设计**：KrystalRay
- **美术资源**：KrystalRay 由nano banana生成，由KrystalRay根据语言特色设计

### 联系方式
- **邮箱**：keeleiray@gmail.com
## 未来规划
目前pokemoon还处在开发阶段，后续将完善基础功能，添加额外特性
完善特性
完善队伍功能
完善技能效果


## 宝可梦图鉴

| ID | 名称 | 类型 | 等级 | 特色技能 |
|----|------|------|------|----------|
| 1 | Python蟒蛇 | 草+龙 | 8 | 藤蔓缠绕、数据流、优雅编程 |
| 2 | Java咖啡杯 | 火+钢 | 7 | 热咖啡、企业级攻击、持久战 |
| 3 | C++齿轮兽 | 钢+恶 | 9 | 指针攻击、内存泄漏、模板编程 |
| 4 | JavaScript电精灵 | 电+妖精 | 6 | 异步闪电、原型链、回调攻击 |
| 5 | C#音符骑士 | 钢+电 | 8 | 音符冲击、LINQ查询、属性攻击 |
| 6 | Go地鼠 | 普通+地面 | 5 | 并发挖掘、协程、快速编译 |
| 7 | Rust螃蟹 | 水+钢 | 8 | 所有权攻击、借用检查、内存安全 |
| 8 | Ruby红宝石龙 | 火+妖精 | 7 | 宝石闪耀、元编程、优雅语法 |
| 9 | PHP大象 | 水+冰 | 4 | 服务器守护、Web开发、数据库连接 |
| 10 | Moonbit月兔 | 超能+妖精 | 10 | 月光编译、代码幻象、星辰跃击 |

---
**构造方式**
在artifact目录下执行

python -m http.server 8080

前往web端 
localhost:8080 
进行游玩


**享受编程语言之间的战斗吧！**
