$(function () {
  $('.company').hide();
  $(window).ready(function () {
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

    $('.hamburger-button').hide();
    $(window).ready(function () {
      let logo = $('.hamburger-button').offset().top;
      let wh = $(window).height();
      if (logo <= $(window).scrollTop() + wh) {
        $('.hamburger-button').fadeIn(5000);
      }
    });

    $(window).scroll(function () {
      BlurTextAnimeControl();
    });

    $(window).on('load', function () {
      BlurTextAnimeControl();
    });
    $('.home-main').hide();
    $(window).ready(function () {
      let logo = $('.home-main').offset().top;
      let wh = $(window).height();
      if (logo <= $(window).scrollTop() + wh) {
        $('.home-main').fadeIn(5000);
      }
    });
  });
});