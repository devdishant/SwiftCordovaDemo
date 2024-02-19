cordova.define("com.dishant.plugins.checkInput.CheckInputPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.displayInput = function (arg0, success, error) {
    exec(success, error, 'CheckInputPlugin', 'displayInput', [arg0]);
};

});
