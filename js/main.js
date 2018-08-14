// tr删除自己
function removeself(o,fa) {
    var tr;
    $(o).click(function () {   
         tr = $(this).attr("tr-id");
         console.log( tr)
        $(this).parent().parent().remove();
    });
    return tr;
}

// 排序变换颜色

$(document).ready(function () {
    $('font').click(function () {
        $('font').removeClass('active');
        $(this).addClass('active');
    })
});

// 添加按钮打开事件 参数格式数组 里面的来个数组[[x,y,z]]
// function pageopen(array) {
//     array.forEach(elem => {
//         console.log('ok')
//         var url;
//         $(elem[0]).delegate(elem[1],"click",function () {
//                 var tr_id = $(this).attr("tr-id");
                
//                 if(!url){
//                     url = elem[2].content;
//                 }
//                 console.log(elem[2].content);
//                 elem[2].content = url +"?id ="+ tr_id;
//                 layer.open(elem[2]);
//         });
//     });
// }
function pageopen(a,b,x) {
    $(a).delegate(b,"click",function () {
        var tr_id = $(this).attr("tr-id");
        x.content = x.content +"?id ="+ tr_id;
        layer.open(x);
    })
}


// 下拉选择框默认
function moren(elem) {
    var idd = [];
    var arr = [...elem];
    arr.forEach(element => {
        idd.push(element.id);
    });
    for(let i = 0;i<idd.length;i++){
        $("select[id = '"+idd[i]+"'] > option").each(function(){
            let value = $(this).val();
            let moren = $("#"+idd[i]).attr("value");
            // console.log(moren)
            if(value == moren){
                $(this).attr('selected','selected');
            }
        });
    }
}

// moren($('.state select'));

// 分页js
function fenye(x=new Function) {
    $('.demo').delegate(".fenye li","click",function (e) {
        var index = $('.fenye li').index(this);
        var lastindex = $('.fenye li').last().index();
        if(index !==0 && index !== lastindex)
        {
            $('.fenye li').removeClass('active');
            $(this).addClass('active');
        }
        if(index === 1){
            $('.fenye li').first().children().attr('disabled',true);
            $('.fenye li').first().addClass('jinyon');
        }else{
            $('.fenye li').first().children().attr('disabled',false);
            $('.fenye li').first().removeClass('jinyon');
        }
        if(index === lastindex-1){
            console.log(1)
            $('.fenye li').last().children().attr('disabled',true);
            $('.fenye li').last().addClass('jinyon');
        }else{
            $('.fenye li').last().children().attr('disabled',false);
            $('.fenye li').last().removeClass('jinyon');
        }
    });
    // $('.fenye li').click(function (e) {
    //     var index = $('.fenye li').index(this);
    //     var lastindex = $('.fenye li').last().index();
    //     if(index !==0 && index !== lastindex)
    //     {
    //         $('.fenye li').removeClass('active');
    //         $(this).addClass('active');
    //     }
    //     if(index === 1){
    //         $('.fenye li').first().children().attr('disabled',true);
    //         $('.fenye li').first().addClass('jinyon');
    //     }else{
    //         $('.fenye li').first().children().attr('disabled',false);
    //         $('.fenye li').first().removeClass('jinyon');
    //     }
    //     if(index === lastindex-1){
    //         console.log(1)
    //         $('.fenye li').last().children().attr('disabled',true);
    //         $('.fenye li').last().addClass('jinyon');
    //     }else{
    //         $('.fenye li').last().children().attr('disabled',false);
    //         $('.fenye li').last().removeClass('jinyon');
    //     }
    //     // 设置点击回调函数
    //     var this_ = this;
    //     return (x)(e,this_);
    // });
}