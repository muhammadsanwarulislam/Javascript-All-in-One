//Game value
let min         = 1,
    max         = 10,
    winningNum  = getRandomNumber(min, max),
    guessLeft   = 3

//UI Element
const game          = document.querySelector('#game'),
      minNumber     = document.querySelector('.min-num'),
      maxNumber     = document.querySelector('.max-num'),
      guessBtn      = document.querySelector('#guess-btn'),
      guessInput    = document.querySelector('#guess-input'),
      message       = document.querySelector('.message')

//Assign UI min and max
minNumber.textContent = min
maxNumber.textContent = max

//Play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)

    //Check validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter a number between ${min} and ${max}`,'red')
    }

    //Check winning number
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct! you win`)
    }else{
        guessLeft -= 1
        if(guessLeft === 0){
            gameOver(false,`Game over! The winning number was ${winningNum}`)
        }else{
            guessInput.value = ''
            guessInput.borderColor = 'red'
            setMessage(`${guess} is not correct and you have ${guessLeft} guess left`,'red')
        }
    }
})

//Game over
function gameOver(won,msg){
    let color
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true
    guessInput.style.borderColor = color
    message.style.color = color
    setMessage(msg)

    //Play Again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}
//Get Random number
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//Set message
function setMessage(msg,color){
    message.style.color = color
    message.textContent = msg
}
