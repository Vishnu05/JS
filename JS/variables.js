
// varibale declarations
let $ = '234'
console.log($)
$ = 1;
console.log($)

num = 123

//undefined if the value is declared and not defined
let df;
console.log(df)

let a = 5

// prompt(a)
//alert('value')

function b() {

    return "value"
}

// ` backtics are one way to say this is string and with help of ${we can bind data}
console.log(`rock paper "game"${''}` + "  " + typeof a)



function param(value, name) {
    return value + name
}

console.log(param(1, 'name'))

console.log(b())
function callback(confirms, yes, no) {

    if (confirm(confirms)) {
        yes()
    }
    else no()
}

let bc = 123
let bcc = String(bc)
console.log(bc)

// callback('callback function', function () { alert('request') }, function () {
//     alert('response')
// })

let cg = {
    id: 13123,
    name: "vishnu",
    location: "chennai",
    age: true
}

console.log(cg)

/** Of it iterates the value in array, it cannot deal with objects??
 * while (in) iterates the key not the value and it can be accessed by like array format ????
 */
let got = {
    stark: 'winterfell',
    lannister: 'Kingslanding',
    targareyan: 'Most of them are dead',
    puprose: 'iron throne',
    iron_throne: 'Dragon destoryed the Iron throne'
}

let movies = ['interstellar', 'Dark knight triology', 'inception', 'prestige']

/** for..in */
for (let i in movies) {
    console.log(i + " : " + movies[i])
}

for (let i in got) {
    console.log(i + " : " + got[i])
}

/** for..of */
try {
    for (let i of got) {
        console.log(i)
    }
} catch (e) {
    console.error(e.message)
}

for (let i of movies) {
    console.table(i)
}

/** Number are different in js it is dynamic typing */
let numcheck = 0.1 + 0.2;
console.log(numcheck)

