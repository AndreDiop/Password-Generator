// Assignment Code
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
var specialCharacters = "!@#$%^&*()_+";
var requiredCharacters = "";

// User response to length requirement
var requireLength = prompt(
  "How many characters do you require in your password? Enter a number from 8 - 128"
);
var passwordLength = parseInt(requireLength);

if (passwordLength <= 8 && passwordLength >= 128) {
  var requireLength = prompt("PLEASE enter number between 8 - 128");
} else {
  alert("PLEASE enter number between 8 - 128");
}

console.log(passwordLength);
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
console.log("Required characters in password:" + requiredCharacters);
console.log("The length of the password is: " + passwordLength);
// all the logic goes here to generate a password using
// indexof, loop functions, and other stuff you already know

function generatePassword() {
  var length = passwordLength,
    charset = requiredCharacters,
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
