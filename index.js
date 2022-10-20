

function generateRandomNumber(range) {
  let max = 2 + range
  let min = 1
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let totalPoint = 0
let gameContinue = true
let range = 0

const username = prompt('Enter your username: ')

while (gameContinue) {
  let num = generateRandomNumber(range)
  console.log(num)
  console.log('Stage', range + 1)
  let gussedNumber = prompt('Enter a number: ')
  if (num == gussedNumber) {
    totalPoint += 1
    range += 1
    console.log('You gussed Right')
    console.log(username, ' Your total points is ', totalPoint)

  } else {
    console.log('You gussed wrong')
    console.log(username, ' Your total points is ', totalPoint)
    gameContinue = false
  }
}