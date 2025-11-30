import os
import shutil

print("moon clean ...")
os.system("cd ../game && moon clean")

print("moon build ...")
os.system("cd ../game && moon build")

src_file = "../game/target/js/release/build/game.js"
# target_file = "game.js"
# print(f"copy {src_file} to {target_file}")
# shutil.copy(src_file,target_file)



import platform

# Determine the operating system and set target path accordingly
if platform.system() == "Windows":
    target_file = r"C:\Users\liujia\Desktop\game-android\app\src\main\assets\game.js"
else:
    target_file = "/mnt/c/Users/liujia/Desktop/game-android/app/src/main/assets/game.js"

print(f"copy {src_file} to {target_file}")
shutil.copy(src_file, target_file)


# print("run serve ...")
# os.system("serve")
print("run gradlew assembleDebug")
os.system("gradlew assembleDebug")