document.querySelector('.clicker').addEventListener('click', addEventOnClick)

function addEventOnClick() {
    var filmData = collectionFormData()
    if (!document.querySelector('.titlefield').value || !document.querySelector('.lenghtfield').value) {
        document.querySelector('.error').textContent = "Enter title and length!!!"
    }
    else {

        var filmInstance = new Movie(filmData)
        var listItem = document.createElement('li')
        listItem.textContent = filmInstance.getDataMovie();
        document.querySelector('.list').append(listItem)
        var totalDuration = totalDuration(list)
        document.querySelector('.totalDuration').textContent = totalDuration

    }
}

function collectionFormData() {
    var inputTitle = document.querySelector('.titlefield').value
    var inputLength = document.querySelector('.lenghtfield').value
    var inputGenre = document.querySelector('.genre').value

    var filmData = {
        title: inputTitle,
        length: inputLength,
        genre: inputGenre,

    }
    return filmData;
}

class Film {
    constructor(filmData) {
        this.title = filmData.title
        this.length = filmData.length
        this.genre = new Genre(filmData.genre)
    }
    getDataMovie() {
        return `${this.title}, duration:${this.length}, genre:${this.genre.getDataGenre()}`

    }

}
class Genre {
    constructor(name) {
        this.name = name
    }
    getDataGenre() {
        return `${this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase()}`
    }
}
var list = []
function addFilmToList(filmInstance) {
    list.push(filmInstance)
    return list
}
var totalDuration = 0;
function totalDuration(list) {
    for (var i = 0; i < list.length; i++) {
        totalDuration = parseInt(list[i].length)
    }
    return totalDuration
}