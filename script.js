// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  // all the logic goes here to generate a password using indexof, loop functions, and other stuff you already know
  
  
  
  return "temp password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
