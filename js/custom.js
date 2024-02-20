$(document).ready(function () {

  $('.tab-link:first').addClass('active');
  $('.sing-up-tab:first').addClass('active');

  $('.tab-link').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.tab-link, .sing-up-tab').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
  });




  // HEADER JS =========

  function updateHeaderMargin() {
    var headerHeight = $("header").innerHeight();

    if (window.innerWidth <= 767) {
      $(".header-nav").css("margin-top", headerHeight);
    } else {
      $(".header-nav").css("margin-top", 0);
    }
  }


  updateHeaderMargin();

  $(window).on("resize orientationchange", function () {
    updateHeaderMargin();
  });



  $(".hamb-menu").on("click", function () {
    $("header").addClass("active-nav");
    $(".overlay").addClass("active");
    $("body").addClass("no-scroll");
  });
  $(".overlay,.close-menu").on("click", function () {
    $("header").removeClass("active-nav");
    $(".overlay").removeClass("active");
    $("body").removeClass("no-scroll");
  });



  // ========= service slider ========

   new Swiper('.service-slider', {
     loop: true,
     slidesPerView: 1.5,
     paginationClickable: true,
     spaceBetween: 13,
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     breakpoints: {

       1170: {
         slidesPerView: 4.5,
         spaceBetween: 20
       },
       768: {
         slidesPerView: 3.2,
         spaceBetween: 15
       },
       576: {
         slidesPerView: 2.5,
         spaceBetween: 15
       }
     }
   });

  // ============ testimonial slider 

  new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1.23,
    paginationClickable: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {

      768: {
        slidesPerView: 2.93,
      },
      575: {
        slidesPerView: 1.93,
      }
    }
  });


});

// ============= FAQ
$(document).ready(function () {
  $('.ser-detail-faq li').click(function () {
    var index = $(this).index();

    $('.ser-detail-faq li').not(this).removeClass('active');

    // Toggle 'active' class on the clicked element
    $(this).toggleClass('active');

    // Slide toggle effect
    $('.ser-detail-faq li').not(this).each(function (i) {
      if (index !== i && $(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    });
  });
});