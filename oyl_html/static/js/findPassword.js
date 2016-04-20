/**
 * Created by xiaoke on 2016/3/23.
 */
var secondHtml = 59;
var r;
$("#phnoe a.verifyBtn").bind("click",function(){
        if(!$(this).hasClass("vGet")){
            $(this).text("重新获取（60S）");
            r = setInterval(function(){
                $("#phnoe a.verifyBtn").text("重新获取（"+secondHtml+"S）");
                secondHtml = secondHtml-1;
                if(secondHtml<=0){
                    $(this).text("获取验证码");
                    $(this).removeClass("vGet");
                    secondHtml=59;
                    clearInterval(r);
                }
            },1000);
            $(this).addClass("vGet");
        }
        else{
            $(this).removeClass("vGet");
            $(this).text("获取验证码");
            secondHtml=59;
            clearInterval(r);
        }
    }
);