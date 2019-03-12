

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

//Rest parameters...
function addAll(...ab) {
    let sum = 0;

    for (let ba of ab) {
        sum += ba
    }
    return sum
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8))
console.log(1)

function money(a1, a2, ...a3) { //rest parameter must be in end or (error occurs)
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
let data = 'json'

function js() {
    console.log('Hi ' + data)
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

