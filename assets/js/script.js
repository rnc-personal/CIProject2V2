// defining some generic elements to use
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const test = document.querySelector('.test')


console.log(test)


test.addEventListener('click', function() {
  
    const card = document.createElement('div')
    card.classList.add('card-test');
    main.appendChild(card)

})