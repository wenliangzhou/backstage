
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
    // 全选方法
    wlz.checkAll = (function () {
        return function ({box}={}) {
            box.forEach(element => {
                var th = element+' th input[type = checkbox]'; 
                var td = element+' td input[type = checkbox]';           
                var boolean = $(th).is(':checked');
                if(boolean){
                    $(td).prop("checked",true);
                }else{
                    $(td).prop("checked",false);
                }

                // 监听全选事件
                $(th).change(function () {
                    var boolean = $(th).is(':checked');
                    if(boolean){
                        $(td).prop("checked",true);
                    }else{
                        $(td).prop("checked",false);
                    }
                });
            });
        }
    }());
    // 添加删除
    
    return wlz;
})({});