// defining some generic elements to use
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const test = document.querySelector('.test')

//Test for Event handling/Generating element
test.addEventListener('click', function() {
  
    const card = document.createElement('div')
    card.classList.add('film-card');
    main.appendChild(card)

})