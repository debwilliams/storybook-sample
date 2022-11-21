#1/bin/sh

#****************************
# Storybook-sample fresh installer
# In terminal, enter ./bin/reinstall.sh
#****************************

cd $(dirname $0)

rm -rf ../node_modules
rm -rf ../package-lock.json
rm -rf ../yarn.lock
cd ..
yarn
