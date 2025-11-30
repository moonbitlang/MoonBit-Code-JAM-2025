# 开发环境
windows 11
ubuntu2024.04（VMware）
macOS 12 （VMware）
node v22.14.0
npm 10.9.2
android studio 2024.3.1
java openjdk 21.0.8 
moon 0.1.20251111 (b17e236 2025-11-11) ~\.moon\bin\moon.exe
moonc v0.6.31+b5b06ff93 (2025-11-11) ~\.moon\bin\moonc.exe
moonrun 0.1.20251111 (b17e236 2025-11-11) ~\.moon\bin\moonrun.exe
moon-pilot 0.0.1-df92511 (2025-11-12) ~\.moon\bin\moon-pilot.bat
微信开发者工具
# 目录说明
- android android相关代码
- native windows，linux，macOS相关代码
- wxgame 微信小游戏相关代码
- web web相关代码



## 从源代码构建

### 前置条件
1. 安装 moon
2. 执行`npm i -g serve`安装 serve 
3. clone repo
4. 进入项目根目录
5. 执行 `npm i` 安装依赖

### web
1. `cd web` 
2. 执行 `moon build` 生成 js 文件
3. `cp ./target/js/release/build/game.js .`
4. `serve` 启动服务器

### windows 
1. 需要先build web
2. `cd native` 切换到 native 目录
3. 执行 `npm i` 安装依赖
4. `cp ../web/game.js .`
5. `npm run build:win`
在dist目录下查看生成的文件 `Tower Defense Game Setup 0.0.1.exe`, 双击运行

### linux 

1. 需要先build web
2. `cd native` 切换到 native 目录
3. 执行 `npm i` 安装依赖
4. `cp ../web/game.js .`
5. `npm run build:linux` 在dist目录下查看生成的文件 `game-0.0.1.tar.gz`, 
6. 解压`tar -zxvf game-0.0.1.tar.gz`
7. 运行`sudo ./game`

### wx-mini-Game

1. `cd wxgame`
2. 配置project.config.json 的 appid （必须配置否则build会失败）
3. `cp ../web/game.js .`
4. 微信开发者工具加载项目


### android
下载android studio 配置相关环境
利用android studio加载

### MacOS
重要！需要再macOS上构建
npm run build:mac