$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 8,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      responsive:{
        320:{
            items:3,
            autoplay: true,
            autoplayTimeout: 1000,
        },
        576:{
            items:4,
            autoplay: true,
            autoplayTimeout: 1000,
        },
        768:{
            items:5,
            nav:true,
            loop:false
        },
        992:{
          items:8,
          loop:false
      }
    }

    });
  });