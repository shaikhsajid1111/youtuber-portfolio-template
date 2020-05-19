AOS.init({
      duration : 3000,     
  });
  easing: 'ease-in-out-back'

  
  var elm = document.querySelector('#navbar-navigation');
  var ms = new MenuSpy(elm);

$(window).on('load', function(){
  $.instagramFeed({
    'username': 'shahnu.sk27',
    'container': "#instagram-feed-demo",
    'display_profile': true,
    'display_igtv': false,
    'items_per_row': 4

  });
});
$(function(){
  jQuery("a.youtube-video").YouTubePopUp( { autoplay: 1 } ); // Disable autoplay
});