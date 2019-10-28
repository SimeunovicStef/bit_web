"use strict"

/* 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console. */

// function replace(input) {
//     var min = input[0];
//     var max = input[0];
//     var newInput = [];
//     var a;
//     var b;
//     for (var i = 0; i < input.length; i++) {
//         if (max < input[i]) {
//             max = input[i];
//             i = a;

//         }
//         if (min > input[i]) {
//             min = input[i];
//             i = b;

//         }
//     }

//     input[a] =
//         input[b] = 

//     return input;
// }

// console.log(replace([3, 500, 12, 149, 53, 414, 1, 19]));


// 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function changeValue(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            array[i] = 20;
        }
        else {
            array[i] = ((array[i] / 2) + 5)
        }
    }
    return array;
}
console.log(changeValue([3, 500, -10, 149, 53, 414, 1, 19]));



/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges: */

function grades(student, score) {
    for (var i = 0; i < score.length; i++) {
        if (score[i] <= 50) {
            student[i] += "-failed";
        }
        else if (score[i] <= 60) {
            student[i] += "-6";
        }
        else if (score[i] <= 70) {
            student[i] += "-7";
        }
        else if (score[i] <= 80) {
            student[i] += "-8";
        }
        else if (score[i] <= 90) {
            student[i] += "-9";
        }
        else if (score[i] <= 100) {
            student[i] += "-10";
        }


    }
    return student;
}
console.log(grades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]
));


/* 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console. */

function numbers(even, odd) {
    var a = 0;
    var b = 0;
    for (var i = 0; i <= even; i++) {
        if (i % 2 === 0) {
            a += i;
        }
    }
    for (var j = 0; j <= odd; j++) {
        if (j % 2 !== 0) {
            b += j;
        }
    }



    return (a - b) * 12.5;
}

console.log(numbers(1000, 500));

// 7.Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

