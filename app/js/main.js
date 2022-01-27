$(function () {

$('.product-slide__thumb').slick({
asNavFor: '.product-slide__big',
 focusOnSelect: true,
vertical: true,
 slidesToShow: 3,
 slidesToScroll: 1,
 draggable: false,
});

$('.product-slide__big').slick({
asNavFor: '.product-slide__thumb',
 draggable: false,
 arrows: false,
 fade: true,
});

  $('.top-slider__inner').slick({
  dots: true,
  arrows: false,
  });

   $('.product-info__nam').styler();


  $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

   var mixer = mixitup('.product-goods__inner');
});