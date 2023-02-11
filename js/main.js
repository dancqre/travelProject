// Carousel//
var owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    margin:30,
    startPosition:1,
    loop:true,
    items:3,
    responsive : {
        // breakpoint from 0 up
        0 : {
          
        },
        // breakpoint from 480 up
        850 : { 
            items:2,
           
        },
        // breakpoint from 768 up
        1000 : {
            margin:20,
            items:3,
        },
        1200: {
            margin:30
        },
    }
});
$('.slider__btn__next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__btn__prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

//burger-menu

const navBtn = document.querySelector('.nav_toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');


navBtn.onclick = function(){
   menuIcon.classList.toggle('menu-icon-active');
   nav.classList.toggle('nav--mobile');
   document.body.classList.toggle('no-scroll');
}

