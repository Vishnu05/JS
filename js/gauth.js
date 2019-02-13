

 let a=5

// prompt(a)
//alert('value')

function b(){
    
    return "value" 
}

function param(value,name){
    return value + name
}

console.log(param(1,'name'))

console.log(b())
function callback(confirms, yes, no) {

    if (confirm(confirms)) {
        yes()
    }
    else no()
}

let bc=123
let bcc=String(bc)
console.log(bc)

callback('callback function', function () { alert('request') }, function () {
    alert('response')
})

let cg={
    id: 13123,
    name:"vishnu",
    location : "chennai",
    age: true
}

console.log(cg)

