



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:4,
      loop:true,
      margin:6,
      nav:false,
      dots: false,  
      autoplay:true,
      autoplayTimeout:2000,
      responsive: {
        0: {
      items:1
        },
        360: {
       items: 2
        },
        1000: {
          items:4
        }
      }
    });
 
  

  });


  $(document).ready(function() {
    $(".menu-button").click(function() {
        $(".menu-content").toggleClass("show-menu");
    });
});

