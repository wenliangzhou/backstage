

// 排序变换颜色

$(document).ready(function () {
	$('font').click(function () {
		$('font').removeClass('active');
		$(this).addClass('active');
	})
});



// 序列数组转化成对象
function zhuan(x) {
	var obj = {};
	x.forEach(item => {
		obj[item.name] = item.value;
	});
	return obj;
}

// 分页渲染方法
/**
 * 
 * @param {*请求地址} url 
 * @param {*渲染方法} fn 
 * @param {*请求页数} curr 
 * @param {*请求条数} limit 
 * @param {*请求条件} data 
 */
function demo(url, fn, curr = 1, limit, data = "") {

	// 定义当前页数及当前数据页条数的变量
	var arr = [];
	var page = curr || 1;
	var tiao = limit || 5;
	$.ajaxSettings.async = false;
	$.getJSON(url, {
		page: curr || 1 //向服务端传的参数，此处只是演示
		, limit: limit || 5//多少条
		, can: data
	}, function (res) {
		console.log(res);
		if (res == '') {
			$("#test1").html('<div class = "nothing">没有相关内容!!!</div>')
			$('#tes').html('');
			return false;
		}
		fn(res, page, tiao);
		//显示分页
		laypage.render({
			elem: 'test1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
			count: res['all'], //通过后台拿到的总条数
			layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
			, curr: curr || 1, //当前页
			limits: [5, 6, 7, 8, 9, 10],
			limit: limit || 5,
			jump: function (obj, first) { //触发分页后的回调

				if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr

					demo(url, fn, obj.curr, obj.limit, data);
					arr[0] = obj.curr;
					arr[1] = obj.limit;

				}
			}
		});

	});

};



