$(document).ready(function(){
  $('#char-count').hide();
  $('#tweet-submit').hide();

  $('.tweet-compose').on('click', function(){
    $('#tweet-submit').show();
    $('#char-count').show();
    $(this).css('height', '5rem')
  });

  var textMax = 140;
  $('.tweet-compose').on('keyup', function() {
    var charLeft = $('#tweet-compose').val().length
    $('#char-count').html( textMax - charLeft)
      if (charLeft < 0) {
        return charLeft = $('.tweet-compose').val('').length
      }

  })

  $('#tweet-submit').on('click', function() {
    var tweet = $('#compose').prepend()
    $('#stream').prepend(tweet)

  });


});
