# 04 Web APIs: Code Quiz

## Summary 

The purpose of the assignment was to create an application that generates a random password based on a set of user-selected criteria. The application developed is accessed via the user's browser and includes HTML and CSS code that is dynamically udpated through JavaScript elements as well as a polished UI that is repsonsive to multiple screen sizes.

```
User Story
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Site Picture
![Site](password-generator.png)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles HTML elements on page
- Bootstrap - CSS framework directed at responsive, mobile first front-end web development
- JavaScript - provides dynamic interactivity on HTML documents
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

Below is an example of a block of code in the JS file where I created a function leveraging the While loop to determine how many random digits of each kind should be included in the generated password. It includes nested If/Else statements evaluating whether each set of characters value were set to True by the user as well as keep track of the current digit count of the generated password ceasing to add digits when it gets to the number the user chose for the length in the first prompt.

```js
function generatePasswordCharacters() {
    
    console.log(generatedPassword.length)

    console.log(passwordLengthInteger)

    while (generatedPassword.length < passwordLengthInteger) {
        
        console.log(generatedPassword.length)

        console.log(passwordLengthInteger)
        
        if (lowerCaseCharacters === true && generatedPassword.length < passwordLengthInteger) {
            randomLowerCase();

            console.log("generatedPassword.length = " + generatedPassword.length)

            console.log("passwordLengthInteger = " + passwordLengthInteger)
        }

        else {null};

        if (upperCaseCharacters === true && generatedPassword.length < passwordLengthInteger) {
            randomUpperCase();
            
            console.log("generatedPassword.length = " + generatedPassword.length)

            console.log("passwordLengthInteger = " + passwordLengthInteger)
        }

        else {null};

        if (numericCharacters === true && generatedPassword.length < passwordLengthInteger) {
            randomNumericCase();

            console.log("generatedPassword.length = " + generatedPassword.length)

            console.log("passwordLengthInteger = " + passwordLengthInteger)
        }

        else {null};

        if (specialCharacters === true && generatedPassword.length < passwordLengthInteger) {
            randomSpecialCase();

            console.log("generatedPassword.length = " + generatedPassword.length)

            console.log("passwordLengthInteger = " + passwordLengthInteger)
        }

        else {null};
        
    }

    alert(generatedPassword)
}
```

## Author Links

Will Gibson

[LinkedIn](https://www.linkedin.com/in/wtgibson/)

[GitHub](https://github.com/wtgibson/1-code-refactor)

Special thanks to Mahisha Gunasekaran, Kerwin Hy, and Jeremy Cantwell for their input and assistance with the assignment!