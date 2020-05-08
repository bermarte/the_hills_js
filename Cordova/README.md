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
cordova plugin add cordova-plugin-device --save
cordova plugin add cordova-plugin-battery-status --save
cordova plugin ls
```
create node_modules
```
npm install --save-dev cordova-set-version
```
to remove a platform
```
cordova platform rm browser
```
