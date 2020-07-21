// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "_"]
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var characterSelections = []
var passwordCharacter = ""
 

function generatePassword(){
            var numberOfCharacters = prompt ("How many characters would you like your password to contain?");
            var includeSpecialCharacters = confirm ("Click OK to confirm including special characters.");
            var includeNumbers = confirm ("Click OK to confirm including numeric characters");
            var includeLowercase = confirm ("Click OK to confirm including lowercase characters");
            var includeUppercase = confirm ("Click OK to confirm including uppercase characters");

            if (includeLowercase){
                for(var i = 0; i < lowercaseCharacters.length; i++){
                    characterSelections.push(lowercaseCharacters[i])
                }
                
            }
            if (includeNumbers){
                for(var i = 0; i < numericCharacters.length; i++){
                    characterSelections.push(numericCharacters[i])
                }
            }
            //    characterSelections.push(numericCharacters)
            
            if (includeSpecialCharacters){
                for(var i = 0; i < specialCharacters.length; i++){
                    characterSelections.push(specialCharacters[i])
                }
            }
            //    characterSelections.push(specialCharacters)
            
            if (includeUppercase){
                for(var i = 0; i < uppercaseCharacters.length; i++){
                    characterSelections.push(uppercaseCharacters[i])
                }
            }
          //passwordCharacter = passwordCharacter + characterSelections
            for (i = 0; i < numberOfCharacters; i++){    
              passwordCharacter += characterSelections[Math.floor(Math.random() * characterSelections.length)];
            }

          console.log(passwordCharacter);  
          return passwordCharacter;
}



// Write password to the #password input
function writePassword(){
  var password = generatePassword()
  
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
