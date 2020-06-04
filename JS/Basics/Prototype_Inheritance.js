
/** Prototype inheritance 
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another
*/

/** creating a object */
let vm = {
    compiler: 'jit for java'
}

let js = {
    c_plus: 'browsers, where v8 converts js to machine code'
}

/** IDK how to write this */
js.__proto__ = vm

let browser = {
    event: 'event driven language'
}

console.log(js.compiler)
console.log(js.c_plus)
console.log(js)

js = browser
console.log(js)

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps)

/** printing out the prototype */
console.log(__proto__)