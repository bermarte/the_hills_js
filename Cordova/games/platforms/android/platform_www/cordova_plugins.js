cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-battery-status.battery",
      "file": "plugins/cordova-plugin-battery-status/www/battery.js",
      "pluginId": "cordova-plugin-battery-status",
      "clobbers": [
        "navigator.battery"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-battery-status": "2.0.3"
  };
});