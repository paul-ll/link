$(document).ready(function(){
    $('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
    $('.backup').click(function(){
        $('body,html').animate({scrollTop:0},500)
    });
    $(".backup").hide();
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>500){
                $(".backup").fadeIn(1000);
            }else{
                $(".backup").fadeOut(1000);
            }
        });
    });
    var nav_ul = $(".nav li");
    nav_ul.hover(function(){
        $(this).addClass("hover");
        $(this).find("dl").stop(true,true).slideDown();
    },function(){
        $(this).removeClass("hover");
        $(this).find("dl").stop(true,true).slideUp();
    });
    $(".banner").slide({ titCell:".num ul" , mainCell:".banner_pic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });






    var picShow = "<div id='picShow'><div class='pic_show_box'><div class='pic_quit'></div><a href='javascript:;' title='上一张' class='lbtn'></a><a href='javascript:;' title='下一张' class='rbtn'></a><img width='593' height='442' alt='' /><p><a href='' id='picLink'></a></p></div></div>";
    $(".zoom").click(function(){
        var _this = $(this),liIndex,picUrl,picShowBod,leng,_val,_href;
        liIndex = _this.parents(".pl").index();
        picUrl = _this.parents(".con1_img").find("img").attr("src");
        _href = _this.parents(".con1_img").find("a").attr("href");
        _this.parents("body").append(picShow);
        picShowBod = $(".pic_show_box");
        picShowBod.find("img").attr("src",picUrl);
        _val = _this.parents(".con1_img").find("p").find("a").text();
        $("#picLink").text(_val);
        $("#picLink").attr("href",_href);
        leng = _this.parents(".ScrCont").find(".con1_img").length;
        $(".lbtn").click(function(){
            if(liIndex>0){
                picUrl = _this.parents(".ScrCont").find(".con1_img").eq(liIndex-1).find("img").attr("src");
                _val = _this.parents(".ScrCont").find(".con1_img").eq(liIndex-1).find("p").find("a").text();
                _href = _this.parents(".ScrCont").find(".con1_img").eq(liIndex-1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                picShowBod.find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                return liIndex--;
            }else{
                picUrl = _this.parents(".ScrCont").find(".con1_img").eq(leng-1).find("img").attr("src");
                _val = _this.parents(".ScrCont").find(".con1_img").eq(leng-1).find("p").find("a").text();
                _href = _this.parents(".ScrCont").find(".con1_img").eq(leng-1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                picShowBod.find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                liIndex = leng-1;
                return liIndex;
            }
        });
        $(".rbtn").click(function(){
            if(liIndex<leng-1){
                picUrl = _this.parents(".ScrCont").find(".con1_img").eq(liIndex+1).find("img").attr("src");
                _val = _this.parents(".ScrCont").find(".con1_img").eq(liIndex+1).find("p").find("a").text();
                _href = _this.parents(".ScrCont").find(".con1_img").eq(liIndex+1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                $(".pic_show_box").find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                return liIndex++;
            }else{
                picUrl = _this.parents(".ScrCont").find(".con1_img").eq(0).find("img").attr("src");
                _val = _this.parents(".ScrCont").find(".con1_img").eq(0).find("p").find("a").text();
                _href = _this.parents(".ScrCont").find(".con1_img").eq(0).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                $(".pic_show_box").find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                liIndex = 0;
                return liIndex;
            }
        });
        $(".pic_quit").click(function(){
            $("#picShow").remove();
        });
    });
    $(".zoom1").click(function(){
        var _this = $(this),liIndex,picUrl,picShowBod,leng,_val,_href;
        liIndex = _this.parents("li").index();
        picUrl = _this.parents("li").find("img").attr("src");
        _href = _this.parents("li").find("a").attr("href");
        _this.parents("body").append(picShow);
        picShowBod = $(".pic_show_box");
        picShowBod.find("img").attr("src",picUrl);
        _val = _this.parents("li").find("p").find("a").text();
        $("#picLink").text(_val);
        $("#picLink").attr("href",_href);
        leng = _this.parents("ul").find("li").length;
        $(".lbtn").click(function(){
            if(liIndex>0){
                picUrl = _this.parents("ul").find("li").eq(liIndex-1).find("img").attr("src");
                _val = _this.parents("ul").find("li").eq(liIndex-1).find("p").find("a").text();
                _href = _this.parents("ul").find("li").eq(liIndex-1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                picShowBod.find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                return liIndex--;
            }else{
                picUrl = _this.parents("ul").find("li").eq(leng-1).find("img").attr("src");
                _val = _this.parents("ul").find("li").eq(leng-1).find("p").find("a").text();
                _href = _this.parents("ul").find("li").eq(leng-1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                picShowBod.find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                liIndex = leng-1;
                return liIndex;
            }
        });
        $(".rbtn").click(function(){
            if(liIndex<leng-1){
                picUrl = _this.parents("ul").find("li").eq(liIndex+1).find("img").attr("src");
                _val = _this.parents("ul").find("li").eq(liIndex+1).find("p").find("a").text();
                _href = _this.parents("ul").find("li").eq(liIndex+1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                $(".pic_show_box").find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                return liIndex++;
            }else{
                picUrl = _this.parents("ul").find("li").eq(0).find("img").attr("src");
                _val = _this.parents("ul").find("li").eq(0).find("p").find("a").text();
                _href = _this.parents("ul").find("li").eq(0).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                $(".pic_show_box").find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                liIndex = 0;
                return liIndex;
            }
        });
        $(".pic_quit").click(function(){
            $("#picShow").remove();
        });
    });
    $(".con1_img").hover(function(){
        $(this).find(".zoom").stop(true,true).animate({"top":"72px"},250);
    },function(){
        $(this).find(".zoom").stop(true,true).animate({"top":"-72px"},200);
    });
    $(".con3-ul li,.product li").hover(function(){
        $(this).find(".zoom1").stop(true,true).animate({"top":"66px"},250);
    },function(){
        $(this).find(".zoom1").stop(true,true).animate({"top":"-66px"},200);
    });
    $(".case li").hover(function(){
        $(this).find(".zoom1").stop(true,true).animate({"top":"38px"},250);
    },function(){
        $(this).find(".zoom1").stop(true,true).animate({"top":"-38px"},200);
    });
	
    /* 通用 */
    $(".vip_address_close").click(function(){
        $(this).parents("li").remove();
    });
    $(".type_choose span").click(function(){
        if($(this).hasClass("type_company")){
            $(".if_company").slideDown();
            $(this).parents(".type_choose").find("span").removeClass("border_color");
            $(this).addClass("border_color");
        }else{
            $(".if_company").slideUp();
            $(this).parents(".type_choose").find("span").removeClass("border_color");
            $(this).addClass("border_color");
        }
    });
    $(".type_choose2 span").click(function(){
        $(this).parents(".type_choose2").find("span").removeClass("border_color");
        $(this).addClass("border_color");
    });
    $(".cart_address").eq(0).show();
    $(".more_address").click(function(){
        $(".cart_address").slideDown();
    });
    $(".cart_del").click(function(){
        $(this).parents("tr").remove();
    });
    $(".product_about_box").eq(0).show();
    $(".product_about_top span").click(function(){
        var _index = $(this).index();
        $(".product_about_top span").removeClass("on");
        $(this).addClass("on");
        $(".product_about_box").hide();
        $(".product_about_box").eq(_index).stop(true,true).show();
    });

    var starPF = $(".star_score span").text();
    $(".star_score_box p").css("width",starPF/5*100 + 2 + "%");
    /* 通用 */
    $(".con1_img").hover(function(){
        $(this).find(".zoom").stop(true,true).fadeIn();
    },function(){
        $(this).find(".zoom").stop(true,true).fadeOut();
    });
	
});

var Speed_1 = 10;
var Space_1 = 20;
var PageWidth_1 = 250 * 2;
var interval_1 = 7000;
var fill_1 = 0;
var MoveLock_1 = false;
var MoveTimeObj_1;
var MoveWay_1="right";
var Comp_1 = 0;
var AutoPlayObj_1=null;
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay_1(){clearInterval(AutoPlayObj_1);AutoPlayObj_1=setInterval('ISL_GoDown_1();ISL_StopDown_1();',interval_1)}
function ISL_GoUp_1(){if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="left";MoveTimeObj_1=setInterval('ISL_ScrUp_1();',Speed_1);}
function ISL_StopUp_1(){if(MoveWay_1 == "right"){return};clearInterval(MoveTimeObj_1);if((GetObj('ISL_Cont_1').scrollLeft-fill_1)%PageWidth_1!=0){Comp_1=fill_1-(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1);CompScr_1()}else{MoveLock_1=false}
    AutoPlay_1()}
function ISL_ScrUp_1(){if(GetObj('ISL_Cont_1').scrollLeft<=0){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft+GetObj('List1_1').offsetWidth}
    GetObj('ISL_Cont_1').scrollLeft-=Space_1}
function ISL_GoDown_1(){clearInterval(MoveTimeObj_1);if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="right";ISL_ScrDown_1();MoveTimeObj_1=setInterval('ISL_ScrDown_1()',Speed_1)}
function ISL_StopDown_1(){if(MoveWay_1 == "left"){return};clearInterval(MoveTimeObj_1);if(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1-(fill_1>=0?fill_1:fill_1+1)!=0){Comp_1=PageWidth_1-GetObj('ISL_Cont_1').scrollLeft%PageWidth_1+fill_1;CompScr_1()}else{MoveLock_1=false}
    AutoPlay_1()}
function ISL_ScrDown_1(){if(GetObj('ISL_Cont_1').scrollLeft>=GetObj('List1_1').scrollWidth){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft-GetObj('List1_1').scrollWidth}
    GetObj('ISL_Cont_1').scrollLeft+=Space_1}
function CompScr_1(){if(Comp_1==0){MoveLock_1=false;return}
    var num,TempSpeed=Speed_1,TempSpace=Space_1;if(Math.abs(Comp_1)<PageWidth_1/2){TempSpace=Math.round(Math.abs(Comp_1/Space_1));if(TempSpace<1){TempSpace=1}}
    if(Comp_1<0){if(Comp_1<-TempSpace){Comp_1+=TempSpace;num=TempSpace}else{num=-Comp_1;Comp_1=0}
        GetObj('ISL_Cont_1').scrollLeft-=num;setTimeout('CompScr_1()',TempSpeed)}else{if(Comp_1>TempSpace){Comp_1-=TempSpace;num=TempSpace}else{num=Comp_1;Comp_1=0}
        GetObj('ISL_Cont_1').scrollLeft+=num;setTimeout('CompScr_1()',TempSpeed)}}
function picrun_ini(){
    GetObj("List2_1").innerHTML=GetObj("List1_1").innerHTML;
    GetObj('ISL_Cont_1').scrollLeft=fill_1>=0?fill_1:GetObj('List1_1').scrollWidth-Math.abs(fill_1);
    GetObj("ISL_Cont_1").onmouseover=function(){clearInterval(AutoPlayObj_1)}
    GetObj("ISL_Cont_1").onmouseout=function(){AutoPlay_1()}
    AutoPlay_1();
}