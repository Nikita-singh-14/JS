# DOM Project
# Project link
[Click Here!](https://stackblitz.com/edit/dom-project-chaiaurcode-swbdyslt?file=index.html)

# Solution Code

# Project 1
```
console.log("nikita)
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(button) {
  button.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```
# Project 2
```

const form = document.querySelector("form")
//console.log(form)

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if(height < 0 || height === '' || isNaN(height) ){
    result.innerHTML = `Please enter valid height value ${height}`
  }else if(weight < 0 || weight === '' || isNaN(weight) ){
    result.innerHTML = `Please enter valid weight value ${weight}`
  }else{
    const bmi = (weight / ((height*height) / 10000).toFixed(2))
    result.innerHTML = `BMI: ${bmi}`
    const bmiInfo = document.createElement('h1')
    if(bmi < 18.6){
      bmiInfo.innerHTML = `Your are under weight.`
      result.appendChild(bmiInfo)
    } else if(bmi > 18.6 && bmi < 24.9){
      bmiInfo.innerHTML = `Normal`
      result.appendChild(bmiInfo)
    }else{
      bmiInfo.innerHTML = `Over Weight`
      result.appendChild(bmiInfo)
    }
  } 
  
})

```

# project 3
```
const clock = document.getElementById('clock')

//console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```

# Project 4
```
let randomNumber = Math.floor(Math.random()*100) + 1;
console.log(randomNumber)

const guessInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const form = document.querySelector(".form");

const remainingChance = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi")
let guesses = document.querySelector(".guesses");

const resultParse = document.querySelector(".resultParas");

let playGame = true;

let currentChance = 1;
let arrChance = [];

let p = document.createElement('p');
let startNewGame;


form.addEventListener('submit', function(e){
  e.preventDefault();
  validate(parseInt(guessInput.value));
})

function validate(num) {
  if (isNaN(num)) {
    console.log("Please enter a valid number");
  } else if (num < 1 || num > 100) {
    console.log("Please enter a number between 1 and 100");
  } else {
    checkcondition(num);
  }
}

function checkcondition(number){
  if(number === randomNumber){
    displayMessage( `congrats! you guess the random number ${randomNumber}`);
    endGame()
  }else if(arrChance.length == 10){
    displayMessage(`Game Over random number ${randomNumber}`)
    endGame()
  }else if(number > randomNumber){
    displayMessage(`your number is tooo high`)
    guessInput.value = ''

  }else if(number < randomNumber){
    displayMessage(`your number is tooo low`)
    guessInput.value = ''
    
  }
}



function displayMessage(message){
  p.innerHTML = `${message}`
  form.appendChild(p)
  arrChance.push(guessInput.value)
  guesses.innerHTML = arrChance;
  remainingChance.innerHTML = remainingChance.textContent - 1;
}

function endGame(){
  guessInput.value = ''
  startNewGame = document.createElement('h6');
  startNewGame.innerHTML = 'start New Game'
  resultParse.appendChild(startNewGame)
  guessInput.disabled = true;
  playGame = false;
  startNewGame.addEventListener('click', newGame)
}

function newGame(){
  randomNumber = Math.floor(Math.random()*100) + 1;
  console.log(randomNumber)
  arrChance = [];
  currentChance = 1;
  remainingChance.innerHTML = 10
  form.removeChild(p);
  resultParse.removeChild(startNewGame)
  guessInput.disabled = false;
  playGame = true;
}


```


# Project 5
```
const insert = document.querySelector("#insert")

document.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
    <th>altKey</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    <td>${e.altKey}</td>
  </tr>
</table>
  `
})

```

# Project 6
```
const stop = document.querySelector("#stop")
const start = document.querySelector("#start")
const h1 = document.querySelector("hi");

const randomColor = function() {
  let hex = '0123456789ABCDEF'
  let color = "#"
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  console.log(color)
  return color
}
let intervalId;
const startChangingColor = function(){
  
  if(!intervalId){
    intervalId = setInterval(function(){
        document.querySelector('body').style.background = randomColor()
      }, 1000)
    }

  
}

const stopChangingColor = function() {
  clearInterval(intervalId);
  intervalId = null;
}
start.addEventListener('click', startChangingColor)
stop.addEventListener('click', stopChangingColor)
```