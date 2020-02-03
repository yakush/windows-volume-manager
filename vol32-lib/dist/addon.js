"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native = require('bindings')('addon');
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.testStatic = function () {
        console.log("* from lib (static) :" + native.test1());
    };
    Library.prototype.test = function () {
        console.log("* from lib (instance) :" + native.test1());
    };
    return Library;
}());
exports.Library = Library;
//console.log(addon.test1());
//# sourceMappingURL=addon.js.map