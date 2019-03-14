

func()

function func() {

    return console.log('alright then')
}

// arrow function
let fus = (a, b) => a + b;

console.log(fus(1, 2))

let a = () => console.log('alert(12)') 
a()

console.log()

strict()
function strict() {
    'use strict';

    let a = 12;
    //  alert(a)
}

//alert(Math.pow(2,2))

//i = i ? i < 0 ? Math.max(0, len + i) : i : 0;


// objects
let obj = new Object();

obj = {
    12: 'se',
    'name': 'vishnu',
    company: 'capgemini',
    status: true
}

let obje = obj
 
console.log('cloning the obj' + obj)

obj = {
    message: 'Objects are god'
}

for (let a in obj) {
    console.log(a + " " + obj[a])
    //console.log(obj[a]) //for getting the key values //use-less comments *Bad*
}

obj.admin = 'yo'
delete obj.admin;
console.log(obj)
console.log('company' in obj)

function admin(key, prop) {
    return {
        key: key,
        prop: 'Properties'
    };
}

console.log(String(Math.trunc(89.34)))

let admins = admin('Access', 'detained')
console.log(admins.key + " ");

Object.assign(obje, obj)

let schedule = {};

//isEmpty()

schedule.check = 'notNull'

var n=1
var n=2 //redeclaring with let throws error

let emp={
    jasmine:1000,
    john:2000,
    jane:3000,
    123:'true'
}

console.log(emp[123])
b=0;
for(let a in emp){
    b+=emp[a]
}
console.log(b)

let local={
    name: 'jon doe'
}

let reference=local;

console.log(reference.name+" "+'local.name')

a={
    fun(){
        alert(1)
    }
}

a.fun()
