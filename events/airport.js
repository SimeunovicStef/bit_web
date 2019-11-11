function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + ' ' + this.surname;
    }
}

function Seat(number, category) {
    this.number = number;
    this.category = category;

    this.getData = function () {
        return 'seat: ' + this.number + ', ' + this.category + ' class';
    }
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
        return this.person.getData() + '\n' + this.seat.getData()
    }
}

var pera = new Person('Pera', 'Peric');
var zika = new Person('Zika', 'Zikic');

var a1 = new Seat(1, 'first');
var a2 = new Seat(2, 'first');

var p1 = new Passenger(zika, a1);

var res = p1.getData();
console.log(res);