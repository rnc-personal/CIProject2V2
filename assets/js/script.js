// defining some generic elements to use
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const test = document.querySelector('.test')

//Test for Event handling/Generating element
// test.addEventListener('click', function() {
  
//     const card = document.createElement('div')
//     card.classList.add('film-card');
//     main.appendChild(card)

// })

form.addEventListener('submit',function(e){
    //Using preventDefault as we want to submit the search terms but not have the page reload
    e.preventDefault()
    console.log('submitted')
    searchInput = search.value
    console.log(searchInput)

    if(searchInput) {
        main.innerHTML = `<h1>${searchInput}</h1>`
    } else if (searchInput == '') {
        window.location.reload()
    }
})