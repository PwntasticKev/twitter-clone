$(document).ready(function(){
  $('#char-count').hide();
  $('#tweet-submit').hide();

$('.tweet-compose').on('click', function(){
  $('#char-count').show();
  $('#tweet-submit').show();
  $(this).css("height", "5rem")
});

var textMax = 140;
$('.tweet-compose').on('keyup', function() {
$('#char-count').html(140 - $(this).val().length) ;




  // $('#char-count').val($('#char-count').val().length <= 140)


  // console.log($('#char-count').text())
//   1. get the text value of an input
// 2. get the length of that value
// 3. set the html of an element based on that value
})

$('#tweet-submit').on('click', function() {
  $('.tweet-compose').prependTo('.content'));
  $('#profile-summary').prependTo('.tweet');
})


});
