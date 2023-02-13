let numOne = document.querySelector("#input-box-one")
let numTwo = document.querySelector("#input-box-two")
let numThree = document.querySelector("#input-box-three")
let numFour = document.querySelector("#input-box-four")
let numFive = document.querySelector("#input-box-five")
let numSix = document.querySelector("#input-box-six")
let numSeven = document.querySelector("#input-box-seven")
let numEight = document.querySelector("#input-box-eight")
let numNine = document.querySelector("#input-box-nine")

//Add event listener for submit button
const gameArea = document.getElementById('game-area');

gameArea.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

//Add event listener for clear all function
let clearForm = document.getElementById('reset');
let inputs = document.querySelectorAll('input');

    clearForm.addEventListener('click', () => {
    if(gameAttempts==0) {
        window.location.reload();
    } else {
         inputs = (input => input.value = ''), document.getElementById("output").innerHTML = '';
    }
});

//Check for number inputs and reject isNAN
function numberOnly(input) {
    let numOnly = /[^1-9]/gi;
    input.value = input.value.replace(numOnly, "");
};

//Check inputs and return game state
let gameAttempts = 3;
function checkInputs(){
    //Get the values from the inputs
    const boxOne = numOne.value.trim();
    const boxTwo = numTwo.value.trim();
    const boxThree = numThree.value.trim();
    const boxFour = numFour.value.trim();
    const boxFive = numFive.value.trim();
    const boxSix = numSix.value.trim();
    const boxSeven = numSeven.value.trim();
    const boxEight = numEight.value.trim();
    const boxNine = numNine.value.trim();
    //Check for correct values to solve the puzzle
    if(boxOne === '9' && 
        boxTwo === '5' && 
        boxThree === '4' && 
        boxFour === '6' && 
        boxFive === '3' && 
        boxSix === '2' && 
        boxSeven === '7' && 
        boxEight === '1' && 
        boxNine === '8') {
        successMessage();
    } 
    else 
    {
        gameAttempts = gameAttempts-1;
        errorMessage();
    if(gameAttempts==0) {
        errorMessage();
        hideBtn.style.visibility = '';           
        }
    }
};

//Hide solution button
const hideBtn = document.getElementById('show-answer');

hideBtn.style.visibility = 'hidden';

//Show answers
let showAnswers = document.getElementById('show-answer');

showAnswers.addEventListener('click', () => {
        document.getElementById('input-box-one').value = '9',
        document.getElementById('input-box-two').value = '5',
        document.getElementById('input-box-three').value = '4',
        document.getElementById('input-box-four').value = '6',
        document.getElementById('input-box-five').value = '3',
        document.getElementById('input-box-six').value = '2',
        document.getElementById('input-box-seven').value = '7',
        document.getElementById('input-box-eight').value = '1',
        document.getElementById('input-box-nine').value = '8';
    });

function successMessage() {
    //Add success message
    let html = '<h2>You Are Correct! Well Done.</h2>'
    document.getElementById('output').innerHTML = html;
};

function errorMessage() {
    //Add error message)
    html = '<h2>That Is Wrong! Try Again.</h2>'
    document.getElementById('output').innerHTML = html;
};




