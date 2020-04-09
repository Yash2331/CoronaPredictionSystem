$(function() {
   $("header").on("mouseover", function() {
      $(this).addClass("header-mouseover");
   });
   $("header").on("mouseout", function() {
      $(this).removeClass("header-mouseover");
   });
});

$(window).scroll(function() {
   if ($(this).scrollTop() > 150) {
      $("header").addClass("header-after-scroll");
   } else {
      $("header").removeClass("header-after-scroll");
   }
});