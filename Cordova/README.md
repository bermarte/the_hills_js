# install Cordova CLI
```
sudo npm install -g cordova
```
# create boilerplate
```
cordova create games com.bermarte.games games
```
# run project
first add a platform, then run a server
```
cordova platform ls
cordova platform add browser
cordova run
```
install plugins
```
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-battery-status
cordova plugin add cordova-plugin-splashscreen
cordova plugin ls
```
install module
```
npm install shelljs --save-dev
```
create node_modules
```
npm install --save-dev cordova-set-version
```
to remove a platform
```
cordova platform rm browser
```
run server with watch using phonegap
```
sudo npm install -g phonegap
phonegap serve
```
to build project for Android, in my case using jdk1.8.0_251<br>
https://docs.datastax.com/en/jdk-install/doc/jdk-install/installOracleJdkDeb.html

```
sudo mkdir -p /usr/lib/jvm
sudo tar zxvf jdk-*-linux-x64.tar.gz -C /usr/lib/jvm
sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk1.8.0_251/bin/java" 1
sudo update-alternatives --set java /usr/lib/jvm/jdk1.8.0_251/bin/java
java -version
```
Check<br>
https://studiolacosanostra.github.io/2019/07/29/Cordova-Setup-Android-SDK-on-Ubuntu/<br>
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements<br>
```
mkdir ~/sdk/
unzip -d ~/sdk/sdk-tools-linux ./commandlinetools-linux-6200805_latest.zip
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk1.8.0_251/bin/javac" 0
sudo update-alternatives --set javac /usr/lib/jvm/jdk1.8.0_251/bin/javac
```
install gradle<br>
https://linuxize.com/post/how-to-install-gradle-on-ubuntu-18-04/<br>
edit .bashrc<br>
see https://stackoverflow.com/questions/26256279/how-to-set-android-home-path-in-ubuntu
```
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=~/sdk/sdk-tools-linux/
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_251/
export PATH=${PATH}:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin
export GRADLE_HOME=/opt/gradle/gradle-6.4.1
export PATH=${GRADLE_HOME}/bin:${PATH}
```
load .bashrc<br>
```
source ~/.bashrc
```
I neede specifically an older version of Cordova to run android 4.1<br>
https://stackoverflow.com/questions/48217823/how-to-compile-cordova-apps-for-older-android-versions
```
cordova platform add android@6.4.0
```
in general to create a project with Cordova, add android and then run it
```
cordova create myApp com.name.app hello
cd myApp
cordova platform add android --save
cordova run android --save
```
to run on an emulator I had to do like that<br>
```
export ANDROID_HOME=$HOME/Android/Sdk export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$PATH
```
build<br>
https://cordova.apache.org/docs/en/latest/guide/platforms/android/
```
cordova build android
```



