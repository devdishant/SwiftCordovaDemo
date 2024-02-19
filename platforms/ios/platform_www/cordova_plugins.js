cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.dishant.plugins.checkInput.CheckInputPlugin",
      "file": "plugins/com.dishant.plugins.checkInput/www/CheckInputPlugin.js",
      "pluginId": "com.dishant.plugins.checkInput",
      "clobbers": [
        "checkInput"
      ]
    }
  ];
  module.exports.metadata = {
    "com.dishant.plugins.checkInput": "1.0.0"
  };
});