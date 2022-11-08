//API 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58b0219670380f0425dd7bec4738e064&page=1'
const TRENDING_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=58b0219670380f0425dd7bec4738e064&page=1'
const LATEST_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=58b0219670380f0425dd7bec4738e064'
const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=58b0219670380f0425dd7bec4738e064&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=58b0219670380f0425dd7bec4738e064&query="'  //note the space in readme


// defining some generic elements to use
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const trendingSection = document.querySelector('.trending')
const newSection = document.querySelector('.new-releases')
const upcomingSection = document.querySelector('.upcoming')


//Make an initial call to results function so the page is not blank - returns most popular results
console.log(window.location.pathname)
if (window.location.pathname == '/index.html') {
    findFilms(TRENDING_URL)
    // findFilms(LATEST_URL) // Issue running this 3 times at once. setInterval doesnt work
    // findFilms(UPCOMING_URL)
} else {
    findFilms(UPCOMING_URL)
}

//Using a promise to only display results when we have the data back
//reference: https://dmitripavlutin.com/javascript-fetch-async-await/

/**
 *
 *  Gets the results when data is returned and turns it into JSON data.
 * the url parameter is passed the full SEARCH_API + searchInput (the users request) to make a complete fetch request.
 * The results are then passed into the buildResults functions (films) parameter with the response, which is a JSON object. */
async function findFilms(url) {
    const res = await fetch(url)
    const data = await res.json()

    buildResults(data.results)
}

/**
 * Primary Function of the app, loops through the return results from findMovies() and creates a card for each results, with the data
 */
function buildResults(films) {

if (window.location.pathname === '/search.html') {
    //clears the default results when a search request is submitted and this function is called.
        main.innerHTML= ''
    }
    
    films.forEach((film) => {
        const {
            title,
            poster_path,
            vote_average,
            overview
        } = film

        //The data and the response are both objects so the properties we want to use are defined here (using their names in the object/API docs)
        //A 'film' is made up of those specific object properties and can be used to output the data.
        //The loop returns the next set of data and will apply the specific data to that card below:

        const filmCard = document.createElement('div')
        filmCard.classList.add('film-card')

        //Filling Card with the data that is returned
        filmCard.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="film-info">
                <h3>${title}</h3>
                <span class="${applyScoreClass(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>
        `
        //Create cards for each result. Additional closing div to close the one created in line 42
        // TO DO, Conditionally append to different sections. Main for search page. Different Sections
        if (window.location.pathname === '/index.html') {
            trendingSection.appendChild(filmCard)

            // newSection.appendChild(filmCard)
            // upcomingSection.appendChild(filmCard)
        } else if (window.location.pathname === '/search.html') {
        main.appendChild(filmCard)
        }
    })
}

/**This applies a class dynamically based on the score value returned for the API
 * The 'vote' parameter will receive the 'vote_average' data from the buildResults function/data
 */

function applyScoreClass(vote) {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', function (e) {
    //Using preventDefault as we want to submit the search terms but not have the page reload
    e.preventDefault()
    console.log('submitted')

    const searchInput = search.value
    console.log(searchInput)

    if (searchInput) {
       findFilms(SEARCH_API + searchInput)

        search.value = '' // Clearing the search value after a submissions
    } else {
        window.location.reload()
    }
})