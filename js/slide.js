$(document).ready(function () {
  $(".slider-wrapper").slick({
    slide: "li",
    Infinity: "true",
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next'>Next</button>",
    draggable: true,
    variableWidth: true,
    centerMode: false,
  });
});
