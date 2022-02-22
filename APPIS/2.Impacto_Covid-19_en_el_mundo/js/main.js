$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:false,
    nav:false,
    responsiveClass:true,
    margin:50,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
});