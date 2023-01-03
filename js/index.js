$(document).ready(function () {
  $(window).scroll(function () {
    const scrollValue = $(document).scrollTop();
    if (scrollValue > 30) {
      $("header").addClass("header-active");
      $(".main-menu li a").addClass("font-active");
    } else {
      $("header").removeClass("header-active");
      $(".main-menu li a").removeClass("font-active");
    }
  });
  $(".family-site").click(function () {
    $(".family-sub").toggleClass("open");
  });

  $(".all-menu").click(function () {
    $(this).toggleClass("menu-bar_active");
  });
});
