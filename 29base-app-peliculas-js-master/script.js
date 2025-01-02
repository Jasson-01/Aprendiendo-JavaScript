document.getElementById("searchInput").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const movie = document.getElementById("searchInput").value;
        if (movie) {
            searchMovies(movie);
        }
    }
})


document.getElementById("searchButton").addEventListener("click", searchMovies)

// let api_key = "99dcf44c868cad4b938163aa645e6972"
let urlBase = "https://api.themoviedb.org/3/search/movie"
let urlImg = "https://image.tmdb.org/t/p/w200"

let resultContainer = document.getElementById("results")


function searchMovies() {
    resultContainer.innerHTML = "Cargando... "
    let searchInput = document.getElementById("searchInput").value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results)) 

}


function displayMovies(movies){
    resultContainer.innerHTML = ""
    
    if(movies.length === 0){
        resultContainer.innerHTML  = "<p> No se encontraron resultados para tu busqueda</p>"
        return // Lo ponemos para que salga de "displayMovies"
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")
        movieDiv.style.backgroundColor = "rgb(227, 232, 243)"


        let title = document.createElement("h2")
        title.textContent = movie.title

        let releaseDate = document.createElement("p")
        releaseDate.innerHTML = "La fecha de lanzamiento fue: <b>"  + movie.release_date + "</b>" 

        
        // reseña
        let overview = document.createElement("p")
        overview.textContent = movie.overview

        let  posterPath = urlImg + movie.poster_path
        let poster = document.createElement("img")
        poster.src = posterPath

        let popularity = document.createElement("p")
        popularity.textContent = "Popularity: " + movie.popularity

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)
        movieDiv.appendChild(popularity)

        resultContainer.appendChild(movieDiv)

    });
}
























