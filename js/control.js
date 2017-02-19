$(document).ready(function () { }).keydown(function (event) {
  //A S          sa�ok sol ok    h  enter
  var tus = new Array(83,65, 37, 39, 72, 13);
  //
  var kod = (event.which) ? event.which : event.keyCode;
  var karekter1, karekter2;

  if (kod == tus[0]) {
    karekter1 = $("#char1").position().left;
    if (karekter1 < 300)
    $("#char1").css("left", (karekter1 = karekter1 + 10) + "px")
  }
  if (kod == tus[1]) {
    karekter1 = $("#char1").position().left;
    if (karekter1 > 0)
    $("#char1").css("left",(karekter1 = karekter1 - 10) + "px")
  }
  if (kod == tus[2]) {
    karekter2 = $("#char2").position().left;
    if (karekter2 > 0)
    $("#char2").css("left", (karekter2 = karekter2 - 10) + "px")
  }
  if (kod == tus[3]) {
    karekter2 = $("#char2").position().left;
    if (karekter2 < 300)
    $("#char2").css("left", (karekter2 = karekter2 + 10) + "px")
  }


  if (kod == tus[4]) {
    var pos1=($("#char1img").offset());
    var pos2=($("#char2img").offset())
    if ($("#char1img").hasClass("d1") == true) {
      var pos=pos2.left-pos1.left;
      console.log(pos);
      if (pos <= 30 & pos >= 0) {
        var progress2 = $('#charbar2progress').val();

        $('#charbar2progress').val(progress2-=10);
        if (progress2 <= 0) {
          alert('game over!!!');
        }
      }
      $("#char1img").removeClass("d1");
      $("#char1img").addClass("a4");
    }else
    $("#char1img").addClass("a4");
    setTimeout(function(){
      if ($("#char1img").hasClass("a4") == true) {
        $("#char1img").removeClass("a4");
        $("#char1img").addClass("d1");
      }else
      $("#char1img").addClass("d1");
    },200);
    console.log($("#char1img").offset());
  }
  if (kod == tus[5]) {
    var pos1=($("#char1img").offset());
    var pos2=($("#char2img").offset())
    if ($("#char2img").hasClass("d1") == true) {
      var pos=pos1.left-pos2.left;
      console.log(pos);
      if (pos >= -30 & pos <= 0) {
        var progress1 = $('#charbar1progress').val();

        $('#charbar1progress').val(progress1-=10);
        if (progress1 <= 0) {
          alert('game over!!!');
        }
      }
      $("#char2img").removeClass("d1");
      $("#char2img").addClass("a4");
    }else
    $("#char2img").addClass("a4");
    setTimeout(function(){
      if ($("#char2img").hasClass("a4") == true) {
        $("#char2img").removeClass("a4");
        $("#char2img").addClass("d1");
      }else
      $("#char2img").addClass("d1");
    },200);
    console.log($("#char2img").offset());
  }
});
function p1name() {
  $('#char1 > .username').text($('#player1text').val());
  if ($('#player1text').val() == "" || $('#player1text').val()==undefined || $('#player1text').val()==null) {
    $('#char1 > .username').text("player 1");
  }
}
function p2name() {
  $('#char2 > .username').text($('#player2text').val());
  if ($('#player2text').val()=="" || $('#player2text').val()==undefined|| $('#player2text').val()==null) {
    $('#char2 > .username').text("player 2");
  }
}
