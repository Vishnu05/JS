let srt = 123

srt = String(srt)

let a = true + false
console.log(a)

//console.log(+12)

let ab = 12 + "fsd"
console.log(2 ** 16 + ab)

console.log('a' < 'b')


let asd = prompt('Name.. ? ')

console.log(asd)

let ex = prompt('enter you exp')
let exp = (ex < 2) ? 'junior' : (ex < 4) ? 'senior' : 'Experinced';

console.log(exp)

let aw = prompt('Input')

console.log((aw > 18) ? 'dumb' : 'asol')

let abc = 5

while (abc < 6) {
    console.log('Infinte')
    abc++;
}

name: for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {

        // var arr=prompt(`Enter the value (${a},${b})`)
        if (1) {

            break name;
        }
    }
}

console.log(arr)



let value = 100;
let values = true;
/*
for (; values;) {
       if(va>100){
        valuse=false;
    }
} */

function fun(values, val = 'dfs') {

    return values + val;
}

console.log(fun('yo'))

//let age = prompt('Enter the age', 0)

function checkAge(age) {
    return (age < 18) ? confirm('Denied! aren"t you....') : console.log('allowed')
}

//checkAge(prompt('Value'))

function pow(x, y) {
    return console.log(x ** y)
}

pow(3, 3)


function callback(check, yes, no) {

    (check) ? false : yes ? true : nonFanNba;

}

function nba() {
    confirm('Do you like Basketball.. ?')
}

function fanNba() {
    console.log('NBA ***')
}

function nonFanNba() {
    console.log('You are in the worng place kid...')
}

callback(nba(), fanNba(), nonFanNba())