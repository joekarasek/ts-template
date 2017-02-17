(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#videoModal', '#video-one');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '33.9527789,-84.337107', '33.9502465,-84.3370638');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({ autoplay: false });
  HelloWorldDevsTysonSteele.itemCarousel('.js-services-carousel', {
    navText: [
      '< img src="assets/carousel-arrow.png" alt="navigation arrow">',
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">'
    ]
  });
  HelloWorldDevsTysonSteele.itemCarousel('.js-team-carousel', {
    navText: [
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">',
      '<img src="assets/carousel-arrow.png" alt="navigation arrow">'
    ]
  });

})(jQuery, HelloWorldDevsTysonSteele);
