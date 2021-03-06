# Run this project
```
npm install
phonegap serve
```
# How to install Cordova
## Install Cordova CLI
```
sudo npm install -g cordova
```
## Create a boilerplate
```
cordova create games com.bermarte.games games
```
## Add the browser platform and run Cordova server
```
cordova platform ls
cordova platform add browser
cordova run
```
## Install plugins
```
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-battery-status
cordova plugin add cordova-plugin-splashscreen
cordova plugin ls
```
## Install a module
```
npm install shelljs --save-dev
```
## Create node_modules
```
npm install --save-dev cordova-set-version
```
or
```
npm install
```
## Remove a platform
```
cordova platform rm browser
```
## Run server with watch using phonegap
```
sudo npm install -g phonegap
phonegap serve
```
# Android platform (Ubuntu)
## Android Studio
https://askubuntu.com/questions/634082/how-to-install-android-studio-on-ubuntu <br>
https://developer.android.com/studio
```
sudo tar -xzvf android-studio-ide-* -d /opt
```
## Create a desktop file
```
nano ~/.local/share/applications/androidstudio.desktop
```
paste this<br>
```
[Desktop Entry]
Version=1.0
Type=Application
Name=Android Studio
Exec="/opt/android-studio/bin/studio.sh" %f
Icon=/opt/android-studio/bin/studio.png
Categories=Development;IDE;
Terminal=false
StartupNotify=true
StartupWMClass=android-studio
```
Start Android Studio, by running ./studio.sh inside /opt/android-studio/bin or using the desktop file, complete the installation.<br>
Install a specific SDK version and create a virtual device using Android Studio.

## Download and install the JDK
To download the JDK provided by Oracle (here it's jdk1.8.0_251),
the user must be logged in first.<br>
https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html#license-lightbox<br>
https://docs.datastax.com/en/jdk-install/doc/jdk-install/installOracleJdkDeb.html

```
sudo mkdir -p /usr/lib/jvm
sudo tar zxvf jdk-*-linux-x64.tar.gz -C /usr/lib/jvm
sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk1.8.0_251/bin/java" 1
sudo update-alternatives --set java /usr/lib/jvm/jdk1.8.0_251/bin/java
```
## Download and install the command line tools
Here it's commandlinetools-linux-6514223_latest.zip, it could be different.<br>
https://studiolacosanostra.github.io/2019/07/29/Cordova-Setup-Android-SDK-on-Ubuntu/<br>
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements<br>
download https://dl.google.com/android/repository/commandlinetools-linux-6514223_latest.zip
Prepare the SDK
```
mkdir ~/sdk/
unzip -d ~/sdk/sdk-tools-linux ./commandlinetools-linux-6514223_latest.zip
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk1.8.0_251/bin/javac" 0
sudo update-alternatives --set javac /usr/lib/jvm/jdk1.8.0_251/bin/javac
```
Install gradle (gradle-6.4.1 or above)<br>
https://linuxize.com/post/how-to-install-gradle-on-ubuntu-18-04/
```
wget https://services.gradle.org/distributions/gradle-6.4.1-bin.zip -P /tmp
sudo unzip -d /opt/gradle /tmp/gradle-*.zip
ls /opt/gradle/gradle-6.4.1
sudo nano /etc/profile.d/gradle.sh
```
Paste these two lines
```
export GRADLE_HOME=/opt/gradle/gradle-6.4.1
export PATH=${GRADLE_HOME}/bin:${PATH}
```
Check if the installation of Java and Javac and Gradle is ok.
```
java -version
javac -version
gradle -version
```

Edit the .bashrc file<br>
https://stackoverflow.com/questions/26256279/how-to-set-android-home-path-in-ubuntu
```
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=~/sdk/sdk-tools-linux/
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_251/
export PATH=${PATH}:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin
export GRADLE_HOME=/opt/gradle/gradle-6.4.1
export PATH=${GRADLE_HOME}/bin:${PATH}
```
Load the .bashrc file
```
source ~/.bashrc
```
# Build project against specific SDK
To use an older version of android SDK, in this case android 4.1<br>
https://stackoverflow.com/questions/48217823/how-to-compile-cordova-apps-for-older-android-versions
https://cordova.apache.org/docs/en/latest/guide/platforms/android/
```
cordova platform remove android
cordova platform add android@6.4.0
```
# Emulator
```
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$PATH
```
launch emulator
```
cordova emulate android
```
# Recap
in general to create a project with Cordova, add android and then run it
```
cordova create myApp com.name.app hello
cd myApp
cordova platform add android --save
cordova run android --save
```
<img src='games/res/twenty-one_mobile.png' width='300'>
