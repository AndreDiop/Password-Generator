var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberSet = "0123456789";
var specialCharacters = "!@#$%^&*()_+_+~`{}|[]:',./<>?";
var requiredCharacters = "";
function generatePassword() {
  // user responses
  // User response to length requirement
  var requireLength = prompt(
    "How many characters do you require in your password? Enter a number from 8 - 128"
  );
  var passwordLength = parseInt(requireLength);

  if (passwordLength <= 8 || passwordLength >= 128 || isNaN(passwordLength)) {
    alert("PLEASE enter number between 8 - 128");
    return generatePassword();
  }

  console.log(passwordLength);
  // user response to uppercase requirement
  var requireUpperCase = confirm(
    "Do you require upper case characters in your password"
  );
  if (requireUpperCase) {
    requiredCharacters = requiredCharacters.concat(upperCaseCharacters);
  }else {
    alert("This makes your password less secure!");
  }

  // // user response to lowercase requirement
  var requireLowerCase = confirm(
    "Do you require lower case characters in your password"
  );
  if (requireLowerCase) {
    requiredCharacters = requiredCharacters.concat(lowerCaseCharacters);
  }else {
    alert("This makes your password less secure!");
    }

  // // User response to number requirement

  var requireNumbers = confirm("Do you require numbers in your password?");
  if (requireNumbers) {
    requiredCharacters = requiredCharacters.concat(numberSet);
  }else {
    alert("This makes your password less secure!");
  }

  // //  User response to special character requirement
  var requireSpecial = confirm(
    "Do you require special characters in your password?"
  );
  //  User response to special character requirement
  if (requireSpecial) {
    requiredCharacters = requiredCharacters.concat(specialCharacters);
  }else {
    alert("This makes your password less secure!");
    }
  console.log("Required characters in password:" + requiredCharacters);
  console.log("The length of the password is: " + passwordLength);
  // all the logic goes here to generate a password using
  // indexof, loop functions, and other stuff you already know

  var length = passwordLength,
    newPassword = "";
  for (var i = 0, n = requiredCharacters.length; i < length; ++i) {
    newPassword += requiredCharacters.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
