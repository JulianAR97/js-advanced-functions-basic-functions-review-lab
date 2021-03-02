// Your code here

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`

function wrapAdjective(flair = '*') {
  let inner = (adj = 'special') => `You are ${flair}${adj}${flair}!`
  return inner
}

let Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function actionApplyer(startInt, functions) {
  let ans = startInt
  functions.forEach(fn => ans = fn(ans))
  return ans
}

let arrayOfTransforms = [
  function(a){ return a * 2 },
  function(a){ return a + 1000},
  function(a){ return a % 7 }
]

