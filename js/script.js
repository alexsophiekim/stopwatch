$(document).ready(function(){
  var timer;
  var sec = 0;
  var min = 0;

  $('#start').click(function(){
    setTimeInterval();
     $(this).attr("disabled", true);
     $('#pause').removeAttr("disabled", true);
  });

  $('#pause').click(function(){
    $(this).attr("disabled",true);
    $('#start').removeAttr("disabled", true);
    $('#reset').show();
    clearTimeout(timer);
  });

  $('#continue').click(function(){
     $(this).hide();
     $('#reset').hide();
     $('#pause').show();
        setTimeInterval();
    });

    $('#reset').click(function(){
      $(this).hide();
      $('#start').show();
      $('#continue').hide();
      $('#minutes').text('0');
      $('#seconds').text('00');
        sec = 0 ;
        min = 0 ;
    })

    function setTimeInterval(){
      timer = setInterval(function(){
        sec++;
        if (sec === 60) {
          min++;
          sec =0;
          $('#minutes').text(min);
        }
        if (sec < 10) {
            $('#seconds').text('0'+sec);
        }else {
            $('#seconds').text(sec);
        }
      },1000);
    }

});
