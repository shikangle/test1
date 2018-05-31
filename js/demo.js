$(function(){
    //倒计时
    var num = $("#count-down span b").text();  //跳转的数字
    // setInterval(function(){
    //     if(num >0){
    //         num--;
    //         $("#count-down span b").text(num)
    //     }else {

    //     }  
    // },1000);  //定时器
    //递归
    countDown(num);
    function countDown(num) {
        if(num >0){
            setTimeout(function(){
                num--;
                $("#count-down span b").text(num);
                countDown(num);
            },1000)
        }else {

        }
    }
})