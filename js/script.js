$(document).ready(function(){

  $('#start').click(function(){
    var sec = 0;
    var min = 0;
    setInterval(function(){
      sec++;
      if (sec === 60) {
        min++;
        sec =0;
        $('#minutes').text(min);
      }
      $('#seconds').text(sec);
    },1000);

     $('#start').attr("disabled", true);
  });

  $('#pause').click(function(){
    clearTimeout();
  });

  $('#continue').click(function(){

  });

  $('#reset').click(function(){
    setInterval();
  });


});
