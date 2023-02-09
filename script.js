// Assignment code here

function generatePassword() {
  let lowerCaseCharacters = [];
  let upperCaseCharacters = [];
  let numericCharacters = [];
  let specialCharacters =[];
}
nuberOfCharacters = prompt ("How many characters do you want in your password? Choose a number between 8-128.");
if (numberOfCharacters <8 || numberOfCharacters >128) {
  return "Choose a valid number of characters.";
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
