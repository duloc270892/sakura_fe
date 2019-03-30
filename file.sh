#! /bin/bash
rm -R node_modules
cp -av  /Users/pcpc/Desktop/LEARNING/Project_FE/ /Users/pcpc/Desktop/LEARNING/build/$(date +%Y%m%d)
cd /Users/pcpc/Desktop/LEARNING/build/$(date +%Y%m%d); rm -R src
cd /Users/pcpc/Desktop/LEARNING/Project_FE ; npm install