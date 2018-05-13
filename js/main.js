const colorDefault = '#384047';
const colorClicked = 'rgb(248, 161, 0)';

$(document).on('DOMContentLoaded', function() {

  $('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
    stretching: 'responsive'
  });

  $('video').on('timeupdate', function() {

    // reset text color
    $('p > span').css('color', colorDefault);

    const currTime = $('video')[0].currentTime;

    if (currTime >= '0.240000' && currTime <= '4.130000') {
      $('.text-01').css('color', colorClicked);
    }
    if (currTime >= '4.130000' && currTime <= '7.535000') {
      $('.text-02').css('color', colorClicked);
    }
    if (currTime >= '7.535000' && currTime <= '11.270000') {
      $('.text-03').css('color', colorClicked);
    }
    if (currTime >= '11.270000' && currTime <= '13.960000') {
      $('.text-04').css('color', colorClicked);
    }
    if (currTime >= '13.960000' && currTime <= '17.940000') {
      $('.text-05').css('color', colorClicked);
    }
    if (currTime >= '17.940000' && currTime <= '22.370000') {
      $('.text-06').css('color', colorClicked);
    }
    if (currTime >= '22.370000' && currTime <= '26.880000') {
      $('.text-07').css('color', colorClicked);
    }
    if (currTime >= '26.880000' && currTime <= '30.920000') {
      $('.text-08').css('color', colorClicked);
    }
    if (currTime >= '32.100000' && currTime <= '34.730000') {
      $('.text-09').css('color', colorClicked);
    }
    if (currTime >= '34.730000' && currTime <= '39.430000') {
      $('.text-10').css('color', colorClicked);
    }
    if (currTime >= '39.430000' && currTime <= '41.190000') {
      $('.text-11').css('color', colorClicked);
    }
    if (currTime >= '42.350000' && currTime <= '46.300000') {
      $('.text-12').css('color', colorClicked);
    }
    if (currTime >= '46.300000' && currTime <= '49.270000') {
      $('.text-13').css('color', colorClicked);
    }
    if (currTime >= '49.270000' && currTime <= '53.760000') {
      $('.text-14').css('color', colorClicked);
    }
    if (currTime >= '53.760000' && currTime <= '57.780000') {
      $('.text-15').css('color', colorClicked);
    }
    if (currTime >= '57.780000' && currTime <= '60.150000') {
      $('.text-16').css('color', colorClicked);
    }

  }); // end of video timeupdate

  $('p > span').on('click', function(event) {

    // reset text color
    $('p > span').css('color', colorDefault);

    const span = $(event.target)[0];
    $(span).css('color', colorClicked);

    if ($(span).hasClass('text-01')) {
      $('video')[0].currentTime = '0.240000';
    }
    if ($(span).hasClass('text-02')) {
      $('video')[0].currentTime = '4.130000';
    }
    if ($(span).hasClass('text-03')) {
      $('video')[0].currentTime = '7.535000';
    }
    if ($(span).hasClass('text-04')) {
      $('video')[0].currentTime = '11.270000';
    }
    if ($(span).hasClass('text-05')) {
      $('video')[0].currentTime = '13.960000';
    }
    if ($(span).hasClass('text-06')) {
      $('video')[0].currentTime = '17.940000';
    }
    if ($(span).hasClass('text-07')) {
      $('video')[0].currentTime = '22.370000';
    }
    if ($(span).hasClass('text-08')) {
      $('video')[0].currentTime = '26.880000';
    }
    if ($(span).hasClass('text-09')) {
      $('video')[0].currentTime = '32.100000';
    }
    if ($(span).hasClass('text-10')) {
      $('video')[0].currentTime = '34.730000';
    }
    if ($(span).hasClass('text-11')) {
      $('video')[0].currentTime = '39.430000';
    }
    if ($(span).hasClass('text-12')) {
      $('video')[0].currentTime = '42.350000';
    }
    if ($(span).hasClass('text-13')) {
      $('video')[0].currentTime = '46.300000';
    }
    if ($(span).hasClass('text-14')) {
      $('video')[0].currentTime = '49.270000';
    }
    if ($(span).hasClass('text-15')) {
      $('video')[0].currentTime = '53.760000';
    }
    if ($(span).hasClass('text-16')) {
      $('video')[0].currentTime = '57.780000';
    }
    
  }); // end of span click

});