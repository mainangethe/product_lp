/*
  Author: Mradi Kenya
  Date: Jan 3, 2020
  Topic: Responsive Shoe landing page scripts
*/

$(function () {
  $('.menu-toggle, .fa-times').on('click', function() {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
  });

  $('.overlay').on('click', function () {
  $('nav').removeClass('active');
  $(this).removeClass('menu-open');
  });
});