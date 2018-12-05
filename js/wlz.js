
var wlz = (function (wlz) {
    // 继承方法
    wlz.inherit = (function () {
        // 私有变量，中间层
        var F = function () {};
        return function (Target,Origin)
        {
            F.prototype = Origin.prototype;
            Target.prototype = new F();
            Target.constructor = Target;
            Target.prototype.uber = Origin.prototype;
        };
    }());
    
    return wlz;
})({});