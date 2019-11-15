'use strict'

class Genre {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        return `${this.name[0].toUpperCase()}${this.name[this.name.length - 1].toUpperCase()}`

    }
}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;
    }
    getInfo() {
        return `${this.title}${this.length}min, ${new Genre(this.genre).getInfo()}`
    }
}

class Program {
    constructor(date) {
        this.date = date;
    }
    getInfo() {
        return `${this.date}`
    }
}

var button = document.querySelector('button.movie');
button.addEventListener('click', getMovieInfo);

var totalMinutes = 0;
var listOfMovies = [];
var listOfPrograms = [];

function getMovieInfo() {
    var title = document.querySelector('input.title').value
    var length = document.querySelector('input.length').value
    var genre = document.querySelector('select.genre').value

    var movie = new Movie(title, length, new Genre(genre).getInfo());
    var movieInfo = movie.getInfo();


    var valid = validateInput(movieInfo);
    function validateInput() {
        if (!movie.title) {
            document.querySelector('.error').textContent = "Please input movie title!"
            return false;
        }
        else if (!movie.length) {
            document.querySelector('.error').textContent = "Please input movie length!"
            return false;
        }
        else {
            return true;
        }
    }
    if (valid) {
        var indexMovies = listOfMovies.push(movieInfo);

        var listItem = document.createElement('li');
        listItem.textContent = movieInfo;
        document.querySelector('ul.moviesDisplayList').appendChild(listItem);
        var listOption = document.createElement('option');
        listOption.setAttribute('value', indexMovies);
        listOption.textContent = movieInfo;
        document.querySelector('select.movie').appendChild(listOption)
        document.querySelector('input.title').value = "";
        document.querySelector('input.length').value = "";
        totalMinutes += movie.length;
        var displayMinutes = document.querySelector('p');
        displayMinutes.textContent = `total length of movies ${totalMinutes} minutes`
        document.querySelector('.error').textContent = ""
    }
};

var buttonProgram = document.querySelector('button.program');
buttonProgram.addEventListener('click', getProgramInfo);


function getProgramInfo() {
    var date = document.querySelector('input#date').value;
    var program = new Program(date);
    var programInfo = program.getInfo();
    var listProgramOption = document.createElement('option');
    // var indexProgram = listOfPrograms.push(programInfo);
    // listProgramOption.setAttribute('value', indexProgram)
    listProgramOption.textContent = programInfo;
    document.querySelector('select.program').appendChild(listProgramOption);

}

var buttonMovieToProgram = document.querySelector('button.addMovie');
buttonMovieToProgram.addEventListener('click', movieProgram);


function movieProgram() {
    var movie = document.querySelector('select.movie').value;
    var program = document.querySelector('select.program').value;
    // var movieObject = listOfMovies[movie]
    // var programObject = listOfPrograms[program]

    var result = document.createElement('li');
    result.textContent = movie + program;
    document.querySelector('ul.programDisplayList').appendChild(result);
}