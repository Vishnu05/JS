
let sum = (a, b) => a + b

console.log(sum(1, 34))
let ob = {
    1: "ar",
    'name': 'vishnu',
    func() {
        return 'as'
    },
    uo: 'd',

}
console.log(ob.func())

let map = new Map()

map.set(1, 34)
map.set('a', ob)
map.set(true, false)
map.set(function func() { return 'get map ' }, 'df')

map.delete(1)

console.log(map)
console.log(map.get(1) + " : " + map.has(1) + "Size of map : " + map.size)

let pam = new Map([
    [1, 23],
    ['name', 'vishnu']
])

map.delete(23)

console.log(pam.get(1))

for (let a of pam.keys()) {
    console.log(a)
}
for (let a of pam.values()) {
    console.log(a)
}
/* for of iterates values
in iterates key */
//console.log('Map enteries : '+pam.entries()
for (let a of pam.entries()) { // iterates both (value and key)
    console.log(" Entries : " + a)
}

let set = new Set();

set.add('philip', 'james', 'u')
set.add('lebron', 'james')
set.add('stephan', 'curry')

console.log(set)

let aa = 'vishnu'
let bb = aa

aa = null
console.log(bb)

let objs = {
    name: 'Capgemini',
    position: 'software engineer',
    team: 'BOI'
}

let objs1 = objs;
objs = null

console.log(objs)

let wm = new WeakMap();

let ws = new WeakSet();

let john = {
    id: 'cap',
    floor: 11
}

wm.set(john, '') //accepts only the objects
//wm.set('3','3')
console.log(wm)

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let qw = new Set()
function unique(arr) {
    for (let a of arr) {
        qw.add(arr[i])
    }
}

console.log(qw)

let val = {
    brand: 'lenova',
    monitor: 'lenova',
    mouse: 'logitech',
    speaker: 'sony',
    processor: 'i5 7th generation',
    ram: 8
}

console.log(Object.values(val))
console.log(Object.keys(val))

for (let a of Object.entries(val)) {
    console.log(a)
}

let abc = ['windows', '10', 'professional']

let [os,version]=abc

console.log()

let [,adf,]=abc
console.log(adf)

let json=JSON.stringify(val);
//let js=JSON.parse(val);
console.log(json)

