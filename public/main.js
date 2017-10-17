/*
function renderFact (text) {
  const fact = document.querySelector('#result')
  const factContent = document.createElement('span')
  factContent.textContent = text

  fact.appendChild(factContent)

  return fact
}

const getFact = function (number) {
  let fact = ''
    if(number !== ''){
      number = parseInt(number)
      console.log(number)
        fetch("http://numbersapi.com/"+ number)
        .then(res => res.text())
        .then(data => {
          console.log(data)
          return fact = data
        })
        .catch(function(err) {
           console.log(err)
         })
    }
}

const showFact = function () {
  getFact()
  .then(fact => {
    renderFact(fact)
  })
}
*/
const button = document.querySelector('#button')
const fact = document.querySelector('#result')
const factContent = document.querySelector('#fact')

button.addEventListener('click', function (event) {
  console.log('Checking button click')
  event.preventDefault()
  const numberInput = document.querySelector('#numberInput')
  console.log(numberInput.value)
  const number = numberInput.value
  if(number !=='') {
  // const factForm = new FormData(document.querySelector('#number'))
  fetch('http://numbersapi.com/' + number)

  .then(res => res.text())
  .then(info => {
    factContent.textContent = info
    console.log(info)
  })
  }
})
