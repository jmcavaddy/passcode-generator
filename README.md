# Passcode Generator

## Passcode Generator User Story
As an employee with access to sensitive data, I want an application that can randomly generate a password that meets specified criteria (i.e. length and character content) so that I can create highly secure passwords with ease.

## Acceptance Criteria
GIVEN I need a new, secure password  
WHEN I click the button to generate a password  
THEN I am presented with a series of prompts for password criteria  
WHEN prompted for password criteria  
THEN I select which criteria to include in the password  
WHEN prompted for the length of the password  
THEN I choose a length of at least 8 characters and no more than 128 characters  
WHEN asked for character types to include in the password  
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters  
WHEN I answer each prompt  
THEN my input should be validated and at least one character type should be selected  
WHEN all prompts are answered  
THEN a password is generated that matches the selected criteria  
WHEN the password is generated  
THEN the password is either displayed in an alert or written to the page  

## Preview of Application
![Preview of passcode generator](preview-passcode-generator.png)

Above is a preview of a 16-character passcode generated using all possible characters (lowercase and uppercase letters, special characters, and numbers).

## Location of Deployed Application
[Here](https://jmcavaddy.github.io/passcode-generator/) is where you can generate your own passcodes!
