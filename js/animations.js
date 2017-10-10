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

      if (textMax - charLeft < 0) {
        console.log('working?')
         $('#tweet-compose').css("color", "red")
         $('#char-count').css("color", "red")
         $('#tweet-submit').hide()
       } else if (textMax - charLeft >= 0) {
      $('#tweet-compose').css("color", "black")
      $('#char-count').css("color", "black")
      $('#tweet-submit').show()
    }
  })

  $('#tweet-submit').on('click', function() {
    var tweet = $('#tweet-compose').prepend().val()
    $('#stream').prepend(`<div class="tweet">
      <div class="content">
        <img class="avatar" src="img/alagoon.jpg" />
        <strong class="fullname">Joe Lau</strong>
        <span class="username">@Mofeta</span>
        <p class="tweet-text">` + tweet + `</p>
        <div class="tweet-actions">
          <ul>
            <li><span class="icon action-reply"></span> Reply</li>
            <li><span class="icon action-retweet"></span> Retweet</li>
            <li><span class="icon action-favorite"></span> Favorite</li>
            <li><span class="icon action-more"></span> More</li>
          </ul>
        </div>
        <div class="stats">
          <div class="retweets">
            <p class="num-retweets">30</p>
            <p>RETWEETS</p>
          </div>
          <div class="favorites">
            <p class="num-favorites">6</p>
            <p>FAVORITES</p>
          </div>
          <div class="users-interact">
            <div>
              <img src="img/alagoon.jpg" />
              <img src="img/vklimenko.jpg" />
            </div>
          </div>
          <div class="time">
            1:04 PM - 19 Sep 13
          </div>
        </div>
        <div class="reply">
          <img class="avatar" src="img/alagoon.jpg" />
          <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
        </div>
      </div>
    </div>`)

  });
$('.tweet-actions').hide()

  $('')




});
