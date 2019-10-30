/*Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values. Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/
"use strict";

var array = ["1", "21", undefined, "42", "1e+3", Infinity, NaN];
var result = [];

for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
        result[result.length] = parseFloat(array[i]);
    }
}

console.log(result);

/*Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247” */

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = "";

for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && (!(isNaN(array[i]))) && (array[i] !== null) && (array[i] !== undefined)) {
        result += array[i];
    }
}

console.log(result);

/* Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47] */

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = [];

for (var i = 0; i < array.length; i++) {
    if (array[i]) {
        result[result.length] = array[i];
    }
}

console.log(result);

/* Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3 */

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
result = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] === parseInt(a[i])) {
        result++
    }
}
console.log(result);

/* Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
result = 0;

function isInteger(a) {
    return (a === parseInt(a));
}


for (var i = 0; i < a.length; i++) {
    if (a[i] === parseFloat(a[i]) && !isInteger(a[i])) {
        result++
    }
}
console.log(result);