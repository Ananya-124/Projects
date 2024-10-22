var buttonColours = ["red", "green", "yellow", "blue"];
var gamepat = [];
function nextSequence() {
  var randNumber = Math.floor(Math.random() * 4);
  var randcolor = buttonColours[randNumber];
  gamepat.push(randcolor);
  $("." + randcolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio1 = new Audio("Projects\Simon game\sounds\blue.mp3" + randcolor);
  audio1.play();
}
var userpatt = []

     $(".main").click(function() {
        var usercolor = $(this).attr("id");
        userpatt.push(usercolor);
    });
    

    


