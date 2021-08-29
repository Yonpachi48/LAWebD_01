
jQuery(function ($) {
  $(window).on("scroll", function () {
    const fadeIn = $('.content');

    $(fadeIn).each(function () {
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      var offset = $(this).offset().top;

      if (scroll > offset - windowHeight) {
        $(this).addClass("is-show");
      }
    });
  });
});     