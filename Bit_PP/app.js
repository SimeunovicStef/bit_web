//Write a program that outputs the sum of squares of the first 20 numbers.

// var sum = 0;
// for(var i = 1; i <= 20; i++) {
//   sum = sum + i * i;
// }  
// console.log(sum);

//Write a program that prints the elements of the following array.
// var sum = 0;
// var a = [
//   [1, 2, 1, 24], 
//   [8, 11, 9, 4], 
//   [7, 0, 7, 27]
//   ];

//   for(var i = 0; i < 3; i++) {
//     for(var j = 0; j < 4; j++) {
//       console.log('' + a[i][j]);
//     }
//   }


//  NOVI ZADACI


// 1. Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

// var a = [5, -4.2, 18, 7, 3];
// var e = 3;
// for(var i = 0; i < a.length; i++){
//   if(a[i] === e){
//     console.log('Yes');
//   }
// } 
// var sum = '';
// var a = [5, -4.2, 18, 7];
// var e = 3;
// for(var i = 0; i < a.length; i++){
//   if(a[i] !== e){
//     sum = "No";
//   }
// }
// console.log(sum);
//RESEN



// 2. Write a program that multiplies every positive element of a given array by 2.
// var a =  [-3, 11, 5, 3.4, -8];
// for(var i = 0; i < a.length; i++) {
//   if(a[i] > 0) {
//     a[i] = a[i] * 2;
//   }
// }
// console.log(a);
//RESEN


// 3. Write a program that finds the minimum of a given array and prints out its value and index. 
// var a = [4, 2, 2, -1, 6, -8];
// var result = a[0]
// var index = 0
// for (var i = 0; i < a.length; i++) {
//     if (result > a[i]) {
//         result = a[i]
//         index = i

//     }

// }
// console.log(result)
// console.log(index)




// 4. Write a program that finds the first element larger than minimum and prints out its value. 
// var a = [4, 2, 2, -1, 6, 1];
// var min = a[0];
// var nextmin = a[0];
// for (var i = 0; i < a.length; i++) {
//     if (min > a[i]) {
//         nextmin = min;
//         min = a[i];
//     } else if (a[i] < nextmin) {
//         nextmin = a[i];
//     }
// }

// console.log(nextmin);

// RESEN





// 5. Write a program that calculates the sum of positive elements in the array.
// var sum = 0;
// var a = [3, 11, -5, -3, 2];
// for(var i = 0; i < a.length; i++) {
//   if(a[i] > 0) {
//     sum = sum + a[i];
//   }
// }
// console.log(sum);
// RESEN


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. 
// var a = [2, 4, -2, 7, -2, 4, 2];
// var result = "";
// for (var i = 0, n = a.length - 1; i < a.length; i++ , n--) {
//     if (a[i] === a[n]) {
//         result = "Array is symmetric";
//     } else {
//         result = "The array isn't symmetric";
//     }
// }
// console.log(result)
//RESEN




// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];
// var sum = [];
// for (var i = 0; i < a.length; i++) {
//     sum = a[i] + ", " + b[i] + ", ";
//     console.log(sum);
// }

//RESEN





// 8. Write a program that concatenates two arrays.
// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];
// var result = [];
// for (var i = 0; i < a.length; i++) {
//     result[i] = a[i];
// }
// for (var i = a.length; i < b.length + a.length; i++) {
//     result[i] = b[i - a.length];
// }
// console.log(result);
//RESEN


// 9. Write a program that deletes a given element e from the array a. 
// var a = [4, 6, 2, 8, 2, 2];
// var e = 2;
// for(var i = 0; i < a.length; i++) {
//   if(a[i] === e) {
//     a.splice(i, 1);
//   }
// }
// console.log(a);
// RESEN



// ZADACI SA CASA 21.10

// for (var i = 1; i <= 100; i++) {
//     if (i % 4 === 0) {
//         console.log("*")
//     }
//     else {
//         console.log(i)
//     }
// }

// for (var i = 1; i <= 100; i++) {
//     if (i % 4 !== 0) {
//         console.log(i)
//     }
// }





// for (var number = 100; number >= 1; number--) {
//     console.log(number);

// }

