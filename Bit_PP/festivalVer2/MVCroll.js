'use strict'
const dataResolve = (function () {
    const data = {
        totalMinutes: [],
        movies: [],
        programs: []
    }

    function Movie(name, length, genre) {
        this.name = name
        this.length = length
        this.genre = genre
    }

    Movie.prototype.getInfo = function () {
        return this.name + ", " + this.length
    }
    function createMovie(name, length, genre) {

        return new Movie(name, length, genre)
    }
    function addMovie(movie) {
        data.movies.push(movie)

    }
    return {
        createMovie: createMovie,
        addMovie: addMovie
    }
})()

const uiModule = (function () {
    const $title = document.querySelector('input.title')
    const $length = document.querySelector('input.length')
    const $genre = document.querySelector('select.genre')
    const $movieList = document.querySelector('ul.programDisplayList')

    function getTitle() {
        return $title.value
    }
    function getGenre() {
        return $genre.value
    }

    function collectFormInput() {
        const movieTitle = $title.value
        const movieLength = $length.value
        const movieGenre = $genre.value

        return {
            title: movieTitle,
            genre: movieGenre,
            length: movieLength
        }
    }

    function displayMovie(movie) {
        $movieList.innerHTML += movie.getInfo() + "<br/>"
    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie
    }
})()

const controller = (function (uiModule, data) {

    const $addMovie = document.querySelector("button.movie")
    $addMovie.addEventListener('click', function (event) {

        const movieObj = uiModule.collectFormInput()
        console.log(movieObj);

        const movieInstance = data.createMovie(movieObj.title, movieObj.length,
            movieObj.genre)
        console.log(movieInstance);

        data.addMovie(movieInstance)

        uiModule.displayMovie(movieInstance)
    })

    // const $addDate = document.querySelector('button.program');
    // $addDate.addEventListener('click', function (event) {




    //     const $addMovieBtn = document.querySelector('button.addMovie');
    //     $addMovieBtn.addEventListener('click', onAddMovieClick)

    //     function onAddMovieClick(event) {
    //         console.log("onAddMovieClick");

    //         const { titleStr, lengthStr, genreStr } = uiModule.collectFormInput()

    //         const allMovies = data.createAndAddMovie(movieData)



    //         console.log(allMovie);
    //         uiModule.displayMovies(allMovies)
    //     }
    // }
    // })

})(uiModule, dataResolve)