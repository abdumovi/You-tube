$(document).ready(function(){
  $('.tags__list').slick({
    arrows:true,
    dots:false,
    speed: 300,
    adaptiveHeight:true,
    slidesToShow:12,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          dots:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots:false,
        }
      }
    ]
  });
});

