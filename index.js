function generateRandomNumber(min, max, range) {
  return Math.floor(Math.random() * ((max + range) - min + 1) + min)
}
let totalPoint = 0
let gameContinue = true
let range = 0
const min = 1
let max = 2
const username = prompt('Enter your username: ')

while (gameContinue) {
  let num = generateRandomNumber(min, max, range)
  // console.log(num)
  console.log('Stage', range + 1)
  let gussedNumber = parseInt(prompt(`Enter a number between ${min} and ${max + range} : `))
  
  if (num === gussedNumber) {
    console.log(`${username} You gussed Right, Your total point is ${totalPoint}`)
    totalPoint += 1
    range += 1
  } else {
    console.log(`${username} You gussed Wrong, Your total point is ${totalPoint}`)
    gameContinue = false
  }
}