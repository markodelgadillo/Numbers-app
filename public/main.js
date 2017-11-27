function renderFact(fact) {
  console.log(fact) // checking for the parameter being passed
  const $fact = document.querySelector('#result')
  const factContent = document.querySelector('#content')
  factContent.textContent = fact

  return $fact
}

const $button = document.querySelector('button')

$button.addEventListener('click', function(event) {
  console.log('Checking button click') // testing for click event
  const numberInput = document.querySelector('#number')
  console.log(numberInput.value) // testing the value input
  const number = numberInput.value // captures the value of the input field
  fetch('/number/' + number) //fetching with the /number path and adding the value of the requested number
    .then(res => res.json()) //gets a promise back in json
    .then(res => renderFact(res.text)) //passes the json as text to the renderFact function

  event.preventDefault()
})
