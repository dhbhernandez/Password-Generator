// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
var passwordLenth = prompt("choose a length of at least 8 characters and no more than 128 characters");

//if pwlength is less then 8 or greater then 128- show alert letting user know requirement not met; jump out of the function

if(passwordLenth < 8 || passwordLenth > 128) {
  alert('the requirement is no met');
return;
}

confirm()





}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
