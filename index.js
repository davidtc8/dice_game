/*Inside index.js, create a new variable called randomNumber1 then set the value 
of this variable to a random number between 1 and 6. Test it out in the console 
to make sure it works as expected.
 */

// Function to generate a random number
function randomNumberGenerator() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.floor(randomNumber) + 1;
    return randomNumber;
}

// Function to rewrite the HTML element
function getElementHTML(therandomNumber, imagenum) {
    document.querySelector(".img" + imagenum).setAttribute("src", "images/dice" + therandomNumber + ".png")
}

// Generator number for the number 1
function randomNumber1() {
    var randomNumber1 = randomNumberGenerator()
    if (randomNumber1 === 1) {
        getElementHTML(randomNumber1, 1)
    } else if (randomNumber1 === 2) {
        getElementHTML(randomNumber1, 1)
    } else if (randomNumber1 === 3) {
        getElementHTML(randomNumber1, 1)
    } else if (randomNumber1 === 4) {
        getElementHTML(randomNumber1, 1)
    } else if (randomNumber1 === 5) {
        getElementHTML(randomNumber1, 1)
    } else {
        getElementHTML(randomNumber1, 1)
    }
}

// Generator number for the number 2
function randomNumber2() {
    var randomNumber2 = randomNumberGenerator();
    if (randomNumber2 === 1) {
        getElementHTML(randomNumber2, 2);
    } else if (randomNumber2 === 2) {
        getElementHTML(randomNumber2, 2);
    } else if (randomNumber2 === 3) {
        getElementHTML(randomNumber2, 2);
    } else if (randomNumber2 === 4) {
        getElementHTML(randomNumber2, 2);
    } else if (randomNumber2 === 5) {
        getElementHTML(randomNumber2, 2);
    } else {
        getElementHTML(randomNumber2, 2);
    }
}

//Calling the functions
randomNumber1();
randomNumber2();