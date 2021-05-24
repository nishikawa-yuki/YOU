$(function () {
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
  });



  $('.company').hide();
  $(window).ready(function () {
    let logo = $('.company').offset().top;
    let wh = $(window).height();
    if (logo <= $(window).scrollTop() + wh) {
      $('.company').fadeIn(5000);
    }
  });
$(function (){


  $('.hamburger-button').hide();
  $(window).ready(function () {
    let logo = $('.hamburger-button').offset().top;
    let wh = $(window).height();
    if (logo <= $(window).scrollTop() + wh) {
      $('.hamburger-button').fadeIn(5000);
    }
  });

  


function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');
		}else{
		$(this).removeClass('blur');
		}
		});
}

$(window).scroll(function () {
	BlurTextAnimeControl();
});

$(window).on('load', function () {
	BlurTextAnimeControl();
});

});

});