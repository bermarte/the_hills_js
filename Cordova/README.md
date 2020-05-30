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
# Android platform
https://askubuntu.com/questions/634082/how-to-install-android-studio-on-ubuntu
Download Android Studio https://developer.android.com/studio
```
sudo tar -xzvf android-studio-ide-* -d /opt
```
## Create a desktop file
```
nano ~/.local/share/applications/androidstudio.desktop
```
paste this entry<br>
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
Install a specific SDK version and create a virtual device

## Install the JDK
To build project for Android using the JDK provided by Oracle (in my case I am using jdk1.8.0_251),
the user must be logged in before downloading the JDK.<br>
https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html#license-lightbox<br>
I have downloaded the Linux x64 Compressed Archive (jdk-8u251-linux-x64.tar.gz)<br>
https://docs.datastax.com/en/jdk-install/doc/jdk-install/installOracleJdkDeb.html

```
sudo mkdir -p /usr/lib/jvm
sudo tar zxvf jdk-*-linux-x64.tar.gz -C /usr/lib/jvm
sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk1.8.0_251/bin/java" 1
sudo update-alternatives --set java /usr/lib/jvm/jdk1.8.0_251/bin/java
```
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
install gradle<br>
https://linuxize.com/post/how-to-install-gradle-on-ubuntu-18-04/<br>
```
wget https://services.gradle.org/distributions/gradle-6.4.1-bin.zip -P /tmp
sudo unzip -d /opt/gradle /tmp/gradle-*.zip
ls /opt/gradle/gradle-6.4.1
sudo nano /etc/profile.d/gradle.sh
```
add these lines
```
export GRADLE_HOME=/opt/gradle/gradle-6.4.1
export PATH=${GRADLE_HOME}/bin:${PATH}
```
Check if the installation of Java and Javac and Gradle is ok<br>
```
java -version
javac -version
gradle -version
```

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
# Build project against specific SDK
I neede specifically an older version of android SDK to run on a device which is compatible with android 4.1<br>
https://stackoverflow.com/questions/48217823/how-to-compile-cordova-apps-for-older-android-versions
```
cordova platform add android@6.4.0
```
# Emulator
to run on an emulator I had to do like that<br>
```
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$PATH
```
build https://cordova.apache.org/docs/en/latest/guide/platforms/android/
```
cordova build android
```
# Recap
in general to create a project with Cordova, add android and then run it
```
cordova create myApp com.name.app hello
cd myApp
cordova platform add android --save
cordova run android --save
```
