$(function () {
    $('.news .slick').slick();



    //公用 
    $(".pc_Menu .menul .firstli").hover(function () {
        $(this).find(".secdulBox").stop(true, false).slideToggle(400);
    });

    //手机端无分类时不显示
    function catehide() {
        var ht = $(".model-classify-nav").height();
        if (ht < 5) {
            $(".model-classify-posnav .model-classify-btn").css("display", "none");
        }
    }
    catehide();
    // 内页分类下拉
    $(".model-classify-btn").click("touchstart", function () {
        $(this).toggleClass("down");
        $(".model-classify-nav").slideToggle();
    });
    // 内页分类二级
    $(".model-classify-nav .one_a").click("touchstart", function () {
        $(this).toggleClass("ez").parents().siblings().find("a").removeClass("ez");
        $(this).parents().siblings().find(".second").hide(300);
        $(this).siblings(".second").slideToggle(300);
    });
    $(".model-classify-nav .er_a").click("touchstart", function () {
        $(this).toggleClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".third").hide(300);
        $(this).siblings(".third").slideToggle(300);
    });
    // pc上下内页分类一级
    $(".nav_item").slick({
        dots: false, //指示点
        slidesToShow: 5, //显示个数
        slidesToScroll: 5, //轮播个数
        infinite: false
    });
    // pc上下内页分类二级
    $(".cont_nav .one_a").click(function () {
        $(this).toggleClass("ez").parents().siblings().find("a").removeClass("ez");
        $(this).parents().siblings().find(".second").hide(300);
        $(this).siblings(".second").slideToggle(300);
    });
    $(".cont_nav .second a").click(function () {
        $(this).toggleClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
        $(this).parents().siblings().find(".third").hide(300);
        $(this).siblings(".third").slideToggle(300);
    });
    //公用end
})

const SERVER_REQUEST = ''
const SERVER_REQUEST1 = 'http://localhost:3000'
