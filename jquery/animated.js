$(function () {
    var link1 = "./images/sub1.jpg";
    var link2 = "./images/sub2.jpg";
    var link3 = "./images/sub3.jpg";
    var link4 = "./images/copter1.jpg";
    var link5 = "./images/copter2.jpg";
    var link6 = "./images/copter3.jpg";
    var subs = [link1, link2, link3, link4, link5, link6];
    var $div = $('div');



    for (var i = 0; i < subs.length; i++) {
   var randomWidth = Math.floor(Math.random()*300) + 100;

   var $image = $('<img>')
   .attr("src", subs[i])
   .width(randomWidth)

   $div.append($image)
    }
    $('body').append($div);
    var addingBorder = true;
    $('img').each(function (i, image) {

        if (addingBorder && w<300) {
        image.style.border = '10px solid black'
        
    }
        else {
            addingBorder = false;
        }
}()



    // var body = $('body')
    // var div1 = $("<div>")
    // var div2 = $("<div>")
    // // body.append(div1)
    // // slika = $("<img>").attr("src", subs[1])
    // // div1.append(slika, slika)

    // for (var i = 0; i < subs.length; i++) {
    //     var slika = $("<img>").attr("src", subs[i])
    //     div1.append(slika)
    //     $('<img>').width('300px');
    // }
    // body.append(div1)

    // for (var i = 0; i < copters.length; i++) {
    //     var slika1 = $("<img>").attr("src", copters[i])
    //     div2.append(slika1)
    // }
    // body.append(div2))
