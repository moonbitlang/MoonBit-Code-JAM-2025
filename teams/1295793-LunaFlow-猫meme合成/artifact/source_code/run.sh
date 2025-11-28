moon clean
moon fmt
moon info
moon build --target js
mv ./target/js/release/build/main/main.js ./main.js
python -m http.server 8000