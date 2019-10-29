// 1. Write a program that calculates the maximum of two given numbers
"use strict";
// function add(a, b) {
//     c = a + b;
//     return c;
// }
// var result = add(5, 9);
// console.log(result);

// 2. Write a program that checks if a given number is odd.
// var c = "";
// function odd(a) {
//     if (a % 2 === 1) {
//         a = "true";
//     } else {
//         a = "false";
//     }
//     return c = a;
// }
// var result = odd(6);
// console.log(c)

// 3. Write a program that checks if a given number is a three digit long number.
// var c = "";
// function three(a) {
//     if (a < 100 || a > 1000) {
//         a = "false";
//     } else {
//         a = "true";
//     }
//     return c = a;
// }
// var result = three(100);
// console.log(result);

// 4. Write a program that calculates an arithmetic mean of four numbers.

// function arit(a, b, c, d) {
//     t = (a + b + c + d) / (arguments.length);
//     return t;
// }
// var result = arit(1, 2, 3, 4);
// console.log(result);

// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:

// var b = '';
// function square(a) {
//     for(var i = 0; i <= a; i++){
//         var char = "* "
//         if( i!== 0 && i !==a)
//     }
// }

// 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// var d = '* ';
// var sum = "";
// var sum1 = "";
// var sum2 = "";
// function star(a, b, c) {
//     for (var i = 0; i < a; i++) {
//         sum += d;
//     }
//     for (var i = 0; i < b; i++) {
//         sum1 += d;
//     }
//     for (var i = 0; i < c; i++) {
//         sum2 += d;
//     }
//     resenje = sum + "\n" + sum1 + "\n" + sum2;
//     return resenje;
// }
// var result = star(5, 3, 7);
// console.log(result);

// 7. Write a program that calculates a number of digits of a given number.
// function digit(x) {
//     var x;
//     var c = 0;
//     while (x >= 1) {
//         x /= 10;
//         c++;
//     }
//     return c;
// }
// var result = digit(10000);
// console.log(result);

// 8. Write a program that calculates a number of appearances of a given number in a given array.
//Inputs:
// function appearances(a, e) {
// var c = 0;
// var x = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === e) {
//             c++;
//         }
//     }
//     return c;
// }
// var a = [2, 4, 7, 8, 7, 7, 1, 7];
// console.log(appearances(a, 7));

// 9. Write a program that calculates the sum of odd elements of a given array.
// var a = [];
// var c = 0;
// function odd(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 1) {
//             c += a[i];
//         }
//     }
//     return c;
// }
// console.log(odd([2, 4, 7, 8, 7, 7, 1, 3]));

/* 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
 */
// var c = .
// function letter(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === "a") {
//             var c+= i;
//         }
//     }
// }

//Function 2

// 1. Write a function to check whether the `input` is a string or not.
// function check(a) {
//     var c = "";
//     if (typeof a === "string") {
//         c = "true";
//     } else {
//         c = "false";
//     }
//     return c;
// }
// var result = check(12);
// console.log(result);

// 2. Write a function to check whether a string is blank or not.
// function check(a) {
//     var c = "";
//     if (a.length === 0) {
//         c = "true";
//     } else {
//         c = "false"
//     }
//     return c;
// }
// var result = check(" ");
// console.log(result);

// 3. Write a function that concatenates a given string n times (default is 1).
// function conc(a, b) {
//     var c = "";
//     for (var i = 0; i < b; i++) {
//         c += a;
//     }
//     return c;
// }
// var result = conc("Ha", 3);
// console.log(result);

// 4. Write a function to count the number of letter occurrences in a string.
// function count(a, b) {
//     var c = 0;
//     for (var i = 0; i < a.length; i++)
//         if (a[i] === b) {
//             c++
//         }
//     return c;
// }
// var result = count("My random string", "n");
// console.log(result);

// 5. Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
// function count(a, b) {
//     var c = 0;
//     var d;
//     for (var i = 0; i < a.length; i++)
//         if (a[i] === b) {
//             c++;
//             d = i;
//             break;
//         }
//     if (c < 1) {
//         d = -1
//     }
//     return d;
// }
// var result = count("My random string", "n");
// console.log(result);

// 6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

// function count(a, b) {
//     var c = 0;
//     var d;
//     for (var i = 0; i < a.length; i++)
//         if (a[i] === b) {
//             c++;
//             d = i;
//         }
//     if (c < 1) {
//         d = -1
//     }
//     return d;
// }
// var result = count("My random string", "n");
// console.log(result);

// 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// function convert(a) {
//     var c = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === " ") {
//             c[c.length] = null;
//         } else {
//             c[c.length] = a[i];
//         }
//     }
//     return c;
// }
// var result = convert("My random string");
// console.log(result);

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// function prime(a) {
//     for (var i = 2; i < a; i++) {
//         var c = a % i;
//         if (c === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// var result = prime(11);
// console.log(result);

// 9.  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// function separator(a, b) {
//     var c = "";
//     for (var i = 0; i < a.length; i++) {
//         if (b === undefined) {
//             b = "-"
//         }
//         if (a[i] === " ") {
//             c += b;
//         }
//         else {
//             c += a[i]
//         }
//     }
//     return c;
// }

// var result = separator("My random string");
// console.log(result);

// // 10. Write a function to get the first n characters and add “...” at the end of newly created string.
// function charac(a, b) {
//     var c = "";
//     for (var i = 0; i < b; i++) {
//         c += a[i];
//     }
//     c += "...";
//     return c;
// }
// var result = charac("My random string", 5);
// console.log(result);

// 11.  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity];
// function convert(a) {
//     var c = [];
//     for (var i = 0; i < a.length; i++) {
//         if (parseInt(a[i]) && isFinite(a[i])) {
//             c[c.length] = Number(a[i]);
//         }
//     }
//     return c;
// }
// var result = convert(["1", "21", undefined, "42", "1e+3", Infinity]);
// console.log(result);

// 12.  Write a function to calculate how many years there are left until retirement based on the year of birth.
// Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
// function retired(a, b, c) {
//     var year = a - b;
//     var penzija;
//     var end;
//     if (c === "m") {
//         if (year < 65) {
//             penzija = 65 - year;
//             end = "Ostalo vam je jos " + penzija + " godina do peznije."
//         } else {
//             penzija = year - 65;
//             end = "Vec ste " + penzija + " godina u penziji."
//         }

//     }
//     else {
//         if (year < 60) {
//             penzija = 60 - year;
//             end = "Ostalo vam je jos " + penzija + " godina do peznije."
//         } else {
//             penzija = year - 60;
//             end = "Vec ste " + penzija + " godina u penziji."
//         }
//     }
//     return end;
// }
// var result = retired(2019, 1950, "z");
// console.log(result);

// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// function human(a) {
//     var c = "";
//     var sum = a + c;
//     var d = "";
//     if (sum[sum.length - 1] === "1") {
//         d = a + "st";
//     }
//     else if (sum[sum.length - 1] === "2") {
//         d = a + "nd";
//     }
//     else if (sum[sum.length - 1] === "3") {
//         d = a + "rd";
//     }
//     else {
//         d = a + "th"
//     }
//     return d;
// }
// var result = human(112);
// console.log(result);

//Function 3

// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// function position(a, b, c) {
//     var sum = "";
//     if (c === undefined) {
//         c = 0;
//     }
//     for (var i = 0; i < a.length; i++) {
//         if (c === i) {
//             sum += b
//         }
//         sum += a[i];
//     }
//     return sum
// }
// var result = position("My random string", "JS ");
// console.log(result);

// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// function niz(a) {
//     var c = "";
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== undefined && a[i] !== null && !(isNaN(a[i])) && isFinite(a[i])) {
//             c += a[i] + ", ";
//         }
//     }
//     return c;
// }
// var result = niz([NaN, 0, 15, false, -22, '', undefined, 47, null]);
// console.log(result);

// 3. Write a program to filter out falsy values from the array.
// function falsy(a) {
//     var c = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== undefined && a[i] !== null && !(isNaN(a[i])) && a[i] !== 0 && a[i] !== false && a[i] !== "") {
//             c[c.length] = a[i];
//         }
//     }
//     return c;
// }
// var result = falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
// console.log(result);

// 4. Write a function that reverses a number. The result must be a number.
// function reverse(a) {
//     var i = 0;
//     var b = [];
//     var result = 0;
//     while ((a / 10 > 0)) {
//         b[i] = a % 10;
//         a = parseInt(a / 10);
//         i++;
//     }
//     for (var n = 0; n < i; n++) {
//         result += b[n] * 10 ** (i - 1 - n);
//     }
//     return result;
// }
// var c = reverse(12345);
// console.log(c);

// 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// function last(a, b) {
//     var c = [];
//     if (b === undefined) {
//         c = a[a.length - 1]
//     } else {
//         for (var i = a.length - b; i < a.length; i++) {

//             c[c.length] = a[i];

//         }
//     }
//     return c;
// }
// var result = last([7, 9, 0, -2], 3);
// console.log(result);

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.
// function element(a, b) {
//     var c = [];
//     if (b === undefined) {
//         b = null;
//     }
//     for (var i = 0; i < a; i++) {
//         c[c.length] = b;
//     }
//     return c;
// }
// var result = element(3, "none");
// console.log(result);

// 7. Write a function that says whether a number is perfect.

// 8. Write a function to find a word within a string.
// function word(a, b) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === " ") {

//         }
//     }
// }

// 9. Write a function to hide email address.

// 10. Write a program to find the most frequent item of an array.
// function check(a) {
//     var max = 0;
//     var resultat;
//     for (var i = 0; i < a.length; i++) {
//         var c = 0;

//         for (var index = 0; index < a.length; index++) {
//             if (a[i] === a[index]) {
//                 c++;
//             }
//         }
//         if (max < c) {
//             max = c;
//             resultat = a[i];
//         }
//     }
//     return resultat;
// }
// var result = check([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3]);
// console.log(result);

//FUNCTION 5
// 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// function result() {
//   var array = [3, 500, 12, 149, 53, 414, 1, 19];
//   var tempMin = 0;
//   var tempMax = 0;
//   var s = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[tempMin] > array[i]) {
//       tempMin = i;
//     }

//     if (array[tempMax] < array[i]) {
//       tempMax = i;
//     }
//   }

//   s = array[tempMax];
//   array[tempMax] = array[tempMin];
//   array[tempMin] = s;

//   return array;
// }
// console.log(result());

// 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// function array() {
//   var a = [3, 500, -10, 149, 53, 414, 1, 19];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] / 2 + 5 === 0) {
//       a[i] = 20;
//     } else {
//       a[i] = a[i] / 2 + 5;
//     }
//   }
//   return a;
// }
// console.log(array());

// 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// function people(a, b) {
//   var result = "";
//   var c = "";
//   for (var i = 0; i < a.length; i++) {
//     if (b[i] < 51) {
//       c = "failed";
//     } else if (b[i] >= 51 && b[i] < 60) {
//       c = "6";
//     } else if (b[i] >= 61 && b[i] < 70) {
//       c = "7";
//     } else if (b[i] >= 71 && b[i] < 80) {
//       c = "8";
//     } else if (b[i] >= 81 && b[i] < 90) {
//       c = "9";
//     } else if (b[i] >= 91) {
//       c = "10";
//     }
//     result += a[i] + " had " + b[i] + " and earned " + c + "\n";
//   }
//   return result;
// }
// var t = people(
//   ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
//   [50, 39, 63, 72, 99, 51, 83, 59]
// );
// console.log(t);


// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// function sum() {
// var b;
// var c = 0;
// var a = 0;
// var multi = 12.5;
// for(var i = 0; i <= 1000; i++){
//   if(i % 2 === 0){
//     a+=i
//   }
// }
// for(var n = 0; n <= 500; n++) {
//   if (n % 2 === 1) {
//     c+=n;
//   }
// }
// b = (a - c) * multi;
// return b;
// }
// var result = sum()
// console.log(result);


// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// function print(a) {
//     var b = "";
//     for (var i = 0; i < a.length; i++) {
//         if (typeof a[i] === "string") {
//             if (a[i].length >= 2) {
//                 b += a[i][0] + a[i][1];
//             }
//         }
//     }
//     return b;
// }
// var result = print(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]);
// console.log(result);


// 8. Write a program that takes a string and prints its characters out in reversed order in the console.
//Input:  Belgrade Institute of Technology
// function reverse(a) {
//   var b = "";
//   for(var n = a.length -1; n >= 0; n--) {
//     b += a[n];
//   }
//   return b;
// }
// var result = reverse("Belgrade Institute of Technology");
// console.log(result);


// 9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
// function combinations() {
//   var c = "";
//   for(var i = 1; i <= 7; i++) {
//     for(var n = 1; n <= 7; n++){
//       if(i === n){
//         c += "";
//       }else {
//       c += i + ", " + n + "\n";
//       }
//     }

//   }
//   return c;
// }
// var result = combinations();
// console.log(result);



// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
//Input:  17    | 15
//Output: true  | false

// function prime(a) {
//   for(var i = 2; i < a; i++) {
//     if(a % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// var result = prime(17);
// console.log(result);


// 11. Check if a given string is a palindrome (spaces are ignored).
// function palindrome(a) {
//   var n = a.length - 1;
//   for(var i = 0; i < a.length; i++ ) {
//     if(a[i] !== a[n]) {
//       return false;
//     }
//     n--;
//   }
//   return true;
// }
// var result = palindrome("geek");
// console.log(result);


// 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// function common(a, b) {
//     var c = [];
//     for (var i = 2; i <= b; i++) {
//         if (a % i === 0 && b % i === 0) {
//             c = i;
//         }
//     }
//     return c;
// }
// var result = common(192, 42);
// console.log(result);

//Function 6

// 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// function skip(a) {
//     var b = "";
//     for (var i = 0; i < a.length; i++) {
//         if (typeof a[i] === "string") {
//             b += parseFloat(a[i]) + ", ";
//         }
//     }
//     return b;
// }
// var result = skip(["1", "21", undefined, "42", "1e+3", Infinity]);
// console.log(result);

// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// function element(a) {
//     var b = "";
//     for (var i = 0; i < a.length; i++) {
//         if (typeof a[i] !== undefined && !isNaN(a[i]) && isFinite(a[i]) && typeof a[i] !== "object") {
//             b += a[i];
//         }
//     }
//     return b;
// }
// var result = element([NaN, 0, 15, false, -22, '', undefined, 47, null]);
// console.log(result);

// 3. Write a program to filter out falsy values from the array.
// function falsy(a) {
//     var b = [];
//     for (var i = 0; i < a.length; i++) {
//         if (!!a[i] ) {
//             b[b.length] = a[i];
//         }
//     }

//     return b;
// }
// var result = falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
// console.log(result);

// 4. Write a program that calculates a number of integer values in the array.
function int(a) {
    for (var i = 0; )
}