// Connects the buttons to their functions.
document.getElementById('submit-area').addEventListener('click', calcArea)
document.getElementById('submit-circumference').addEventListener('click', circ)

let diameter = 0
let answerArea = 0
let answerCirc = 0
const pi = 3.14159

function calcArea () {
  diameter = document.getElementById('area').value
  if (diameter < 0) {
    alert('Do not use negative numbers.')
  }
  answerArea = pi * ((diameter / 2) * (diameter / 2))
  document.getElementById('answer').innerHTML = answerArea
}

function circ () {
  diameter = document.getElementById('circumference').value
  if (diameter < 0) {
    alert('Do not use negative numbers.')
  }
  answerCirc = (pi * diameter)
  document.getElementById('answer2').innerHTML = answerCirc
}
