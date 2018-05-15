const colorDefault = '#384047';
const colorClicked = 'rgb(248, 161, 0)';

$(document).on('DOMContentLoaded', function() {

  $('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
    stretching: 'responsive'
  });

  $('video').on('timeupdate', function() {
    const currTime = $('video')[0].currentTime;

    // reset text color
    $('p > span').css('color', colorDefault);

    $.each($('p > span'), function(index, value) {
      if (currTime >= $(value).attr('data-start') && currTime <= $(value).attr('data-end')) {
        $(value).css('color', colorClicked);
      }
    });

  }); // end of video timeupdate

  $('p > span').on('click', function(event) {

    // reset text color
    $('p > span').css('color', colorDefault);

    const span = $(event.target)[0];
    $(span).css('color', colorClicked);

    $('video')[0].currentTime = $(span).attr('data-start');
  }); // end of span click

});