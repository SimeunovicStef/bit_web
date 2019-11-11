var run1 = 0;
var run2 = 100;
var charge = addEventListener("keydown", function (e) {
    if (e.which === 39) {
        var a = document.querySelector("#active");
        var b = document.querySelector("#inactive");
        var b1 = document.querySelector("#bg1");
        var b2 = document.querySelector("#bg2");
        a.className = "active";
        b.className = "inactive";
        if (run2 === 0) {
            run1 = 0;
            run2 = 100;
        } b1.style.left = run1-- + "%";
        b1.style.left = run2-- + "%";
    }
    else if (e.which === 37) {
        var a = document.querySelector("#active");
        var b = document.querySelector("#inactive");
        var b1 = document.querySelector("#bg1");
        var b2 = document.querySelector("#bg2");
        a.style.transform = "scaleX(-1)";
        a.className = "active";
        b.className = "inactive";
        if (run1 === 0) {
            run1 = -100;
            run2 = 0;
        }
        b1.style.left = run1++ + "%";
        b1.style.left = run2++ + "%";
    }
});

var incharge = addEventListener("keyup", function (e) {
    if (e.which === 39) {
        var a = document.querySelector("#active");
        var b = document.querySelector("#inactive");
        b.className = "active";
        a.className = "inactive";
    } else if (e.which === 37) {
        var a = document.querySelector("#active");
        var b = document.querySelector("#inactive");
        a.style.transform = "scaleX(1)";
        b.className = "active";
        a.className = "inactive";
    }
});

