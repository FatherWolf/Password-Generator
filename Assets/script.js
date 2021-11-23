// Assignment Code
var generateBtn = document.querySelector("#generate");
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var lowercase = "abcdefghijklmnopqrstuvwxyz";

// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var specialchar = "!@#$%^&*`";
// var passlist = "";

function generatePassword() {
  var passwordLength = prompt(
    "Select a number between 8 and 128 for password length!"
  );
  var numOfCharacters = parseInt(passwordLength);

  if (numOfCharacters >= 8 && numOfCharacters <= 128) {
    var passList = [];
    var randomChar = [];
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var specialchar = "!@#$%^&*`".split("");
    var number = "123456789".split("");

    var lower = confirm("Would you like lower case letters in your password?");

    if (lower === true) {
      alert("You selected lowercase Characters.");
      randomChar = randomChar.concat(lowerCase);
    }

    for (var i = 0; i < numOfCharacters; i++) {
      var randomLetter = Math.floor(Math.random() * randomChar.length);

      passList.push(randomChar[randomLetter]);
    }

    var upper = confirm("Would you like upper case letters in your password?");
    if (upper === true) {
      alert("You selected uppercase Characters.");
      randomChar = randomChar.concat(upperCase);
    }
    for (var i = 0; i < numOfCharacters; i++) {
      var randomUpper = Math.floor(Math.random() * randomChar.length);

      passList.push(randomChar[randomUpper]);
    }
    var special = confirm("Would you lke special characters in your password");
    if (special === true) {
      alert("You selected special Characters.");
      randomChar = randomChar.concat(specialchar);
    }
    for (var i = 0; i < numOfCharacters; i++) {
      var randomSpecial = Math.floor(Math.random() * randomChar.length);

      passList.push(randomChar[randomSpecial]);
    }
    var nums = confirm("Would you like numbers in your password?");
    if (nums === true) {
      alert("You selected Number");
      randomChar = randomChar.concat(number);
    }

    for (var i = 0; i < numOfCharacters; i++) {
      var randomNumber = Math.floor(Math.random() * randomChar.length);

      passList.push(randomChar[randomNumber]);
    }
    var final = [];
    for (var i = 0; i < numOfCharacters; i++) {
      var finalPassword = Math.floor(Math.random() * passList.length);

      final.push(passList[finalPassword]);
    }

    return final.join("");
  } else {
    alert("Select a number in the range");
    generatePassword();
  }
  return "";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
