$(function () {
    var subs = ['./images/Kilo-Class_Russian_Submarine_MOD_45165129_0.jpg', './images/RTX3CFVP_0.jpg']
    var copters = ["./images/409572ae874bc9273e9a4b21b62badce.jpeg", "./images/BC17E7DB-AB7E-48FD-8E37-C8834344984F_cx0_cy7_cw0_w1023_r1_s.jpg", "./images/mi-171a2_kbo17_3.jpg"]
    var body = $('body')
    var div1 = $("<div>")
    var div2 = $("<div>")
    // body.append(div1)
    // slika = $("<img>").attr("src", subs[1])
    // div1.append(slika, slika)

    for (var i = 0; i < subs.length; i++) {
        var slika = $("<img>").attr("src", subs[i])
        div1.append(slika)
        $('<img>').width('300px');
    }
    body.append(div1)

    for (var i = 0; i < copters.length; i++) {
        var slika1 = $("<img>").attr("src", copters[i])
        div2.append(slika1)
    }
    body.append(div2)

});