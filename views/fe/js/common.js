$(document).ready(function() {
  // 返回顶部
  $(".model-backtop").click("touchstart", function() {
    $(".model_wrapper").animate({ scrollTop: "0px" }, 800);
  });

  // 缩略图详情页
 /*  if($(".slider-for")){
	$(".slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
    infinite:false,
		asNavFor: ".slider-nav"
	  });
}*/
  $(function () {
		$('#model_contant_main a').on('click', function (e) {
		var el = $(this)
		var link = el.attr('href')
		window.location = link
		})
	})
/*
  $(".slider-nav").slick({
    slidesToShow: 3,
    slideToScroll: 1,
    vertical: true, // 垂直方向轮播
    dots: false,
    focusOnSelect: true,
    infinite: false,
    asNavFor: ".slider-for",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false // 垂直方向轮播
        }
      }
    ]
  });
 */

  //隐藏公用导航跟wrap的切换
  $(".model-navbtn").click(function() {
    $(".model-leftnav")
      .removeClass("page-prev")
      .addClass("page-in");
    // $("#quickbar-wrap")
    //   .removeClass("page-active")
    //   .addClass("page-next page-in");
    $(".opacity2").show();
    $(".model-wrap").height($(window).height() - 120);
  });
  $(".opacity2").click("touchstart", function() {
    $(".model-leftnav").addClass("page-prev page-out");
    // $("#quickbar-wrap")
    //   .removeClass("page-next")
    //   .addClass(" page-out");
    //$(".opacity2").hide();
    $(".model-wrap").css("height", "auto");
    return false;
  });
  // 公用二级导航下拉
  $(".er_icon").click(function() {
    $(this)
      .parents(".yiji")
      .toggleClass("xz")
      .siblings(".yiji")
      .removeClass("xz");
    $(this)
      .parents()
      .siblings()
      .find(".menu_body")
      .hide(300);
    $(this)
      .siblings(".menu_body")
      .slideToggle();
  });

  $(".thr_icon").click(function() {
    $(this)
      .parents(".erji")
      .toggleClass("tz")
      .siblings(".erji")
      .removeClass("tz");
    $(this)
      .parents()
      .siblings()
      .find(".thr_body")
      .hide(300);
    $(this)
      .siblings(".thr_body")
      .slideToggle();
  });

  $(".four_icon").click(function() {
    $(this)
      .parents(".threeji")
      .toggleClass("fz")
      .siblings(".threeji")
      .removeClass("fz");
    $(this)
      .parents()
      .siblings()
      .find(".four_body")
      .hide(300);
    $(this)
      .siblings(".four_body")
      .slideToggle();
  });

  //搜索按钮事件
  $(".search_btn").click(function(event) {
    $(".quickbar_search").addClass("search_show");
    $(".quickbar_search").show();
    $(".opacity2").show();
  });

  $(".opacity2").click(function(event) {
    $(this).hide();
	 $('.model-fixed .quickbar_search').css('display', 'none');
 $('.model-fixed .follow1').css('display', 'none');
  });

  // 微信关注按钮事件
  $('.follow_btn').click(function(event) {
    $('.follow1').css('display', 'block');
    $(".opacity2").show()
  }); 

  // 手机快捷栏目平分
  var liNum = $(".fnavbox li").length;
  $(".fnavbox li").width(100 / liNum + "%");

  //侧边快捷导航
  $(".quickbar_nav_one ul li").hover(
    function() {
      $(this)
        .find(".li_hover")
        .stop(true, false)
        .fadeIn();
    },
    function() {
      $(this)
        .find(".li_hover")
        .stop(true, false)
        .fadeOut();
    }
  );

  $(".quickbar_nav_one ul li.search_btn").hover(
    function() {
      $(".quickbar_search")
        .stop(true, false)
        .fadeIn();
    },
    function() {
      $(".quickbar_search")
        .stop(true, false)
        .fadeOut();
    }
  );

	// 分享按钮
			var _shareIcon = $('.quickbar-sharebox .thumbs-cotnainer .share-icon');
			$('.quickbar-sharebox .thumbs-cotnainer').width(_shareIcon.outerWidth() * _shareIcon.length);
			$("#quickbar #share_btn").on('click',function(){
				$(".quickbar-sharebox").addClass("show_share");
				$(".quickbar-opacity2").show();
				return false;
			});
	    var liNum = $('.fnavbox li').length;
        $(".fnavbox li").width(100/liNum+'%');

		//分享点击
		$(".share-icon").parents(".share_box").css("z-index","8");
		$("li#share_btn").click(function(){
		   $(".share_box").animate({bottom:"0"});
		})
			  $(".top").click(function(){
				//alert(1);
			//$("html,body").animate({scrollTop:0},20)
			});
		$(".quxiao").click(function(){
		   $(".share_box").animate({bottom:"-120px"});
		})

			
  // 分享操作
  $(".renren").click(function() {
    share.renren();
  });
  $(".xinlang").click(function() {
    share.sinaminiblog();
  });
  $(".douban").click(function() {
    share.douban();
  });
  $(".kaixin").click(function() {
    share.kaixin();
  });
  $(".taojianghu").click(function() {
    share.taojianghu();
  });
  $(".wangyi").click(function() {
    share.wangyi();
  });
  $(".qqzone").click(function() {
    share.qqzone();
  });
  $(".baidusoucang").click(function() {
    share.baidusoucang();
  });
  $(".qqweibo").click(function() {
    share.qqweibo();
  });
  $(".qqpengyou").click(function() {
    share.pengyou();
  });

  //响应式pc隐藏短信
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) < 0) {
      $("#sms").hide();
      break;
    }
  }



         
 //隐藏和显示返回顶部按钮
           $("#returntop").hide();
            $(document).scroll(function () {
                if ($(document).scrollTop() <= 300) {
                    $("#returntop").animate({
                        opacity: 'hide'
                    }, "slow");
                } else {
                    $("#returntop").animate({
                        opacity: 'show'
                    }, "slow");
                }
                ;
            });


          

          $(document).click(function(e) {
				if($(e.target).attr("id") != 'follow_btn' ){
			   $('.model-fixed .follow1').css('display', 'none');
				}

               if($(e.target).attr("id") != "search_btn" && $(e.target).attr("id") != "quickbar_kw" && $(e.target).attr("id") != "quickbar_submit"){
					  $('.model-fixed .quickbar_search').css('display', 'none');
						}
			});




});
