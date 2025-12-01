rm survivors.js
rm target/js/release/build/survivors.js
moon build --target js
cp target/js/release/build/survivors.js ./
cat index.html > index-with-js.html
echo "<script>" >> index-with-js.html
cat survivors.js >> index-with-js.html
echo  "</script>" >> index-with-js.html
mkdir -p output/artifact

cp README.md output/
cp -f index.html output/artifact/
cp -f survivors.js output/artifact/
#cp -f index-with-js.html output/artifact/
cp -rf assets output/artifact/

mkdir -p suboutput/artifact
cp README.md suboutput/
cp -f index.html suboutput/artifact/
cp -f survivors.js suboutput/artifact/
#cp -f index-with-js.html output/artifact/
cp -rf assets suboutput/artifact/


mkdir -p static
cp index.html static
cp survivors.js static
cp -r assets static

mkdir -p electron/public
cp index.html electron
cp survivors.js electron
cp PROMPT electron
cp -r assets electron

cp index.html electron/public
cp survivors.js electron/public
cp PROMPT electron/public
cp -r assets electron/public

cd electron
sudo electron-packager . --platform=darwin,win32,linux --arch=x64 --out=release-builds --overwrite
cp -r release-builds ../output/artifact
cd ..
cp survivors.js wxapp/

cat src/*.mbt > src/backup

cp index.html ../moda/mini111
cp survivors.js ../moda/mini111
cp Dockerfile ../moda/mini111
cp local-llm.py ../moda/mini111
cp -r assets ../moda/mini111
cp electron/server.js ../moda/mini111


python -m http.server 7999   