// Connects the buttons to their functions.
document.getElementById('submit-area').addEventListener('click', calcArea)
document.getElementById('submit-circumference').addEventListener('click', circ)

// The 'diameter' variable will store the users input, and the 'answer' variables store the answers to the equations.
let diameter = 0
let answerArea = 0
let answerCirc = 0
// Const means that the value is not being changed like with the variables, which are storing different values all the time based on the user's input. Const means that the value will stay the same.
const pi = 3.1415926535

// This function is calculating the area when the user clicks the 'Calculate Area' button. 
function calcArea () {
  // Takes the value from the input box with id 'area', stores it in the 'diameter' variable, and uses it for the calculations below. 
  diameter = document.getElementById('area').value
  // If the diameter is less than 0, then display an alert with the message below.

  if (diameter < 0) {
    alert('Do not use negative numbers.')
  }
  // This is the formula that the program will use to calculate the area. It will use the pi const and the diameter variable and store the result in the 'answerArea' variable.
  answerArea = pi * ((diameter / 2) * (diameter / 2))
  // Present the result of the equation in the paragraph tag with id 'answer'.
  document.getElementById('answer').innerHTML = 'Answer: ' + answerArea + ' cm'
}

// This function will calculate the circumference of the circle when the user clicks the 'Calculate Circumference' button.
function circ () {
  // Takes the value from the input box with id 'circumference', stores it in the 'diameter' variable, and uses it for the calculations below. 
  diameter = document.getElementById('circumference').value

  // If the diameter is less than 0, then display an alert with the message below.
  if (diameter < 0) {
    alert('Do not use negative numbers.')
  }

  // This is the actual formula that will be used to calculate the circumference. It will use the pi const and the diameter variable and store the result in the 'answerCirc' variable.
  answerCirc = (pi * diameter)
  // Present the result of the equation in the paragraph tag with id 'answer2'.
  document.getElementById('answer2').innerHTML = 'Answer: ' + answerCirc + ' cm'
}
