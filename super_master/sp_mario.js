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

// var $marioRunning = document.querySelector("#active");
// var $mario = document.querySelector("#inactive");
// var $background = document.querySelector(".main");

// var backgroundPosition = 0;
// var marioRunning = null;

// var game = {
//     bg: 0,
//     marioRunning: null
// };

// function stopMario() {
//     $marioRunning.className = "inactive";
//     $mario.className = "active";

//     clearInterval(marioRunning);

//     marioRunning = null;
// }

// function runMarioRun(speed) {
//     $marioRunning.className = "active";
//     $mario.className = "inactive";

//     marioRunning = setInterval(function () {
//         backgroundPosition -= speed;
//         $background.style.backgroundPositionX = backgroundPosition + "px";
//     }, 100)
// }

// addEventListener("keydown", function (e) {
//     if (e.which === 39 && !marioRunning) {
//         runMarioRun(10);
//     } else if (e.which === 37 && !marioRunning) {
//         runMarioRun(-10);
//         $marioRunning.style.transform = "scaleX(-1)";
//     }
// });

// addEventListener("keyup", function (e) {
//     if (e.which === 39 && marioRunning) {
//         stopMario();
//     } else if (e.which === 37 && marioRunning) {
//         stopMario();
//         $marioRunning.style.transform = "scaleX(1)";
//     }
// });



// ZASTITA ZA KOD:


// $(function() {
//     // Handler for .ready() called.
//     // 3.* versions
//     }); 
