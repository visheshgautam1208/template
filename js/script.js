$(document).ready(function(){
    
    $(".menus li a").click(function (e) {
        //how to proceed

        let target = $(this).attr("href");
        //alert(target);

        $("html,body").animate(
            {
            scrollTop: $(target).offset().top - 58,
           },
            1000
        );
            
    e.preventDefault();
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      loop:true,
      margin:10,
      responsive:{
        0:{
          items: 1,
          nav: true,
        },
        600:{
          items: 3,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
        },
      },
    });
    });
    new WOW().init();




    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })