(function($, HelloWorldDevsTysonSteele) {

  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.mailForm('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');
  HelloWorldDevsTysonSteele.marqueeCarousel(6000);
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '33.9527789,-84.337107', '33.9502465,-84.3370638');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.itemCarousel('.js-services-carousel', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    margin: 40,
    navText: [
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">',
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">'
    ],
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  HelloWorldDevsTysonSteele.itemCarousel('.js-team-carousel', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    margin: 40,
    navText: [
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">',
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">'
    ],
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  HelloWorldDevsTysonSteele.stopVideoModal('#videoModal', '#video-one');

})(jQuery);
