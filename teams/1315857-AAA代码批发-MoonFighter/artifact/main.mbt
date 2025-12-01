// python -m http.server
let game: Game = Game::new()

pub fn start() -> Unit {
    @wasm4.trace("MoonFighter started!")
    // 初始化调色板
    @wasm4.set_palette(1, @wasm4.rgb(0xFFFFFF)) // 白色（用于文字、子弹）
    @wasm4.set_palette(2, @wasm4.rgb(0x000000)) // 黑色（背景）
    @wasm4.set_palette(3, @wasm4.rgb(0xFF0000)) // 红色（敌机）
    @wasm4.set_palette(4, @wasm4.rgb(0x00FF00)) // 绿色（可选）
    
    // 设置绘制颜色：color1 = 白色（palette 1），color2 = 红色（palette 3）等
    @wasm4.set_draw_colors(1, index = 1) // DRAW_COLORS[1] = palette 1 (white)
    @wasm4.set_draw_colors(3, index = 2) // DRAW_COLORS[2] = palette 3 (red)
    game.game_over = false
    //@wasm4.trace("game start initialized")
}
pub fn upd() -> Unit {
    //@wasm4.trace("frame start")
    // 在 update() 开头
    if game.game_over {
        //@wasm4.trace("game over branch")
        @wasm4.text("GAME OVER", 35, 70) // "GAME OVER"大约有9个字符，假设每个字符宽度为6像素，所以35大致居中
        // 同样方式处理分数显示
        let score_text = "SCORE: ".to_string() + game.score.to_string();
        // 假设score最大可能长度已知，这里使用一个估计的X值
        @wasm4.text(score_text, 40, 85) // 调整X坐标，使得整体看起来更居中
        @wasm4.text("PRESS R TO RESTART", 5, 100) // 手动调整X坐标以适应文本长度

        let pad = @wasm4.get_gamepad(index = 1)
        if pad.button_1 {
            game.reset()
        }
        return
    }
    @wasm4.set_draw_colors(2) // 假设 palette 2 是黑色
    @wasm4.rect(0, 0, 160, 160) // 全屏黑色背景
    @wasm4.set_draw_colors(0b0001)
    @wasm4.text("MoonBit", 50, 60)
    
    game.handle_input()
    game.update_entities()

    game.frame_count = game.frame_count + 1
    // if game.frame_count % 30 == 0 {
    //     game.spawn_enemy()
    // }
    game.spawn_enemy()
    game.player.draw()
    game.draw_ui()
}
