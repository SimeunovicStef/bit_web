
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

    var link = ["https://rusregister.ru/wp-content/uploads/2018/11/lesnaya-sertifikatsiya.jpg", "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://www.setaswall.com/wp-content/uploads/2017/03/Road-Top-View-Grass-Wallpaper-2560x1600.jpg"]
    var body = $('body')
    var div = $("<div>")

    for (var i = 0; i < link.length; i++) {
        slika = $("<img>").attr("src", link[i])
        var duzina = Math.floor(Math.random() * 400) + 200
        slika.css("width", duzina)

        div.append(slika)
        if (duzina < 300) {
            slika.css("border", "5px solid red")

        }




    }

    body.append(div)


});

