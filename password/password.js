$(document).ready(function(){

  var count = 1;

  $("#sub").on("click",
  function yourId() {
    //add counter variable
    //create variable for user submits
    var userSubmit;
    var Identification;
    var pass;
    //create a while loop to count user submits
    while (count < 8 ) {
      console.log(count);
    //get user id from text box
    var userId = $("#userId").val();
    console.log(userId);
    //get user password from text box
    var password = $("#password").val();
    console.log(password);
    //check to see if the count is 7
    if (count === 7 ) {
      //disable submit button
      $("#sub").off("click");
      $("#feedback").text("Sorry, too many tries. Please refresh and try again");
      break;
    }
    //check to make sure user id is different from password and it is more than 6 characters long and it doesn't includes a !, # or $
    Identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
    //check to make sure password is not equal to the string "password", and that it does include either !, # or $
    pass = (password != "password")
      && (password.includes("!") || password.includes("#") || password.includes("$"))
      //and also checks to make sure it includes a number
      && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
      //and checks to make sure there is at least one uppercase and one lowercase letter
      && (password != password.toUpperCase() && password != password.toLowerCase());

      //checks to see if Identification and pass are both false, give user feedback that it is not valid
    if (Identification === false && pass === false) {
      $("#userId").val("");
      $("#userIdError").text("User id not valid. Please try again");
      $("#feedback").text("");
      $("#password").val("");
      $("#passwordError").text("Password not valid. Please try again");
      count = count + 1;
      break;
    }

    //clear the error message if Identification is true but pass is false
    if (Identification === true && pass === false) {
      $("#userIdError").text("");
      $("#password").val("");
      $("#feedback").text("");
      count = count + 1;
      break;
    }
    //clear the error message if pass is true but Identification is false
    if (pass === true && Identification === false) {
      $("#passwordError").text("");
      $("#userId").val("");
      $("#feedback").text("");
      count = count + 1;
      break;
    }
      //gives user feedback that their user id and password are valid
    if (Identification === true && pass === true) {
        $("#feedback").text("Your credentials are valid");
        $("#password").val("");
        $("#userId").val("");
        $("#passwordError").text("");
        $("#userIdError").text("");
        break;
      }
    }
  });
});
