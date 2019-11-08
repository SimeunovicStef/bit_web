"use strict"

// var student = {
//     name: 'Pera',
//     age: 21,
//     gender: 'Male'
// };

// console.log(student);

// var ageless = {
//     title: 'Thanatos',
//     print: function (a) {
//         return 510 + a;
//     }
// }
// console.log(ageless.print(1))



// var ageless = {
//     world: 'Earth',
//     title: 'Thanatos',
//     getFormattedComment: function () {
//         return ageless.world + " " + ageless.title;
//     }
// }

// console.log(ageless.getFormattedComment())


// var comment = {
//     world: 'Earth',
//     title: 'Thanatos',
//     getFormattedComment: function () {
//         return this.world + " " + this.getFormattedComment;
//     }
// }

// console.log(comment.getFormattedComment())


// window.console.log(false)

// window.navigator




// 1.
// var coffeeTop = {
//     name: 'Sumatra',
//     strength: 'Dark',
//     flavour: 'Strong',
//     milk: 'none'

// }
// console.log(coffeeTop);


// 2.
// var favMovie = {
//     title: 'Matrix',
//     actors: 'Keeanu Reeves', 'Lawrence Fishbourne',
//     director: 'Wachovski brothers',
//     genre: 'Action',
//     popularity: 'extreme'

// }

// 3. 
// REGULARNA FUNKCIJA
// function createobject(description, programmingLanguage, gitRepository, booleanStatus) {
//     return {
//         description: description,
//         programmingLanguage: programmingLanguage,
//         gitRepository: gitRepository,
//         booleanStatus: booleanStatus,
//         printRepository: function () {
//             console.log(this.git_repository);
//         },
//         isJavaScript: function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return "program is in Javascript";
//             }
//             else {
//                 return "program is not Javascript";
//             }
//         },
//         completeStatus: function () {
//             if (booleanStatus === true) {
//                 return "Program is completed";
//             }
//             else {
//                 return "Program is not completed";
//             };
//         }
//     }
// }
// var result = createobject('Program1', 'JavaScript', 'bit-web', false);
// console.log(result.completeStatus());


//KONSTRUKTORSKA FUNKCIJA
// function createobject(description, programmingLanguage, gitRepository, booleanStatus) {

//     this.description = description;
//     this.programmingLanguage = programmingLanguage;
//     this.gitRepository = gitRepository;
//     this.booleanStatus = booleanStatus;
//     this.printRepository = function () {
//         console.log(this.git_repository);
//     },
//         this.isJavaScript = function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return "program is in Javascript";
//             }
//             else {
//                 return "program is not Javascript";
//             }
//         };
//     this.completeStatus = function () {
//         if (booleanStatus === true) {
//             return "Program is completed";
//         }
//         else {
//             return "Program is not completed";
//         }
//     }

// }
// var result = new createobject('Program1', 'Angular', 'bit-web', false);
// console.log(result.isJavaScript());




// //4.
// KONSTRUKTORSKA FUNKCIJA
// function CreateRecipe(name, typeofCuisine, complexity, ingredients, preparingTime, instructions) {

//     this.name = name;
//         this.typeofCuisine = typeofCuisine;
//         this.complexity = complexity;
//         this.ingredients = ingredients;
//         this.preparingTime = preparingTime;
//         this.instructions = instructions;
//         this.meal = function () {
//             return this.ingredients;
//         };
//         this.timeLimit = function () {
//             if (this.preparingTime <= 15) {
//                 return "meal can be prepared in 15mins"
//             }
//             else {
//                 return "meal cannot be prepared in 15mins"
//             }
//         };
//         this.cuisineChange = function (a) {
//             return this.typeofCuisine = a;
//         },
//         this.deleteIngredient = function (b) {
//             return delete this.ingredients[b];
//         }




// }

// var result = new CreateRecipe("Pizza", "italian", "easy", ["cheese", "ham", "sauce"], 19, "Just don't get burned");

// result.cuisineChange("kineska");
// result.deleteIngredient(1);
// console.log(result.meal());







// REGULARNA FUNKCIJA
// function Createobject(description, programmingLanguage, gitRepository, booleanStatus) {
//     return {
//         description: description,
//         programmingLanguage: programmingLanguage,
//         gitRepository: gitRepository,
//         booleanStatus: booleanStatus,
//         printRepository: function () {
//             console.log(this.git_repository);
//         },
//         isJavaScript: function () {
//             if (this.programmingLanguage === "JavaScript") {
//                 return "program is in Javascript";
//             }
//             else {
//                 return "program is not Javascript";
//             }
//         },
//         completeStatus: function () {
//             if (booleanStatus === true) {
//                 return "Program is completed";
//             }
//             else {
//                 return "Program is not completed";
//             };
//         }
//     }
// }
// var result = Createobject('Program1', 'JavaScript', 'bit-web', false);
// console.log(result.completeStatus());

//BUILT IN OBJECTS 1

//1. Zadatak Write a functional expression that duplicates each element of a given array.

Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicate(array1) {
    for (var i = 0; i < array1.length; i += 2) {
        array1.splice(i, 1, array1[i], array1[i]);
    }
    return array1;

}
console.log(duplicate([2, 4, 7, 11, -2, 1]));


//2. Zadatak Write a functional expression that removes all duplicates in a given array.

// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function remove(array2) {

    array2.sort(function (a, b) {

        return a - b;

    });
    for (i = 0; i < array2.length; i++) {
        if (array2[i] === array2[i + 1] || array2[i] === array2[i - 1]) {
            array2.splice(i, 1);
        }

    }
    return array2;
}
console.log(remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



// 3. Zadatak  Write a function that checks if a given array has odd number of elements.
/* Input: [1, 2, 9, 2, 1]
Output: true

Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
 */

// function oddChecker() {
//     var arrayInput = [1, 2, 9, 2];

//     if (arrayInput.length % 2 !== 0) {
//         return "true";

//     }
//     else {
//         return "false";
//     }

// } console.log(oddChecker());

function middleCounter(arrayInput) {

    for (var j = 0; j < arrayInput.length; j++) {

        if (arrayInput.length % 2 !== 0) {
            var middleElmntIndex = ((arrayInput.length - 1) / 2) + 1;
            for (var i = 0; i < arrayInput.length; i++) {
                if (arrayInput[i] < arrayInput[middleElmntIndex]) {
                    var counter = 0;
                    counter++;
                }
            } return counter;
        } else {
            return 'error';
        }
    }

} console.log(middleCounter([-1, 8.1, 3, 6, 2.3, 44, 2.11]));