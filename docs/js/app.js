window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 1.1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: 
        {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
        },
        dots: '.carousel__indicadores',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: '.carousel__indicadores',
                draggable: true,
                arrows: 
                {
                prev: '.carousel__anterior',
                next: '.carousel__siguiente'
                }
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: '.carousel__indicadores',
                draggable: true,
                arrows: 
                {
                prev: '.carousel__anterior',
                next: '.carousel__siguiente'
                }
              }
            }
          ]
    });
})