/**
 * @description This object holds standard scripts for needed functionality on all sites including the request appointment form and orphan management.
 * @constructor
 */
var HelloWorldDevsTysonSteele = (function($,_) {

  /**
   * @description Replaces ' ' with a no-break space to prevent orphans
   * @param {string} selectors css selector for elements to target
   * @param {string} exceptions css selector for elements exempt from targeting
   * @example HWD.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
   */
  var noOrphans = function (selectors, exceptions) {
    $(selectors).not(exceptions).each(function () {
      $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/, '&nbsp;$1'));
    });
  };

  /**
   * @description Sets up the request appointment form to communicate with Tyson Steele's API
   * @param {string} form ID of the request appointment form
   * @param {string} success_msg ID of the script template for a successful message
   * @param {string} uid account number managed by TS
   * @example HWD.mailForm('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');
   */
  var requestAppointment = function (form, success_msg, uid) {
    var $form = $(form);
    $form.submit(function(e) {
      e.preventDefault();
      var formData = $form.serialize();
      var formAction = 'http://web-api.tysonsteele.com/v1/webprops/'+uid+'/schedule';
      $('.form-error').remove();
      $.ajax({
        type: 'POST',
        url: formAction,
        data: formData,
        dataType: 'json',
        encode: true
      }).done(function (response) {
        $form.replaceWith($(success_msg).html());
      }).error(function (response) {
        var $error_list = $('<ul>');
        if(response.responseJSON == undefined) {
          $error_list.append($('<li>').text('There was a problem with your submission. Please ensure all fields are correctly entered.'));
        } else {
          $.each(response.responseJSON, function(key, value) {
            $error_list.append($('<li>').text(value));
          });
        }
        $form.before('<div class="form-error"></div>');
        $('.form-error').html($error_list).fadeIn();
      });
    });
  };

  /**
   * @description Instantiate the marquee carousel
   * @param {number} customSettings custom settings object
   * @param {string} [target='.swiper-container'] css selector for marquee container
   * @example HWD.marqueeCarousel(6000);
   */
  var marqueeCarousel = function (customSettings, target) {

    var defaultSettings = {
      speed: 400,
      autoplay: 6000,
      loop: true,
      autoplayDisableOnInteraction: false
    };
    
    new Swiper(target || '.swiper-container', _.assign(defaultSettings, customSettings));
    
  };

  /**
   * @description Creates a google map without all the controls (static) as per client request
   * @param {string} target ID of the div that will contain the google map. Remember to give it height with css
   * @param {string} center lat and long of the center of the map, comma separated
   * @param {string} marker lat and long of the business location marker, comma separated
   * @example HWD.googleMap('#google-map5', '36.8490793,-76.0278585', '36.8490793,-76.0278585');
   */
  var googleMap = function (target, center, marker) {
    $(target).gMap({
      address: center,
      maptype: 'ROADMAP',
      zoom: 15,
      markers: [
        {
          address: marker
        }
      ],
      doubleclickzoom: false,
      controls: {
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        draggable: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false
      }
    });
  };

  /**
   * @description Removes the data offset on the smooth scroll js effect based on viewport width
   * @param {string} target optional string, css selector for effect
   * @example HWD.scrollToFix('#primary-menu');
   */
  var scrollToFix = function(target) {
    var $primaryMenu = target ? $(target) : $('#primary-menu');
    var menuOffsets = [];

    // Generate array of initial values for recall
    $primaryMenu.find('a').each(function(index) {
      menuOffsets.push($(this).attr('data-offset'));
    });

    // kills menu offsets for tablet and mobile on initial load
    if ($(window).width() < 993) {
      $primaryMenu.find('a').attr('data-offset', '-5');
    }

    // Watch for window resize events to toggle offset values
    $(window).resize(function() {
      if ($(window).width() < 993) {
        // sets all menu offset to zero for mobile
        $primaryMenu.find('a').attr('data-offset', '-5');
      } else {
        // resets all menu offsets to origin value
        $primaryMenu.find('a').each(function(index) {
          $(this).attr('data-offset', menuOffsets[index]);
        });
      }
    });
  };

  /**
   * @description Sets up a standard services carousel that is responsive (starts at 4 items in mobile, goes down to one on mobile). Uses the Owl Carousel
   * @param {string} target css selector of container for owl carousel
   * @param {object} customSettings optional - an object with custom configuration for the owl carousel. See owl carousel documentation for options.
   * @example HWD.serviceCarousel('js-service-carousel');
   */
  var itemCarousel = function(target, customSettings) {
    var defaultSettings = {
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
        '<i class="icon-chevron-left"></i>',
        '<i class="icon-chevron-right"></i>'
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
    };
    $(target).owlCarousel(_.assign(defaultSettings, customSettings));
  };

  /**
   * Stops videos inside of a modal when that modal is closed (assuming the video is provided by iframe).
   * @param {string} modalTarget A css selector string
   * @param {string} videoTarget A css selector string
   * @example HWD.stopVideoOnModalClose('#videoModal', '#videoIframe');
   */
  var stopVideoModal = function(modalTarget, videoTarget) {
    $(modalTarget).on('hidden.bs.modal', function() {
      var $videoTarget = $(videoTarget);
      $videoTarget.attr('src', $videoTarget.attr('src'));
    });
  };

  return {
    noOrphans: noOrphans,
    requestAppointment: requestAppointment,
    marqueeCarousel: marqueeCarousel,
    googleMap: googleMap,
    scrollToFix: scrollToFix,
    itemCarousel: itemCarousel,
    stopVideoModal: stopVideoModal
  };

})(jQuery, _);