$(function(){
    $('.hamburger-button').hide();
    $(window).ready(function () {
      let logo = $('.hamburger-button').offset().top;
      let wh = $(window).height();
      if (logo <= $(window).scrollTop() + wh) {
        $('.hamburger-button').fadeIn(5000);
      }
    });
});