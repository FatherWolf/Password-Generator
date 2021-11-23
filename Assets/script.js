// Assignment Code
var generateBtn = document.querySelector("#generate");
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var lowercase = "abcdefghijklmnopqrstuvwxyz";

// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var specialchar = "!@#$%^&*`";
// var passlist = "";

function generatePassword() {
  var number = (1, 2, 3, 4, 5, 6, 7, 8, 9);

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var specialchar = "!@#$%^&*`".split("");

  var passwordLength = prompt(
    "Select a number between 8 and 128 for password length!"
  );
  var numOfCharacters = parseInt(passwordLength);
  console.log(passwordLength);
  if (numOfCharacters >= 8 && numOfCharacters <= 128) {
    var passList = [];
    var randomChar = [];
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var lower = confirm("Would you like lower case letters in your password?");

    if (lower === true) {
      alert("You selected lowercase Characters.");
      randomChar = randomChar.concat(lowerCase);
    }

    for (var i = 0; i < numOfCharacters; i++) {
      var randomLetter = Math.floor(Math.random() * randomChar.length);
      console.log(randomLetter);
      passList.push(randomChar[randomLetter]);
    }

    return passList.join("");
  } else {
    alert("Select a number in the range");
    generatePassword();
  }
  return "";
}
//   for (var i = 0; i < passwordLength; i++) {
//     var randomNumber = Math.floor(Math.randomNumber() * passlist.length);
//   }

//   for (var i = 0; i < passwordLength; i++) {
//     var randomUpper = Math.floor(Math.uppercase() * passlist.length);
//   }

//   }
//   for (var i = 0; i < specialchar.length; i++) {
//     var randomSpecial =
//       specialchar[Math.floor(Math.random() * specialchar.length)];
//   }

//   var nums = confirm("Would you like numbers in your password?");

//   if (nums === true) {
//     alert("You selected numbers.");
//     if (nums === true) {
//       var passlist = passlist.concat(randomNumber);
//     }
//   }

//   var upper = confirm("Would you like upper case letters in your password?");

//   if (upper === true) {
//     alert("You selected uppercase characters.");
//     if (upper == true) {
//       passlist = passlist.concat(randomUpper);

//       console.log(passlist);
//     }
//   }

//   var lower = confirm("Would you like lower case letters in your password?");

//   if (lower === true) {
//     alert("You selected lowercase Characters.");
//   }

//   var special = confirm("Would you lke special characters in your password");

//   if (special === true) {
//     alert("You selected special characters.");
//   }
//   return writePassword;
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
