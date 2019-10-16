// zadatak 1
var day = 1;
var result = "";

switch (day) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wed";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Not a day";
        break;

}
console.log(result)
// zadatak 2 Write a program that shows text representation of a day in a week for a number input from 1 to 7.
//  All other cases output a message explaining that input must
//  be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var day = 8;
var result = "";

switch (day) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wed";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    case 8:
        result = "Input must be a number between 1 and 7";
        break;
    case 9:
        result = "Input must be a number between 1 and 7";
        break;
    case 10:
        result = "Input must be a number between 1 and 7";
        break;
    default:
        result = "Not a day";
        break;
}
console.log(result)

// zadatak 3
// Write a program that for a 1 - 7 number input(representing a day in a week) shows if that day is a weekday or weekend.
// All other cases output a message explaining that input must be a number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.


var day = 150;
var result = "";

switch (day) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "weekday";
        break;
    case 6:
    case 7:
        result = "weekend";
        break;
    default:
        result = "input must be number between 1 and 7";
        break;



}
console.log(result)

// zadatak 4
//Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
//For input 2, output should be “February”.
//For input 6, output should be “June”.
//For input 13, output should be “Input must be a number between 1 and 12”.


var month = 6
var result = ""

switch (month) {
    case 1:
        result = "January";
        break;

    case 2:
        result = "February";
        break;

    case 3:
        result = "March";
        break;

    case 4:
        result = "April";
        break;

    case 5:
        result = "May";
        break;

    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result = "December";
        break;
    default:
        result = "Input must be a number between 1 and 12";
        break;



}
console.log(result)

// zadatak 5
// Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. 
// All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 


var month = 6
var result = ""

switch (month) {
    case 12:
    case 1:
    case 2:
        result = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        result = "spring";
        break;
    case 6:
    case 7:
    case 8:
        result = "summer";
        break;
    case 9:
    case 10:
    case 11:
        result = "Autumn";
        break;
    default:
        result = "input must be a number between 1 and 12";
        break;


}
console.log(result)

//zadatak 6

//Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: 
//A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var grade = "D";
var result = "";
switch (grade) {
    case "A":
        result = "Good Job";
        break;
    case "B":
        result = "Pretty Good";
        break;

    case "C":
        result = "Passed";
        break;

    case "D":
        result = "Not so good";
        break;

    case "F":
        result = "Failed";
        break;
    default:
        result = "Unknown grade";
        break;



}
console.log(result)

//zadatak 7 
//Write a program that takes as input a city name and outputs the country where the city is.
//You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities.
// Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

var city = "London";
result = "";

switch (city) {
    case "London":
    case "Manchester":
    case "York":
    case "Portsmouth":
    case "Hereford":
        result = "UK";
        break;

    case "Moscow":
    case "Sankt-Petersburg":
    case "Sochi":
    case "Yekaterinburg":
        result = "Russia"
        break;

    case "Kiev":
    case "Odessa":
    case "Mariupol":
        result = "Ukraine";
        break;

    case "Minsk":
    case "Soligorsk":
        result = "Belorussia";
        break;
    case "Krakow":
        result = "Poland";
        break;

    default:
        result = "Please choose a different city";
        break;

}
console.log(result)

//zadatak 8
//Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. 
//Watch out for division by zero!

var operation = '+';
var a = 5;
var b = 16;

switch (operation) {
   case '+':
       console.log(a+b);
       break;
   case '-':
       console.log(a-b);
       break;
   case '*':
       console.log(a*b);
       break;
   case '/':
       if (b == 0) {
            console.log('Division by zero!');
       }
       else {
            console.log(a/b);
       }
       break;
   default:
       console.log('Unknown operation!')
}
