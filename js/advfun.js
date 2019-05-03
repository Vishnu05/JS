

let rec = [Math.pow(2, 3)]
console.log(rec)
// let m = prompt('Number to be powered')
// let p = prompt('Power')
function pow(m, p) {
    let resu = 1
    for (let a = 1; a <= p; a++) {
        resu *= m
    }
    console.log(resu)
}
pow(4, 2)

a = {
    arr: [{
        name: 'vishnu',
        company: 'Capgemimni'
    }],
    arr1: true,
    arr2: [{
        name: 'thamizharasan',
        company: 'boi'
    }]
}

console.log(Array.isArray(a))
console.log(Math.max(2, 3, 5, 90, 342))
// rec.reduce??

function add(x, y) {
    return x + y;
}


console.log(add(1, 2, 3, 4, 5))

/** Rest parameters...*/
function addAll(...ab) {
    let sum = 0;

    for (let ba of ab) {
        sum += ba
    }
    return sum
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8))
console.log(1)

/** Rest parameter must be in end or (error occurs)*/
function money(a1, a2, ...a3) { 
    console.log(a1 + a2)
    console.log(a3[0])
    console.log(a3[1])
    console.log(a3[44])
    console.log(a3.length)
}

money('dollors', ' pounds', 'Rupeee', 'dinar')

//argument variable
function args() {

    console.log(arguments[1] + ' ' + arguments[0])
    console.log(arguments.length)
    for (let abs of arguments) {
        console.dir(abs)
    }

}

args(1, 'KGF', true, 'Gofers', 'golang')

let srt = 'Javascript'
console.log(...srt + ' ' + [...srt])
console.log([...srt])

//closure
/**
 * When a function has value and values are changed
 * the variables are changed outside the function and the value will reflect in that function
 */
let data = 'json'

function js() {
    console.log('Hi ' + data)  // jeff dean value is reassigned before the function call
}

data = 'Jeff dean'

js();

//
function dean() {

    let go = 'Brain'

    return function () {
        console.log(go)
    }
}

let go = 'goo'

let jef = dean()

jef()
console.log(typeof jef)

// function dean(){
//     return 'hey function call';
// }

ofs = 'no declaration'
console.log(ofs)

function nested(fn, ln) {

    function getName() {
        return `${fn}${ln}`
    }//l̥l̥l̥l̥l̥l̥l̥l̥
    console.log('Hi...' + getName())
    console.log('Bye...' + getName())
}

nested('Vishnu', 'Thamizharasan')

//lexical environment 
/**
 * it is all about scope.?
 */

//hoisting
/**
 * In JavaScript, a variable can be declared after it has been used.
 * In other words; a variable can be used before it has been declared.
 */
gh = 'hoisting ex'
console.log(gh)
function hoist(a) {
    return a;
}
console.log('functoin call : ' + hoist(gh))
var gh; //if we change to let the variable becames undefined 

//anonymous function ?
(function () {
    console.log('lexical function ')
})();
console.log();

(function () {
    console.log('lexical function example: ')
})();

var xx = 1
{
    xx = 2
    {
        xx = 3 // xx check the latestest progressive
        console.log(xx)
    }
}

function makeAdder(x) {
    return function (y) {
        // return function (c) {
        return x + y
        //}
    }
}

let add1 = makeAdder(5)
let add2 = makeAdder(10)

console.log(add1(3))
console.log(add2(2))

//callback function

let adds = function (x, y) {
    return x + y
}
let mul = function (x, y) {
    return x * y
}

let display = function (a, b, fun) {
    console.log('function executing')

    return fun
}

console.log(display(1, 2, adds()))


function obj() {
    return 'JS function'
}

let funName = function () {
    return obj()  //call back function
}
console.log(funName())

// js async function call
/** SetTime out
 * Function will wait for certian period of time
 */
function one() {
    setTimeout(function () {
        console.log('first call 1 : set timeout example')
    }, 2000)
}

function two() {
    console.log('second call 2 : js dosen"t wait for the other function to complete Asynchronous Call')
}

one()
two()

/** SetTimeInterval 
 * Loop, it execute again when the time completes bascially endless loop
 * but it can stoped using clearInterval
*/
// tm()

function tm() {

    console.log('Time interval.......')
    return setInterval(() => {
        console.log('Time Interval : kinda paradox')
    }, 0000000);
}

clearInterval(tm,4000)

//ee+t () => return 'd' 

function ad() {
    privateAd = a
    return function () { // ??
        return 'yo'
    }
}

console.log(ad())

// var 
function vars() {
    var scopes = 'jey jamie'
    return console.log(scopes)

}

vars()
//console.log(scopes)

const nba = 'lebron james'
console.log(nba)
// nba='Stephan curry' //typeError
console.log(a);
