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
var requiredCharacters = ""



var requireLength = prompt(
  "From 8 - 128 characters,what length do you require?"
);
var newPasswordLength = requireLength;

while (requireLength < 8 || requireLength > 128) {
  var requireLength = prompt("PLEASE enter number between 8 - 128");
}
console.log("Password Length: " + newPasswordLength);

var requireUpperCase = confirm("Does your password need upper case characters");
if (requireUpperCase) {
  function upperCaseRequired(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  console.log(upperCaseRequired("Where a password would go to be uppercased"));
}
var requireNumbers = confirm("Do you need numbers in your password?");
if (requireNumbers){
  var newPassword = requiredCharacters.concat(numberSet);
}
console.log(newPassword);
// if (numbers) {
// var numbersRequired =

// var specialCharPassword = confirm("Do you require special characters?");

