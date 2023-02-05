// Assignment code here
generatePassword = function() {
    var password = "";
    var characterPool = "";


    // Prompt user for password length
    var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
    

    // Ask user for length again if they enter a number outside of the range
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128")
        return generatePassword();
    }

    // Ask user for character types
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var specialCharacters = confirm("Would you like to include special characters?");

    // Ask user for character types again if they select none
    if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
        alert("Please select at least one character type");
        return generatePassword();
    }

    // Add character types to character pool
    if (lowerCase === true) {
        characterPool += "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperCase === true) {
        characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers === true) {
        characterPool += "0123456789";
    }
    if (specialCharacters === true) {
        characterPool += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }

    // Generate password
    for (var i = 0; i < passwordLength; i++) {
        // Add random character from character pool to password
        // Math.random generates a random number between 0 and 1
        // Math.floor rounds down to the nearest whole number
        // charAt returns the character at the specified index
        // Math.random * characterPool.length generates a random number between 0 and the number of characters in the character pool
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }

    return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
// Writes whatever is returned from generatePassword to the passwordText variable
  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);