//opphave 1

/*
function convertToCelsius() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitResult = document.getElementById("fahrenheitResult");
    var fahrenheitTemp = celsiusToFahrenheit(celsiusInput);
    fahrenheitResult.textContent = celsiusInput + " grader Celsius tilsvarer " + fahrenheitTemp + " grader Fahrenheit.";
}

function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusResult = document.getElementById("celsiusResult");
    var celsiusTemp = fahrenheitToCelsius(fahrenheitInput);
    celsiusResult.textContent = fahrenheitInput + " grader Fahrenheit tilsvarer " + celsiusTemp + " grader Celsius.";
}

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
*/

//Oppgave 2 

// function sammenligneTall() {
//     var tall1 = Math.floor(Math.random() * 11);
//     var tall2 = Math.floor(Math.random() * 11);

//     if (tall1 < tall2) {
//         document.getElementById("output").textContent = tall1 + " er mindre enn " + tall2;
//     } else if (tall1 > tall2) {
//         document.getElementById("output").textContent = tall1 + " er større enn " + tall2;
//     } else {
//         document.getElementById("output").textContent = tall1 + " er lik " + tall2;
//     }
// }

//Oppgave 3

// function checkPalindrome() {
//     var inputText = document.getElementById("inputText").value;

//     var cleanText = inputText.toLowerCase().replace(/\s/g, '');

//     var isPalindrome = true;
//     for (var i = 0; i < cleanText.length / 2; i++) {
//         if (cleanText[i] !== cleanText[cleanText.length - 1 - i]) {
//             isPalindrome = false;
//             break;
//         }
//     }

//     if (isPalindrome) {
//         document.getElementById("result").textContent = "'" + inputText + "' er et palindrom.";
//     } else {
//         document.getElementById("result").textContent = "'" + inputText + "' er ikke et palindrom.";
//     }
// }

//Oppgave 4

// function makeRed(id) {
//     var element = document.getElementById(id);
//     element.style.backgroundColor = 'red';
// }

// function makeRandom() {
//     var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.getElementById('div1').style.backgroundColor = randomColor;
//     document.getElementById('div2').style.backgroundColor = randomColor;
// }

//Oppgave 5

// document.getElementById('dimensionsForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     var width = parseInt(document.getElementById('widthInput').value);
//     var height = parseInt(document.getElementById('heightInput').value);
    
//     var rectangle = drawRectangle(width, height);
//     document.getElementById('rectangleOutput').innerText = rectangle;
// });

// function drawRectangle(width, height) {
//     var rectangle = '';
//     for (var i = 0; i < height; i++) {
//         for (var j = 0; j < width; j++) {
//             if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
//                 rectangle += '*';
//             } else {
//                 rectangle += ' ';
//             }
//         }
//         rectangle += '\n';
//     }
//     return rectangle;
// }

//Oppgave 6
function changeBackgroundColor() {
    var colorCode = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = colorCode;
}