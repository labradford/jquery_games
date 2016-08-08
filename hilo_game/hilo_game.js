//Allow the user to put there name in before the game starts.
 //When the user has won the game, let the user know they have
  //won, using their name.
$(document).ready(function(){
  //hide the win message
  $("#win").hide();
  //hide the lose message
  $("#gameOver").hide();
  var name;
  $("#btn1").on("click",
  function getName() {
    name = $("#name").val();
  });

// Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  var randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
  //print out random number so we can test
  console.log(randomNumber);
//set the counter to zero
var count = 1;
//declare the function for the hilo game
$("#btn2").on("click",
function hilo() {
  // Create a var for user input
  var userGuess;


  //while loop counter is less than 8 and user and random numbers don't match
  while (count < 8 && (userGuess != randomNumber)) {
    //ask the username to guess a number from 1 to 100
    userGuess = parseInt($("#userGuess").val());
    console.log(userGuess);


    //compares the user input to see if it is equal to the random number
    if (userGuess === randomNumber) {
      //remove error message
      $("#error").text("");
      //give the user a message that they won
      $("#win").show().append(" You WIN, " + name + "!");
      break;
    }
    //compares the count to see if it equals 7 guesses
    if (count === 7 ) {
      //give the user a message that they guessed too many incorrectly
      $("#gameOver").show().append(" Sorry, " + name + " you LOSE!");
      break;
    }
    //checks to see if count is 6 or 7
    if (count > 5) {
      //add class of twoError to the error paragraph for last two guesses
      $("#error").addClass("twoError");
    }

    //checks the user input to see if it is a valid number
    if (isNaN(userGuess)) {
      $("#error").text("Numbers only please");
      $("#userGuess").val("");
      break;
    }
    //checks to make sure the user input is between 1 and 100
    if (userGuess <1 || userGuess>100) {
      $("#error").text("Your guess needs to be between 1 and 100");
      $("#userGuess").val("");
      break;
    }
    //log the count to make sure it is functioning properly
    console.log(count);
    //add the users previous guesses to guess box
    $("#lastGuess").prepend(userGuess + " ");
    // compares the user input to see if its greater than the random number
    if (userGuess > randomNumber) {
      //give the user a message that the guess is too high
      $("#error").text("Your Guess is too high, Try Again. Your next guess is " + (count+1) + " of 7.");
      $("#userGuess").val("");
      //increment the count by one
      count = count + 1;
      break;
    }
    //compare the user input with to see if its less  than the random number
    if (userGuess < randomNumber) {
      //give the user a message that the guess is too low
      $("#error").text("Your Guess is too low, Try Again. Your next guess is " + (count+1) + " of 7.");
      $("#userGuess").val("");
      //increment the count by one
      count = count + 1;
      break;
    }


  }
  //alert("You are Done");
});
});
