
/*Write an array of months in a year. Using console.log display June, October and January from the array.
*/

var year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(year[5], year[9], year[0]);



/*Write an arrays of days in a week. Using console.log display Sunday from the array.
*/

var daysInWeek = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(daysInWeek[6]);


/*Print all negative elements from the array [2, -4, 5, -2, -11].
*/


var elements = [2, -4, 5, -2, -11];
var negative = ""

if (elements[0] < 0) {
    negative = negative + elements[0]
}

if (elements[1] < 0) {
    negative = negative + elements[1]
}

if (elements[2] < 0) {
    negative = negative + elements[2]
}
if (elements[3] < 0) {
    negative = negative + elements[3]
}
if (elements[4] < 0) {
    negative = negative + elements[4]
}


console.log(negative);


/*Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9]. */


var number = [5, 15, -5, 20, 12, 18, 72, 14, 9]
var index = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var divisibleBy3 = ""

if (index[0] % 3 === 0 && index[0] !== 0) {
    divisibleBy3 = number[0] + "," + divisibleBy3
}
if (index[1] % 3 === 0) {
    divisibleBy3 = number[1] + "," + divisibleBy3
}
if (index[2] % 3 === 0) {
    divisibleBy3 = number[2] + "," + divisibleBy3
}
if (index[3] % 3 === 0) {
    divisibleBy3 = number[3] + "," + divisibleBy3
}
if (index[4] % 3 === 0) {
    divisibleBy3 = number[4] + "," + divisibleBy3
}
if (index[5] % 3 === 0) {
    divisibleBy3 = number[5] + "," + divisibleBy3
}
if (index[6] % 3 === 0) {
    divisibleBy3 = number[6] + "," + divisibleBy3
}
if (index[7] % 3 === 0) {
    divisibleBy3 = number[7] + "," + divisibleBy3
}
if (index[8] % 3 === 0) {
    divisibleBy3 = number[8] + "," + divisibleBy3
}

console.log(divisibleBy3);






