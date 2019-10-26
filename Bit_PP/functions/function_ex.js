// 1.

// function sum(a, b) {
//     c = a + b;
//     return c;
// }
// sum(3, 94)
// console.log(c)


// 2.

// function check(a) {
//     if (a % 2 === 0) {
//         c = 'true';
//     }
//     else {
//         c = 'false';
//     }
//     return c;
// }
// check(22)
// console.log(c)

// 3.

// function digit(a) {
//     if (a > 99 && a < 1000) {
//         number = 'the number is three digits long';

//     }
//     else {
//         number = 'number is not three digits long';
//     }
//     return number;
// }
// digit(156)
// console.log(number)

// 4.

// function numbers(a, b, c, d) {
//     mean = (a + b + c + d) / arguments.length;
//     return mean;
// }
// numbers(8, 91, 2, 54)
// console.log(mean)

5.

function num(n) {
    result = "";
    for (var i = 0; i < n; i++) {


        if (i !== 0 && i !== n - 1) {
            result += '*   *' + '\n';
        }
        else {

            result += '*****' + '\n';

        }
    }
    return result;
}

num(5)
console.log(result)

// 7.

// function number(e) {
//     a = e + "";
//     del = a.length;


//     return del;
// }

// number(10911)
// console.log(del)

8.

function num(e) {
    vara = [2, 4, 7, 8, 7, 7, 1];
    var result = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] === e) {
            result += a[i];
        }




    }
    return result;
}

num(7)
console.log(result)