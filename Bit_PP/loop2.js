

//1

var a = [5, -4.2, 3, 7];
var e = 3;
var output = "No"

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        output = "Yes";
        break
    }
}
console.log(output, "\n");



//1b

var a = [5, -4.2, 18, 7];
var e = 3;
var output = "No"

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        output = "Yes";
        break
    }
}
console.log(output, "\n");



//2

var arrayThree = [-3, 11, 5, 3.4, -8]

for (var i = 0; i < arrayThree.length; i++) {
    if (arrayThree[i] > 0) {
        arrayThree[i] *= 2;
    }
}

console.log(arrayThree);
console.log("\n");


//3

var arrayFour = [4, 2, 2, -1, 6];
var minValue = arrayFour[0];
var minIndex = 0;

for (var i = 1; i < arrayFour.length; i++) {
    if (arrayFour[i] < minValue) {
        minValue = arrayFour[i];
        minIndex = i;
    }
}

console.log("Minimum value is: " + minValue + " with index number: " + minIndex);
console.log("\n");


//4

var arrayFive = [4, 2, 2, -1, 6]
var min = arrayFive[0];
output = arrayFive[1];

for (var i = 1; i < arrayFive.length; i++) {
    if (arrayFive[i] < min) {
        output = min;
        min = arrayFive[i];
    } else if ((arrayFive[i] < output) && (arrayFive[i] !== min)) {
        output = arrayFive[i]
    }
}
console.log("Second smallest is: ", output, "\n");



//5

var arraySix = [3, 11, -5, -3, 2];
var sumPositiveElements = 0;

for (var i = 0; i < arraySix.length; i++) {
    if (arraySix[i] > 0) {
        sumPositiveElements = sumPositiveElements + arraySix[i];
    }
}

console.log(sumPositiveElements);
console.log("\n");



//6
var arraySeven = [2, 4, -2, 7, -2, 4, 2];
var resultSymetric = "The array is symmetric";

for (var i = 0; i <= arraySeven.length / 2; i++) {
    if (arraySeven[i] !== arraySeven[arraySeven.length - 1 - i]) resultSymetric = "No"
}
console.log(resultSymetric);
console.log("\n");



//6b

var arrayEight = [3, 4, 12, 8];
var resultSymetric = "The array is symmetric.";

for (var i = 0; i <= arrayEight.length / 2; i++) {
    if (arrayEight[i] !== arrayEight[arrayEight.length - 1 - i]) resultSymetric = "The array isn’t symmetric."
}
console.log(resultSymetric);
console.log("\n");



//7

var arrayNine = [4, 5, 6, 2]
var arrayTen = [3, 8, 11, 9]
var resultArrayNineAndTen = [];

for (var i = 0; i < arrayNine.length; i++) {
    resultArrayNineAndTen[2 * i] = arrayNine[i];
    resultArrayNineAndTen[2 * i + 1] = arrayTen[i];
}

console.log(resultArrayNineAndTen);
console.log("\n");



//8

var z = [4, 5, 6, 2];
var y = [3, 8, 11, 9];
var ss = []

for (var i = 0; i < z.length; i++) {
    ss[i] = z[i];
}
for (var i = z.length; i < z.length + y.length; i++) {
    ss[i] = y[i - z.length]
}

console.log(ss);
console.log("\n");



//9


var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var i = 0

while (i < a.length) {
    if (a[i] === e) {
        for (var j = i; j < a.length - 1; j++) {
            a[j] = a[j + 1];
        }
        a.length = a.length - 1
    } else i++;
}

console.log(a);
console.log("\n");


//10

var A = [2, -2, 33, 12, 5, 8];
var E = 78;
var p = 3;

if (p > A.length) console.log("ERROR");
else {
    for (var i = A.length; i > p; i--) A[i] = A[i - 1];
    A[p] = E;
}

console.log(A);
console.log("\n");