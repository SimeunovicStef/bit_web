



function Genre(name) {

    this.name = name;

}
Genre.prototype.getData = function () {
    return this.name.charAt(0) + this.name.charAt([this.name.length - 1]).toUpperCase();
}

function Movie(title, length, genre) {
    this.title = title;
    this.genre = genre;
    this.length = parseInt(length);
}
Movie.prototype.getData = function () {
    return this.title + "," + this.genre.getData() + "," + this.length + "min";
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];

}

Program.prototype.addMovie = function (movie) {
    return this.listOfMovies.push(movie);
}

Program.prototype.getData = function () {
    var out1 = this.date + "," + this.getProgramLength() + "min\n"
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i];
        out1 += movie.getData();
    }
    return out1;
}

Program.prototype.getProgramLength = function () {
    var totalLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i]
        totalLength += movie.length;
    }
    return totalLength;
}


function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalMovies = 0;


}

Festival.prototype.addProgram = function (program) {
    this.totalMovies += program.listOfMovies.length
    return this.listOfPrograms.push(program);
}

Festival.prototype.getData = function () {
    var out1 = this.name + ' has ' + this.totalMovies + 'titles:\n'
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        var program = this.listOfPrograms[i];
        out1 += program.getData() + "\n";

    }
    return out1;
}

function createMovie(title, length, genre) {
    var genre = new Genre(genre)
    return new Movie(title, length, action);


}

function createProgram(datum) {
    return new Program(datum);
}


var action = new Genre('Action');
var drama = new Genre('Drama');
var documentary = new Genre('Documentary');


var fest1 = new Festival("MidSummer");

var midSummer1 = new Program('24.06.2018');
var midSummer2 = new Program('25.06.2018');


var mov1 = new Movie('Spider-Man: Homecoming,', '133min', action);
var mov2 = new Movie('Planet of the Apes', '143min', documentary);
var mov3 = new Movie('Batman Begins', '160min', action);
var mov4 = new Movie('Interstellar', '203min', drama);



midSummer1.addMovie(mov1)
midSummer1.addMovie(mov2)

midSummer2.addMovie(mov3)
midSummer2.addMovie(mov4)

fest1.addProgram(midSummer1)
fest1.addProgram(midSummer2)


console.log(fest1.getData());



String.prototype.print = function () {
    console.log(this.toString());
}





// // Primer sa casa




// function Genre(name) {
//     this.name = name

//     this.getData = function () {
//         return "Genre:" + name
//     }
// }

// function Movie(title, length, genre) {
//     this.title = title
//     this.length = parseInt(length)
//     this.genre = genre

//     this.getData = function () {
//         return this.title + " | " + this.genre.getData()
//     }
// }

// function Program(date) {
//     this.date = new Date(date)
//     this.listOfMovies = []

//     this.addMovie = function (movie) {
//         if (movie instanceof Movie) {
//             this.listOfMovies.push(movie)
//         }
//     }

//     this.getProgramLength = function () {
//         var totalLength = 0
//         for (var i = 0; i < this.listOfMovies.length; i++) {
//             var movie = this.listOfMovies[i]
//             totalLength += movie.length
//         }

//         return totalLength;
//     }

//     this.getData = function () {
//         var output = date + ', ' + this.getProgramLength() + "min\n"
//         for (var i = 0; i < this.listOfMovies.length; i++) {
//             var movie = this.listOfMovies[i]
//             output += movie.getData() + "\n"
//         }

//         return output
//     }
// }

// function Festival(name) {
//     this.name = name
//     this.listOfPrograms = []
//     this.totalMovies = 0

//     this.addProgram = function (program) { // instanceof type Program

//         if (program instanceof Program) {
//             this.totalMovies += program.listOfMovies.length
//             this.listOfPrograms.push(program)

//         } else {
//             console.log("Not instance of program");
//         }
//     }

// this.getFestData = function () {
//     var output = this.name + ' has ' + this.totalMovies + ' movie titles\n'
//     for (var i = 0; i < this.listOfPrograms.length; i++) {
//         var program = this.listOfPrograms[i]
//         output += program.getData() + "\n"
//         console.log('--------');
//     }

//     return output
// }
// }


var nyFest = new Festival("NewYear Fest")
var nyProgramDay1 = new Program("01-01-2020")
var nyProgramDay2 = new Program("01-02-2020")

var drama = new Genre('Drama')
var comedy = new Genre('Comedy')

var batman = new Movie("Batman forever", '123', drama)
var titanik = new Movie("Titanik", '210', drama)
var homeAlone = new Movie("Home Alone", '120', comedy)

nyProgramDay1.addMovie(titanik)
nyProgramDay1.addMovie(batman)
nyProgramDay1.addMovie(homeAlone)

nyProgramDay2.addMovie(batman)
nyProgramDay2.addMovie(titanik)
// console.log(nyProgramDay1.getData());

nyFest.addProgram(nyProgramDay1)
nyFest.addProgram(nyProgramDay2)

console.log("--------------");
console.log(nyFest.getFestData());
