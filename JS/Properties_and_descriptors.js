
/** Json to <=> Objects transforming */

let computer = {

    monitor: 'lenova',
    keyboard: 'logitech',
    mouse: 'logitech',
    processor: 'i5',
    ram: 8
}

console.log(computer)

console.log(JSON.stringify(computer))
//console.log(JSON.parse(computer))

let cpu = {
    "motherboard": "intel",
    "Ramtype": "ddr ram",
    "processor": "i5",
    "core": 4
}

/** Cool right */
console.table(cpu)
// console.log(JSON.parse(cpu))

/** Properties and descriptors 
  * writable – if true, can be changed, otherwise it’s read-only.
  * enumerable – if true, then listed in loops, otherwise not listed.
  * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
  * It is all about the objects, giving the access to edit, delete and modifying
 */

let obje = {
    protot: 'String',
    ype: 324,
    power: 'Objects are powerful'
}

console.log(obje)

/** this remove only property  */
delete obje.protot

/** Doesn't remove the object */
delete obje

console.log(obje)

let descriptor = Object.getOwnPropertyDescriptor(obje, 'ype')
console.table((descriptor))

let user = {
    name: 'Hound',
    appearance: 'got'
}

/** We can have control over the objects 
 * it can be overriding again by doing this
 */
descriptor = Object.defineProperty(user, 'name', {
    writable: false,
    configurable: false
})

user.name = 'clegane'
user.appearance = 'dies in last season'
console.log(user)

descriptor = Object.getOwnPropertyDescriptor(user, 'name')
console.log(descriptor)

delete user.appearance
delete user.name
console.log(user)

const light = {
    speed: 100,
    medium: 'air'
}

descriptor = Object.getOwnPropertyDescriptor(light, 'speed')
console.log(descriptor)

light.speed = 'it travles faster than sound'
console.log(light)

/** Enumerable
 * It leaves the property while looping
 */

let avengers = {
    hulk: 'he cannot be destoryed while in green, gamma radiation has been affected',
    ironman: 'suite',
    thor: 'thunder god',
    black_widow: 'assassin'
}

descriptor = Object.defineProperty(avengers, 'thor', {
    enumerable: false
})

for (let i in avengers) {
    console.log(i)
}

console.log(Object)

/** Property getters and setters  
  * Accessors property
*/

let name = {
    first: 'walter',
    last: 'white',

    get fn() {
        return this.first + " " + this.last
    },

    set fn(value) {
        [this.first, this.last] = value.split(" ")
    }
}
console.log(name.fn)
name.fn = 'Breaking Bad'
console.log(name.fn)