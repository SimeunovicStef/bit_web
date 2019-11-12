
// $(function () {

//     console.log("Hello world");
//     $('h3').toggleClass('red');
//     $('li:first').toggleClass('border')
//     var str = $("li").text();

//     $("li ").toggleClass('txt');

//     $('li.active').toggleClass('font1')
//     $("li.active").toggleClass('bgc')
// })



$(function () {

    var link = ['https://i.stack.imgur.com/RxMjZ.png', 'https://en.wikipedia.org/wiki/Portal:Gardening/Selected_picture/7#/media/File:Crops_Kansas_AST_20010624.jpg'];
    var slika = $("<img>").attr('src')

    for (i = 0; i < link.length; i++) {
        slika[i] = link[i];
    }

});