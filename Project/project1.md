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