
//-Promt user for password criteria ✅ 
//-Promt user for lenght of password between 8 - 128 characters ✅ 
//-Promt user if they want lower case, upper case, numeric and special characters ✅ 
//-When answering each prompt an input should be validated and at least one character type should be selected ✅ 
//-When all prompts are answered, then a password is generated that matches the selected criteria
//-The password is either displayed in an alert or written to the page

// Assignment code here 
var generateBtn = document.querySelector("#generate");

  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numeric = '0123456789';
  let specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;

function generatePassword() {
  let password = '';
  let characters = '';

//choosing amount of characters for the password
let amountOfCharacters = prompt ("Choose a number between 8-128 for the amount of characters that you want in your password");
if (amountOfCharacters < 8 || amountOfCharacters > 128) {
  alert("Try again! Choose a number BETWEEN 8-128.");
  return '';
} else {
  alert('Perfect, your password will be' + amountOfCharacters + "characters");

}
// choosing if they want lowercase or not 

let wantLowerCaseLetters = confirm("Choose 'OK' if you want to include lowercase letters, choose 'CANCEL' if otherwise");
if (wantLowerCaseLetters) { 
  alert("Lowercase letters will be included in your password");
  characters += lowerCaseLetters;
} else { 
  alert("You chose NOT to include lowercase letters in your password");

}


//choosing if they want uppercase or not
let wantUpperCaseLetters = confirm("Choose 'OK' if you want uppercase letters, choose 'CANCEL' if otherwhise");
if (wantUpperCaseLetters) {
  alert("Uppercase will be included in your password");
  characters += upperCaseLetters
} else {
  alert("You chose NOT to include uppercase letters in your password");

}

//choosing if the want numbers in their password or not
let wantNumeric = confirm('Choose OK if you want numbers in your password, choose CANCEL if otherwhise');
  if (wantNumeric) {
    alert('Numbers will be included in your password');
    characters += numeric;
  } else {
    alert("You chose NOT to include numbers in your password");

  }

//choosing if they want a special character in their password ot not
let wantSpecialCharacters = confirm('Choose OK if you want special characters in your password, choose CANCEL if otherwhise');
  if (wantSpecialCharacters) {
    alert('Special characters will be included in your password');
    characters += specialCharacters
  } else {
    alert("You chose NOT to include Special characters in your password");

  }


  for (let i = 0; i < amountOfCharacters; i++){
    let randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex];
    }

    return password;
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
