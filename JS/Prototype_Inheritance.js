
/** Prototype inheritance */

let vm = {
    compiler: 'jit for java'
}

let js = {
    c_plus: 'browsers, where v8 converts js to machine code'
}

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


console.log(__proto__)