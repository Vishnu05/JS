

function hello() {
    console.log('This is export and import example')
}

export { hello }
let a = 'string'
let b = true
let c = 10

let func = () => c

export { func, a, b, c }

export let vari = "Modules ES6 types"