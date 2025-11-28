cmake_minimum_required(VERSION 3.10)
project(MyGame)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 查找 OpenCV
find_package(OpenCV REQUIRED)
message(STATUS "OpenCV found: ${OpenCV_FOUND}")
message(STATUS "OpenCV libraries: ${OpenCV_LIBS}")

# 方式1：使用 pkg-config 查找 FreeType（推荐，跨平台）
find_package(PkgConfig REQUIRED)
pkg_check_modules(FREETYPE REQUIRED freetype2)
message(STATUS "FreeType include dirs: ${FREETYPE_INCLUDE_DIRS}")
message(STATUS "FreeType libraries: ${FREETYPE_LIBRARIES}")
add_executable(mygame 
    main.cpp 
    movesystem.cpp 
    fightsystem.cpp
)

# 包含目录
target_include_directories(mygame PRIVATE 
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${FREETYPE_INCLUDE_DIRS}      # 来自 pkg-config
    ${FREETYPE_INCLUDE_DIRS}/freetype2  # 某些系统需要这个
)

# 链接库
target_link_libraries(mygame PRIVATE 
    ${OpenCV_LIBS}
    ${FREETYPE_LIBRARIES}         # 来自 pkg-config
)

# 添加编译定义（如果需要）
target_compile_definitions(mygame PRIVATE 
    FREETYPE_GL_IMPLEMENTATION
)