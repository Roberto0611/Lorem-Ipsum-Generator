//Script by: Roberto Ochoa Cuevas

//Array with lorem ipsum typical words and an array with the text content
var words = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi'
];

var textContent = [];

//Get DOM elements
var output = document.getElementById('output'); //Get Output box
var Gbutton = document.getElementById('GenerateButton');//Get generate button

//Get Random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];//Get Randon number in the array
}
//Event 
Gbutton.addEventListener('click',function(){
    textContent[0] = words[0];
    textContent[1] = words[1];
    for (let index = 2; index < 90; index++) {
        textContent[index] = getRandomWord();
    }
    output.textContent = textContent.join(' ');
})
