//API 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58b0219670380f0425dd7bec4738e064&page=1'
const TRENDING_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=58b0219670380f0425dd7bec4738e064&page=1'
const LATEST_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=58b0219670380f0425dd7bec4738e064'
const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=58b0219670380f0425dd7bec4738e064&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=58b0219670380f0425dd7bec4738e064&query="' //note the space in readme

// defining some generic elements to use
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const trendingSection = document.querySelector('.trending')
const newReleases = document.querySelector('.new-releases')

let loadPoint1 = window.pageYOffset || document.documentElement.scrollTop;
console.log(loadPoint1)

//Make an initial call to results function so the page is not blank - returns most popular results
//Results depend on page

if (window.location.pathname == '/index.html') {
    document.body.style.cssText = "height:1300px"
    

//******
//Home Hero Slides
//******
const slides = document.querySelectorAll('.slide')

//Looping through slide elements to form an array and set their position
slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${idx * 100}%)`;
});

//Slider Animation
let currentSlide = 0;
let maxSlides = slides.length - 1

const prevSlide = document.querySelector('.btn-prev')
const nextSlide = document.querySelector('.btn-next')

// Next Control - On clicking the controls, update the slide: 
nextSlide.addEventListener('click', function () {
    if (currentSlide === maxSlides) {
        currentSlide = 0
    } else {
        currentSlide++
    }

    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
    })
})

// Prev Control - On clicking the controls, update the slide if its not the first one: 
prevSlide.addEventListener('click', function () {
    if (currentSlide === 0) {
        currentSlide = 0
    } else {
        currentSlide--
    }

    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
    })
})

//Called here so the below event listeners can apply to the loaded cards
findFilms(TRENDING_URL)

//////////////////////////////////////////////////
//******
//Home Cards
//******

document.addEventListener('DOMContentLoaded', function() {
    let cards = document.querySelectorAll('.trending .film-card')
    let nextBtn = document.querySelector('.promo-card-next')
    let prevBtn = document.querySelector('.promo-card-prev')
    let slideIncrement = -80

    nextBtn.addEventListener('click', () => {
        console.log('click')
        trendingSection.style.cssText = `left:${slideIncrement}px`
    })

    prevBtn.addEventListener('click', () => {
        console.log('click')
        trendingSection.style.cssText = `right:${slideIncrement}px`
    })
})

} else {
    findFilms(UPCOMING_URL)
}

//Using async to only display results when we have the data back
//reference: https://dmitripavlutin.com/javascript-fetch-async-await/

/**
 * Gets the results when data is returned and turns it into JSON data.
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
        main.innerHTML = ''
    }

    // Destructuring the response (see notes/references)
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
        //Conditionally appends different cards depending on page.
        if (window.location.pathname === '/index.html') {
            trendingSection.appendChild(filmCard)
        } else if (window.location.pathname === '/search.html') {
            main.appendChild(filmCard)
        }
    })
}

/**This applies a class dynamically based on the score value returned for the API
 * The 'vote' parameter will receive the 'vote_average' data from the buildResults function/data
 */

function applyScoreClass(vote) {
    if (vote >= 8) {
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

    const searchInput = search.value

    if (searchInput) {
        findFilms(SEARCH_API + searchInput)
        // Clearing the search value after a submissions
        search.value = ''
    } else {
        window.location.reload()
    }
})