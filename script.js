// generate a new password everytime button is clicked
// give parameters to apply while generating password
// Set length between 8 and 128 characters
// confirm special uppercase, lowercase and numbers in password
// after password is generated, it should be generated in an alert or written on the page.

// Assignment Code

var generatePW = "new-password"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
