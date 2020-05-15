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
