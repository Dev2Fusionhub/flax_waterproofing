$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('.navbar').addClass('header-fixed');
        }
        else {
            $('.navbar').removeClass('header-fixed');
        }
    });
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

$('.testi-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
})
$('.gallery-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    dots: false,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1.5
        },
        1000:{
            items: 2.5
        },
        1200:{
            items: 3.5
        }
    }
})