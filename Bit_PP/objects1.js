"use strict"

var student = {
    name: 'Pera',
    age: 21,
    gender: 'Male'
};

console.log(student);

var ageless = {
    title: 'Thanatos',
    print: function (a) {
        return 510 + a;
    }
}
console.log(ageless.print(1))



var ageless = {
    world: 'Earth',
    title: 'Thanatos',
    getFormattedComment: function () {
        return ageless.world + " " + ageless.title;
    }
}

console.log(ageless.getFormattedComment())


var comment = {
    world: 'Earth',
    title: 'Thanatos',
    getFormattedComment: function () {
        return this.world + " " + this.getFormattedComment;
    }
}

console.log(comment.getFormattedComment())


window.console.log(false)

window.navigator