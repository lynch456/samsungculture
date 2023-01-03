$(document).ready(function () {
  $(window).scroll(function () {
    const scrollValue = $(document).scrollTop();
    if (scrollValue > 40) {
      $("header").addClass("about-header_active");
    } else {
      $("header").removeClass("about-header_active");
    }
  });
  $(".family-site").click(function () {
    $(".family-sub").toggleClass("open");
  });
});
