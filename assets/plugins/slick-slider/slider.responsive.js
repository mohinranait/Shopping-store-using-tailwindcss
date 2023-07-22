$("#banerSlider").slick({

    infinite: true,
    autoplay:true,
    arrows:false,
    // the magic
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                infinite: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }
    ]
});

$("#categorySlider").slick({

    infinite: true,
    autoplay:true,
    arrows:false,
    slidesToShow: 4,
    adaptiveHeight:false,
    responsive: [{

        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      },{

        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
  
      }, {
  
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
    }]
});

$("#productSlider").slick({

    infinite: true,
    autoplay:true,
    arrows:false,
    slidesToShow:5,
    adaptiveHeight:false,
    responsive: [{

        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          infinite: true
        }
  
      },{

        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, {
  
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
    }]
});