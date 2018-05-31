$(function () {
	var num = $("#count-down span b").text()
	var timer = 0;
	$(".jump").click(function(){
		login()
	})
	//定时器

	//判断
	timer = setInterval(function(){
		if (parseInt(num)>1) {
			num--;
			$("#count-down span b").text(num)
		}else{
			login()
			clearInterval(timer)
		}
	},1000)



	function login(){
		$("#count-down").fadeOut(300)
	}
	
	//格式校验
	//成为焦点
	$(".login-content .panel input").focus(function(){
		$(this).siblings(".error-tip").hide()
	})
	//失去焦点
	$(".login-content .panel .mobile").blur(function(){
		var cur = $(this)
		var value =cur.val()
		var filter = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|])\d{8}$/;
		//filter.test(value)   正则匹配
		checkTip(cur,value,filter,'手机号码不能为空','手机号码不正确')
//		if (value == ""){
//			$(this).siblings(".error-tip").slideDown().text('手机号码不能为空')
//		} else if(!filter.test(value)){
//			$(this).siblings(".error-tip").slideDown().text('手机号码输入错误')
//		}else{
//			$(this).siblings(".error-tip").hide()
//		}
	})
	
	$(".login-content .panel .password").blur(function(){
		var cur = $(this)
		var value = cur.val()
		var filter = /^[a-zA-Z]\w{5,17}$/;
		//filter.test(value)   正则匹配
		checkTip(cur,value,filter,'密码不能为空','密码格式不正确')
//		if (value == ""){
//			$(this).siblings(".error-tip").slideDown().text('密码不能为空')
//		} else if(!filter.test(value)){
//			$(this).siblings(".error-tip").slideDown().text('密码输入错误')
//		}else{
//			$(this).siblings(".error-tip").hide()
//		}
	})
	
	//公共方法
	function checkTip(cur,value,filter,text1,text2){
		if (value == ""){
			cur.siblings(".error-tip").slideDown().text(text1)
		} else if(!filter.test(value)){
			cur.siblings(".error-tip").slideDown().text(text2)
		}else{
			cur.siblings(".error-tip").hide()
		}
	}
	
	//登陆
	$(".login-content .login").click(function(){
		var _mobile = $.trim($(".mobile").val())
		var _pwd = $.trim($(".password").val())
		var data = {
			mobile : _mobile,
			password: _pwd
		}
		if(!_mobile|| !_pwd || $(".error-tip").is(":visible")){
			if($(".msg-tip").css("right")>=0) return;
			$(".msg-tip").animate({'right':'0'},300);
		}else{
			window.location = 'index.html'
		}
 		
	})
})