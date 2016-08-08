$(document).ready(function() {
  var magic8 = ["Yup!", "Fuhgeddaboutit", "Maybe", "What would your mother do?", "What would an Australian do? Then do the opposite.", "Try Again Later"]

  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }
  $("#magic").on("click",
  function magic8Ball(){
    //$("#magic").attr('value', 'Clear');
    x = 0;
    while (x < 5){
      var question = $("#question").val();

      if (question == "STOP"){
        x = 10000;
        $("#answer").text("Thank you for playing.");
        break;
      }
      else {
        $("#answer").toggle('slow','linear').text(magic8[getRandomNumber(0, magic8.length-1)]);
        break;
      }
    }
  });

});
