// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  // all the logic goes here to generate a password using
  // indexof, loop functions, and other stuff you already know

  return "temp password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberSet = "0123456789";
var specialCharacters = "!@#$%^&*()_+";
var requiredCharacters = "";
// User response to length requirement
var requireLength = prompt(
  "How many characters do you require in your password? Enter a number from 8 - 128"
);
var passwordLength = requireLength;

if (passwordLength < 8 || passwordLength > 128) {
  var requireLength = prompt("PLEASE enter number between 8 - 128");
}

console.log("Password Length: " + passwordLength);
// user response to uppercase requirement
var requireUpperCase = confirm(
  "Do you require upper case characters in your password"
);
if (requireUpperCase) {
  var requiredCharacters = requiredCharacters.concat(upperCaseCharacters);
}

// // user response to lowercase requirement
var requireLowerCase = confirm(
  "Do you require lower case characters in your password"
);
if (requireLowerCase) {
  var requiredCharacters = requiredCharacters.concat(lowerCaseCharacters);
}

// // User response to number requirement

var requireNumbers = confirm("Do you require numbers in your password?");
if (requireNumbers) {
  var requiredCharacters = requiredCharacters.concat(numberSet);
}

// //  User response to special character requirement
var requireSpecial = confirm(
  "Do you require special characters in your password?"
);
//  User response to special character requirement
if (requireSpecial) {
  var requiredCharacters = requiredCharacters.concat(specialCharacters);
}
console.log(requiredCharacters);
