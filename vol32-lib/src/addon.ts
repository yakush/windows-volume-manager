const native = require('bindings')('addon');

class Library {
    static testStatic() {
        console.log("* from lib (static) :" + native.test1());
    }

    test() {
        console.log("* from lib (instance) :" + native.test1());
    }

}
export {Library};

//console.log(addon.test1());