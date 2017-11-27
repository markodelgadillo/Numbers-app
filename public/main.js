// rendering the dom elements
function renderFact(randomFact) {
  const fact = document.querySelector('#result')
  const factContent = document.createElement('span')
  factContent.textContent = randomFact

  fact.appendChild(factContent)

  return fact
}

const getFact = function() {}

const showFact = function() {}

const $button = document.querySelector('#button')
const $fact = document.querySelector('#result')
const $factContent = document.querySelector('#fact')

$button.addEventListener('click', function(event) {
  console.log('Checking button click')
  event.preventDefault()
  const numberInput = document.querySelector('#numberInput')
  console.log(numberInput.value)
  const number = numberInput.value
  fetch('/numbers/' + number).then(res => res.json())
})
