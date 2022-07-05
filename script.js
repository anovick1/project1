let cards = []
let dealer = []
let user = []
let userSum = 0
let dealerSum = 0
let count = 0

let buttons = document.querySelector('.buttons')
let stats = document.querySelector('.stats')
let statLine = document.createElement('h1')
let startBtn = document.createElement('button')
let hitBtn = document.createElement('button')
let standBtn = document.createElement('button')
let playAgain = document.createElement('button')
startBtn.innerText = 'Play Game'
hitBtn.innerText = 'Hit'
standBtn.innerText = 'Stand'
playAgain.innerText = 'Play Again?'
buttons.append(startBtn)

let d0 = document.querySelector('#d0')
let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')
let d4 = document.querySelector('#d4')
let u0 = document.querySelector('#u0')
let u1 = document.querySelector('#u1')
let u2 = document.querySelector('#u2')
let u3 = document.querySelector('#u3')
let u4 = document.querySelector('#u4')
let dealerCard0 = document.createElement('h1')
let dealerCard1 = document.createElement('h1')
let dealerCard2 = document.createElement('h1')
let dealerCard3 = document.createElement('h1')
let dealerCard4 = document.createElement('h1')
let userCard0 = document.createElement('h1')
let userCard1 = document.createElement('h1')
let userCard2 = document.createElement('h1')
let userCard3 = document.createElement('h1')
let userCard4 = document.createElement('h1')

let winningText = document.createElement('h1')
buttons.append(winningText)

/// make card objects
// 0 = clubs
// 1 = diamonds
// 2 = hearts
// 3 = spades
const makeDeck = () => {
  for (let i = 2; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
      ///
      /// clubs
      if (j === 0) {
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'ace_of_clubs.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'jack_of_clubs.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'queen_of_clubs.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'king_of_clubs.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: i + '_of_clubs.png'
          })
        }
      }
      ////
      /// diamonds
      else if (j === 1) {
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'ace_of_diamonds.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'jack_of_diamonds.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'queen_of_diamonds.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'king_of_diamonds.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: i + '_of_diamonds.png'
          })
        }
      }

      ////
      /// hearts
      else if (j === 2) {
        /// hearts
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'ace_of_hearts.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'jack_of_hearts.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'queen_of_hearts.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'king_of_hearts.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: i + '_of_hearts.png'
          })
        }
      }

      ////
      /// spades
      else {
        /// hearts
        if (i === 14) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 11,
            img: 'ace_of_spades.png'
          })
        } else if (i === 11) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'jack_of_spades.png'
          })
        } else if (i === 12) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'queen_of_spades.png'
          })
        } else if (i === 13) {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: 10,
            img: 'king_of_spades.png'
          })
        } else {
          cards.push({
            card: i,
            suit: j,
            picked: false,
            value: i,
            img: i + '_of_spades.png'
          })
        }
      }

      // if (i === 14) {
      //   cards.push({
      //     card: i,
      //     suit: j,
      //     picked: false,
      //     value: 11
      //   })
      // } else if (i > 9) {
      //   cards.push({
      //     card: i,
      //     suit: j,
      //     picked: false,
      //     value: 10
      //   })
      // } else {
      //   cards.push({
      //     card: i,
      //     suit: j,
      //     picked: false,
      //     value: i
      //   })
      // }
    }
  }
}

/// returns random card object that has not been used yet
const dealCard = () => {
  let index = Math.round(Math.random() * 52) - 1
  let newCard = cards[index]
  while (newCard.picked == 'true') {
    index = Math.round(Math.random() * 52) - 1
    newCard = cards[index]
  }
  cards[index].picked = true
  return newCard
}

/// updates sum of player's cards
const sum = () => {
  dealerSum = 0
  userSum = 0
  for (let i = 0; i < dealer.length; i++) {
    dealerSum += dealer[i].value
  }
  for (let i = 0; i < user.length; i++) {
    userSum += user[i].value
  }
  statLine.innerText = ' Dealer Sum: ' + dealerSum + '\n\nYour Sum: ' + userSum
  stats.append(statLine)
}

/// deals cards to dealer when their sum is < 17
/// add more logic later
const dealerHit = () => {
  if (dealerSum < 17) {
    if (dealer.length === 2) {
      dealer.push(dealCard())
      dealerCard2.innerText = dealer[2].value
      d2.append(dealerCard2)
    } else if (dealer.length === 3) {
      dealer.push(dealCard())
      dealerCard3.innerText = dealer[3].value
      d3.append(dealerCard3)
    } else if (dealer.length === 4) {
      dealer.push(dealCard())
      dealerCard4.innerText = dealer[4].value
      d4.append(dealerCard4)
    }
  }
  sum()
}

const checkWinner = () => {
  if (userSum > 21) {
    winningText.innerText = 'YOU BUSTED!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
  } else if (dealerSum > 21) {
    winningText.innerText = 'DEALER BUSTED, YOU WIN!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
  } else if (dealerSum > userSum) {
    winningText.innerText = 'DEALER WINS!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
  } else if (dealerSum < userSum) {
    winningText.innerText = 'YOU WIN!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
  } else {
    winningText.innerText = 'TIE!'
    hitBtn.style.display = 'none'
    standBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
  }
}

/// resets game board
const reset = () => {
  cards = []
  makeDeck()
  hitBtn.style.display = 'inline-block'
  standBtn.style.display = 'inline-block'
  winningText.innerText = 'Hit or stand?'
  user = []
  dealer = []
  userSum = 0
  dealerSum = 0
  dealerCard0.innerText = ''
  dealerCard1.innerText = ''
  dealerCard2.innerText = ''
  dealerCard3.innerText = ''
  dealerCard4.innerText = ''
  userCard0.innerText = ''
  userCard1.innerText = ''
  userCard2.innerText = ''
  userCard3.innerText = ''
  userCard4.innerText = ''
  sum()
}
//////
////// EVENT LISTENERS
//////

/// Start Button starts game and deals 2 cards to players
startBtn.addEventListener('click', () => {
  winningText.innerText = 'Hit or Stand?'

  reset()
  user.push(dealCard())
  userCard0.innerText = user[0].value
  u0.append(userCard0)

  dealer.push(dealCard())
  dealerCard0.innerText = dealer[0].value
  d0.append(dealerCard0)

  user.push(dealCard())
  userCard1.innerText = user[1].value
  u1.append(userCard1)

  dealer.push(dealCard())
  dealerCard1.innerText = dealer[1].value
  d1.append(dealerCard1)
  sum()
  startBtn.style.display = 'none'
  buttons.append(hitBtn)
  buttons.append(standBtn)
})

/// Hit button activates hit for user and simulates a turn for dealer
hitBtn.addEventListener('click', () => {
  if (user.length === 2) {
    user.push(dealCard())
    userCard2.innerText = user[2].value
    u2.append(userCard2)
  } else if (user.length === 3) {
    user.push(dealCard())
    userCard3.innerText = user[3].value
    u3.append(userCard3)
  } else if (user.length === 4) {
    user.push(dealCard())
    userCard4.innerText = user[4].value
    u4.append(userCard4)
  }
  dealerHit()
  sum()
  if (dealerSum > 21 || userSum > 21) {
    checkWinner()
  }
})

/// stand simulates rest rest of game for computer
standBtn.addEventListener('click', () => {
  while (dealerSum < 17) {
    dealerHit()
  }
  hitBtn.style.display = 'none'
  standBtn.style.display = 'none'
  checkWinner()
})
