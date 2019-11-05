var welcomeMsg = 'Hello Javascript';
var trigger = 'Learn More!'
function element() {
    console.log(welcomeMsg + " " + trigger);
}
element();

function browsercheck() {
    console.log(window.navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.userAgent);
}
browsercheck();


function isOnline() {
    if (window.navigator.onLine == true) {
        console.log("online");
    }
    else {
        console.log('Offline');
    }
}
isOnline();

function browserInfo() {
    console.log("current width =" + screen.availHeight + ", " + "current height" + "=" + screen.availWidth);
    console.log("max height =" + screen.height);
}
browserInfo();


function siteInfo() {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.search);
}
siteInfo();

// function pageReload() {
//     window.location.reload()

// }
// pageReload(;



// function pageRedirect() {
//     window.location.href = 'https://www.orimono.eu/';
// }
// pageRedirect()

function passedData() {
    localStorage.setItem('name', 'Pera');
    localStorage.setItem('id1', 'Tom');
    localStorage.setItem('id2', "John");
}

passedData();

function getData(a) {


    if (localStorage.length == 0) {
        console.log("there is no data");

    }
    else {
        console.log(localStorage.getItem(a));
    }

}

getData('id2');

// function removeData() {
//     console.log(localStorage.clear());
// }
// removeData();



// function historyTab() {
//     console.log(history.length);
// }
// historyTab();





// var a = window.open("https://www.kls.rs/");
// console.log(a);

// function warningUser() {
//     alert('Hello chosen one!');
// }
// warningUser();

// function question() {
//     var a;
//     a = prompt('How old are you?');

//     var b = confirm("We will submit this answer " + a);

//     if (b == true) {
//         alert("Success")
//     } else {
//         alert("Stvarno si debil")
//     }
// }
// question();

// var a = window.open("https://www.google.com/");


// function foo() {
//     alert("caooooooo");
// }
// s);
// clearInterval();