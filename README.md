# PROJECT 2 - JS - FILM RATINGS APP
----------------------
![Homepage](/readme/readme-splash.png)
----------------------
##  BRIEF / USER JOURNEY 
----------------------
 WorthWatching is designed as a quick reference app to find out average scores from the most popular sources (such as Rotten Tomatoes, IMDB) in a single place, with one score and brief synopsis of the film, without having to look around for different scores on different sites or reviews. 
The home page features some initial suggests for the most popular films but the main feature is the search, linked by the search icon in the upper right corner, where users can submit a query and get score from a large database of films

----------------------
## SUMMARY OF FEATURES
-	User control over Home page elements/results

# 'Hero' Style Slider
![Home Slider](/readme/readme-slider.png)
# Results Carousel
![Home Carousel](/readme/readme-carousel.png)

-	Dynamic user search based on query
# Search results page
![Search Results](/readme/readme-search.png)

![Search Results](/readme/readme-cards.png)

![Search Results](/readme/readme-single-cards.png)

# Optimised Mobile Navigation
![Search Results](/readme/readme-mobmenu.png)
----------------------
## TESTING
-	The site has been passed through Jigsaws’ CSS validator without error
	[Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frnc-personal.github.io%2FCIProject2V2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
-	The site has been run through the w3 HTML Validator and passed without error
	[Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Frnc-personal.github.io%2FCIProject2V2%2F)

The site has been run through Lighthouse and scores as follows:

----------------------
## KEY FUNCIONALITY

- The main functionality is based around making an API call to get results
- This is done with a single async function that takes in a url and returns all of the data for that specific endpoint or a users query
- Results are then appended to the DOM with all of the HTML and data for that specific endpoint being returned in a single String Literal
- The results vary by page, which is just done with simple if / else statements depending on the current path
- The home page also make use of this feature but has an additional step in order to make the carousel work correctly (see notes on bugs). This involves waiting until the api requests is completed AND the elements have been created to turn them into an array so that it can be used to dynamically update the position of the cards container.
- The search form is done with a simple event handler on submit and users can either hit the submit button or just hit enter. Both will work
----------------------
## BUGS / ISSUES / GENERAL PROJECT PROCESS NOTES

During the process for this project, I initially had a different idea, which I spent around 1 week on.
Unfortunately, I was not happy with my progress around Nov 4th due to a serious bug that I could not work past. I got some assistance/advice from my tutor, but I still had a lot more left to do and was not confident that I could resolve that outstanding issue even after looking into it.
I made the decision to shelve the project in favour of something more straight forward that I had a bit of experience with.
The original idea is up here for reference and commit history:
     [Original Project](https://rnc-personal.github.io/CIProject2/)     |
     [Repo](https://github.com/rnc-personal/CIProject2)

### ISSUES

The 2nd project went more smoothly, however there remain a few things that I couldn’t resolve:
-	The plan was to have the home page load 3 different sets of results using different API endpoints and append them to the different sections. The request is an async function which causes issue trying to call it 3 times concurrently.
-	My tutor pointed me towards Promises.All but it isn't something I fully understand and couldn’t get this to work so I decided to cut the home page down to a single set of results.
-	However there currently still remains an issue in getting the carousel to stop when the results end.
-	I tried to re-use the code I had for the hero sliders on the home page, slightly modified. The problem with this is that the hero sliders expect a nodelist, to use the array values to increment the position of an element. When the request is made on page load, the items don't exist (or rather it returns an empty nodelist).
-	To resolve this I did try using a SetInterval to wait a short time after page load but with only partial success.
-	I had numerous issues in getting the API to work, mostly due to being unfamiliar with async functions and had to use some external resources noted in the references. I have done some tutorials and minor work with API’s in my job before but needed some more information about how to return different bits of data back from an async function. This led me to ES6 destructuring. There is an explanation of my understanding of it within the JS comments/function notation.
-	Due to some of the challenges during the project I made more use of Git Branches, only merging work in when I was satisfied that it was complete.

### UNRESOLVED ISSUES

- Although I was eventually able to get the home page carousel to work for the film results that are returned asynchronously. The end result is still a little buggy and doesn't scroll correctly once hitting end end. However it does its main job of preventing the layout from breaking.
- The translateX is done dynamically based on the current index of each card element but the calculation I am using is just off slightly and I believe it could be fixed in the future. Essentially this was noted as a minor bug and left due to time constraints.

### PLANNED FEATURES
-	I had hoped to implement an asynchronous search so that results would be generated as some one started typing their query on the search page.
-	There was a compromise made with the home page and the search icon, I had hoped to send someone to the search results page and load the query the entered on the homepage form but ran out of time before this could be properly done
-	I also looked into loading more data when someone clicks one of the cards and having it popup in a modal but combination of complexity and time meant it had to be shelved in favour of fixing bugs.
- The API is just a free/simple one and although I am not hitting any rate limits, I have noticed a few occasions where the search can take some time, which is probably normal but I would have liked to implement a loading indicator but I felt this was an edge case, as well as not having time to implement.

----------------------
### DEPLOYMENT

The site was deployed to GitHub pages following the below steps:
- In the GitHub repository, navigating to the Settings icon/page
- From the source section drop-down menu, select the Main Branch


----------------------
### CREDITS / ADDITIONAL RESOURCES

- API: https://developers.themoviedb.org/3/getting-started/introduction
    - AUTH: https://developers.themoviedb.org/3/getting-started/authentication
    - IMAGES: https://developers.themoviedb.org/3/getting-started/images

- HANDLING ASYNC DATA:
    Primary Article: https://www.dalejefferson.com/articles/2018-02-06-async-await-promise-all-array-destructuring/
        - https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
        - Additional Resources that lead me to the above:
        - https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call?noredirect=1&lq=1
- https://medium.com/sliit-foss/js-async-await-in-array-methods-9142a35c6d6f
        - https://medium.com/sliit-foss/js-async-await-in-array-methods-9142a35c6d6f
- DESTRUCTURING
- https://wesbos.com/destructuring-objects
- LOOPING OVER DATA IN ARRAYS
- https://linuxhint.com/difference-between-foreach-and-loop-javascript/

## IMAGES
-	https://unsplash.com/photos/ny-lHmsHYHk
-	https://unsplash.com/photos/SnXIF8_2oPw
-	https://unsplash.com/photos/dTLlhgeEJWg


## ICONS
-	https://loading.io/icon/
        

---------------------


