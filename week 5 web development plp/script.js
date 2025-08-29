// This is the script.js file for the project.

// Part 1: Variable declarations and conditionals
// ---------------------------------------------
const userName = 'Alice';
let userAge = 25;
const isStudent = true;

// A simple conditional statement to check a user's status.
if (userAge >= 18 && isStudent) {
    console.log(`${userName} is an adult student.`);
} else if (userAge >= 18) {
    console.log(`${userName} is an adult.`);
} else {
    console.log(`${userName} is a minor.`);
}

// A more complex conditional using a switch statement.
const userRole = 'admin';

switch (userRole) {
    case 'admin':
        console.log('You have full administrative access.');
        break;
    case 'editor':
        console.log('You can edit content.');
        break;
    case 'viewer':
        console.log('You can view content.');
        break;
    default:
        console.log('You have no specific role assigned.');
}

// Part 2: At least 2 custom functions
// ------------------------------------

/**
 * A function that calculates the sum of two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function addNumbers(num1, num2) {
    return num1 + num2;
}

/**
 * A function that generates a greeting message.
 * @param {string} name The name of the person to greet.
 * @returns {string} The complete greeting message.
 */
function createGreeting(name) {
    return `Hello, ${name}! Welcome to our project.`;
}

// Example usage of the custom functions
console.log(`The sum of 5 and 10 is: ${addNumbers(5, 10)}`);
console.log(createGreeting('Bob'));


// Part 3: At least 2 loop examples
// --------------------------------

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Example 1: A `for` loop to iterate through an array.
console.log('--- For Loop Example ---');
let fruitList = 'My favorite fruits are: ';
for (let i = 0; i < fruits.length; i++) {
    fruitList += fruits[i];
    if (i < fruits.length - 1) {
        fruitList += ', ';
    }
}
console.log(fruitList);


// Example 2: A `for...of` loop for a cleaner iteration over an array.
console.log('--- For...of Loop Example ---');
let fruitCounter = 0;
for (const fruit of fruits) {
    console.log(`I found fruit number ${++fruitCounter}: ${fruit}`);
}


// Part 4: At least 3 DOM interactions
// -----------------------------------

// DOM Interaction 1: Get an element and change its text content.
const dynamicText = document.getElementById('dynamicText');
const changeTextBtn = document.getElementById('changeText');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'This text has been changed by a button click!';
});

// DOM Interaction 2: Create a new element and append it to the page.
const outputArea = document.getElementById('outputArea');
const addParagraphBtn = document.getElementById('addParagraph');

addParagraphBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added dynamically!';
    outputArea.appendChild(newParagraph);
});


// DOM Interaction 3: Use the output of a function or loop to update the DOM.
const showLoopResultBtn = document.getElementById('showLoopResult');

showLoopResultBtn.addEventListener('click', () => {
    let resultHTML = '<p>Here are the fruits from the loop example:</p><ul>';
    for (const fruit of fruits) {
        resultHTML += `<li>${fruit}</li>`;
    }
    resultHTML += '</ul>';
    outputArea.innerHTML = resultHTML;
});