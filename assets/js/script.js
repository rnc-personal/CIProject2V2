//API 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58b0219670380f0425dd7bec4738e064&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=58b0219670380f0425dd7bec4738e064&query="'                 //note the space in readme

// defining some generic elements to use
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//Using a promise to only display results when we have the data back
//reference: https://dmitripavlutin.com/javascript-fetch-async-await/

/**
 *
 *  Gets the results when data is returned and turns it into JSON data */
async function findFilms(url) {
    const results = await fetch(url)
    const filmData = await results.json()

    buildResults(filmData.results)
}

/**
 * Primary FUnction of the app, loops through the return results from findMovies() and creates a card for each results, with the data
 */
function buildResults(films) {
    for (let film of films) {
        let film = ['title', 'poster_path', 'vote_average', 'overview']

        //Create cards for each result
        const filmCard = document.createElement('div')
        filmCard.classList.add('film-card')

        main.appendChild(filmCard)
    }
}

form.addEventListener('submit',function(e){
    //Using preventDefault as we want to submit the search terms but not have the page reload
    e.preventDefault()
    console.log('submitted')

    searchInput = search.value
    console.log(searchInput)

    if(searchInput) {
        findFilms(SEARCH_API + searchInput)
        search.value = ''                                           // Clearing the search value after a submissions
        // main.innerHTML = `<h1>${SEARCH_API + searchInput}</h1>`
    } else  {
        window.location.reload()
    }
})