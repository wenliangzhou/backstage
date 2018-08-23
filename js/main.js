

// 排序变换颜色

$(document).ready(function () {
    $('font').click(function () {
        $('font').removeClass('active');
        $(this).addClass('active');
    })
});

// 转换对象
function zhuan(x) {
    var obj={};
    x.forEach(item => {
        obj[item.name] = item.value;
    });
    return obj;                
}

// 分页渲染方法
function demo(url, fn, curr, limit, data = "") {

    $.ajaxSettings.async = false;
    $.getJSON(url, {
        page: curr || 1 //向服务端传的参数，此处只是演示
        , limit: limit || 5//多少条
        , can: data
    }, function (res) {


        if (res == '') {
            $("#test1").html('<div class = "nothing">没有相关内容!!!</div>')
            $('#tes').html('');
            return false;
        }
        fn(res);
        //显示分页
        laypage.render({
            elem: 'test1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            count: res['all'], //通过后台拿到的总条数
            curr: curr || 1, //当前页
            limit: limit || 5,
            jump: function (obj, first) { //触发分页后的回调
                // console.log(obj)
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    demo(url, fn, obj.curr, obj.limit, data);
                }
            }
        });
        // console.log(1);
    });
// console.log(2);
};