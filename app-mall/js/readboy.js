$(document).ready(function() { 
    // 首页部分导航条
    $('.readboy-catalog li').on('touchstart',function(e) {
      $(this).addClass("li-active");
      });
    $('.readboy-catalog li').on('touchend',function(e) {

      $(this).removeClass("li-active");

      }); 
      $('.readboy-soft li').on('touchstart',function(e) {
        $(this).addClass("faa-parent animated-hover");
      });
      $('.readboy-soft li').on('touchend',function(e) {
      $(this).removeClass("faa-parent animated-hover");
      }); 
      // 判断是否加载swiperjs 避免设置对象时报错   轮播部分
      if($("#swiper").length>0)
      {
        if($('.readboy-slide'))
        {
       var swiper = new Swiper('.readboy-slide', {        
         pagination: '.swiper-pagination',
         autoplay: 2500,
         loop : true,
         paginationClickable: true,
         paginationElement : 'li',
         spaceBetween: 30,
         centeredSlides: true,
         autoplayDisableOnInteraction: false
      });
       }
       if($('.screenshot-detail'))
        {
       var   swiper = new Swiper('.screenshot-detail', {        
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
         autoplay: 2500,
         loop : true,
         spaceBetween: 30,
         centeredSlides: true,
         autoplayDisableOnInteraction: false
    });  
    } 
     }
 // 简介部分控制
   var flag = true;
   $("#read-more").click(function(){
    if(flag){
      $(".summary").find('p').css({'white-space':'normal'});
       flag =false;
    }else{
       $(".summary").find('p').css({'white-space':'nowrap'});
       flag =true;
    }
    

   });
 // 显示更多评论 默认显示5个
$('.readboy-more-search').click(function(){
      $('#loading').css({
        'height': '4rem',
        'display':'block'
      });
     $('#loading').shCircleLoader({
      dots:20,
      keyframes:
       "0%   {background:red}\
        40%  {background:transparent}\
        60%  {background:transparent}\
        100% {background:red}"
     });
     setTimeout(function () { 
     $('.test-hidden').css('display','block');
     $('#loading').empty();
     $('#loading').css({
        'height': '0rem'
      });
     }, 500);
    });
// zepto下的滑动回顶部
$.fn.scrollTo =function(options){
        var defaults = {
            toT : 0,    //滚动目标位置
            durTime : 300,  //过渡动画时间
            delay : 10,     //定时器时间
            callback:null   //回调函数
        };
        var opts = $.extend(defaults,options),
            timer = null,
            _this = this,
            curTop = _this.scrollTop(),//滚动条当前的位置
            subTop = opts.toT - curTop,//滚动条目标位置和当前位置的差值
            index = 0,
            dur = Math.round(opts.durTime / opts.delay),
            smoothScroll = function(t){
                index++;
                var per = Math.round(subTop/dur);
                if(index >= dur){
                    _this.scrollTop(t);
                    window.clearInterval(timer);
                    if(opts.callback && typeof opts.callback == 'function'){
                        opts.callback();
                    }
                    return;
                }else{
                    _this.scrollTop(curTop + index*per);
                }
            };
        timer = window.setInterval(function(){
            smoothScroll(opts.toT);
        }, opts.delay);
        return _this;
    };

$("footer div a").on("click", function() {
   $("body").scrollTo({toT:0});
    //$("body").scrollTop(0);
    //window.scrollTo(0,0);
   
});
});
