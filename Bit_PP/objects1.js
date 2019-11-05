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



