
// varibale declarations
let $ = '234'
console.log($)
$ = 1;
console.log($)

num = 123

//undefined if the value is declared and not defined
let df;
console.log(df)

 let a=5

// prompt(a)
//alert('value')

function b(){
    
    return "value" 
}

// ` backtics are one way to say this is string and with help of ${we can bind data}
console.log(`rock paper "game"${''}` + "  " + typeof a)



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


