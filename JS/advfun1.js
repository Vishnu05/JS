

//window properties
console.log(window.innerHeight)

//var variable and properties are became as window property
var a = 5
console.log(window.a)
window.a = 'Window variable changed'
console.log(a)

let b = 10
console.log(window.b) // undefined


console.log(this)
console.log(window)

window.globalObj = {
    survey: 'application',
    tdd: 'unit test',
    server: 'java'
}

console.log(window.globalObj)
console.log(window.globalObj.survey)
console.log(window.Promise)
console.log(typeof a)

//calculating function parameter length
function a1(x) { }
function a2(x, y, z) { }
function a3(x, y, z, s, d) { }
console.log(a1.length + ' : ' + a2.length + ' : ' + a3.length)

//inner function call nested function call

function call1() {

    function call2() {

        function call3() {
            return 'callback functions'
        }

        return call3();
    }

    return call2()
}

console.log(call1())

