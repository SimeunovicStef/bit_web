



function Genre(name) {

    this.genre = genre;

    this.getData = function () {
        return this.name.charAt(0) + this.name.charAt([name.length - 1]).toUpperCase();

    }

}

function Movie(title, length, genre) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return this.title + "," + this.length + "," + this.genre.getData();
    }

}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNumberOfMovies = this.listOfMovies;

    this.addMovie = function (Movie) {
        return this.listOfMovies.push(movie);

    }
    this.getData = function () {
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.date + "," + "program duration" + this.getProgramLength + "min" + this.listOfMovies[i];
            movie.getData();
        }
        this.getProgramLength = function () {
            var totalLength = 0;
            for 
}
    }


    function createMovie(title, length, genre) {
        var zanr = new Genre(genre)
        return new Movie(title, length, zanr);


    }

    function createProgram(datum) {
        return Program(datum);
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = 0;

        this.addProgram = function (program) {
            return this.listOfPrograms.push(program);
        }

        this.getData = function () {

            for (var i = 0; i < this.listOfPrograms.length; i++) {
                var program = this.listOfPrograms[i];
                program.getData();

            }
        }
    }



    var p1 = new Festival(datum1, mov1);

    var datum1 = new createProgram('24.11.2018');
    var datum2 = new createProgram('25.11.2018');

    var mov1 = new createMovie('Spider-Man: Homecoming,', '133min', 'Action');
    var mov2 = new createMovie('Planet of the Apes', '143min', 'Documentary');
    var mov3 = new createMovie('Batman Begins', '160min', 'Action');
    var mov4 = new createMovie('Interstellar', '203min', 'Science-Fiction');

    console.log(p1.getData())


    // Primer sa casa




    function Genre(name) {
        this.name = name

        this.getData = function () {
            return "Genre:" + name
        }
    }

    function Movie(title, length, genre) {
        this.title = title
        this.length = parseInt(length)
        this.genre = genre

        this.getData = function () {
            return this.title + " | " + this.genre.getData()
        }
    }

    function Program(date) {
        this.date = new Date(date)
        this.listOfMovies = []

        this.addMovie = function (movie) {
            if (movie instanceof Movie) {
                this.listOfMovies.push(movie)
            }
        }

        this.getProgramLength = function () {
            var totalLength = 0
            for (var i = 0; i < this.listOfMovies.length; i++) {
                var movie = this.listOfMovies[i]
                totalLength += movie.length
            }

            return totalLength
        }

        this.getData = function () {
            var output = date + ', ' + this.getProgramLength() + "min\n"
            for (var i = 0; i < this.listOfMovies.length; i++) {
                var movie = this.listOfMovies[i]
                output += movie.getData() + "\n"
            }

            return output
        }
    }

    function Festival(name) {
        this.name = name
        this.listOfPrograms = []
        this.totalMovies = 0

        this.addProgram = function (program) { // instanceof type Program

            if (program instanceof Program) {
                this.totalMovies += program.listOfMovies.length
                this.listOfPrograms.push(program)

            } else {
                console.log("Not instance of program");
            }
        }

        this.getFestData = function () {
            var output = this.name + ' has ' + this.totalMovies + ' movie titles\n'
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                var program = this.listOfPrograms[i]
                output += program.getData() + "\n"
                console.log('--------');
            }

            return output
        }
    }


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
