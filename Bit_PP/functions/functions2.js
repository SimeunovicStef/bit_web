// 1. Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function str(a) {


    if (typeof (a) === 'string') {
        res = 'true';
    }
    else {
        res = 'false';
    }
    return res;
}


console.log(str(521));


/*2 Zadatak. Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
 */


function str(res) {

    if (res === 'string') {
        if (res.length !== 0) {
            c = "false";
        }
        else {
            c = "true";
        }
    } else {
        c = "not string";
    }
    return c;
}
console.log(str(""));

/* 3. Zadatak. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
 */

function conc(a, b) {
    for (var i = 0; i < b; i++) {
        a = a + a;
        i++;
    }
    return a;
}
console.log(conc("ha", 2));


/* Zadatak 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
 */

function count(a, b) {
    c = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            c++;
        }
    }
    return c;
}

console.log(count("nikolinanikolic", 'n'));

/* Zadatak 5. Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
 */


function finder(a, b) {
    c = -1;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            c = i + 1;
            break;
        }

    }
    return c;
}

console.log(finder("joowelena", "e"));

// 6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function finder(a, b) {
    c = -1;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            c = i + 1;

        }

    }
    return c;
}

console.log(finder("joowelena", "e"));


// 7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

function string(a) {
    c = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            c[c.length] = null;


        }
        else {
            c[c.length] = a[i]
        }
    }
    return c;


}

console.log(string("aston martin 1"));
// Zadatak 8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function prime(a) {

    c = 0;
    x = "false";
    for (var i = 0; i < 10; i++) {
        if (a % 1 === 0 && a % a === 0) {
            c = c++;
            if (c === 2);
            d = "true";
        }


    }
    return c;
}
console.log(prime());