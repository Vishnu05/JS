
/** error handling this is works in runtime only */
try {
    console.log("hey this is starting statement: ")
    console.log(hiihi)
    //  alert("hey this is ending statement: ")
} catch (hi) {
    console.log("there has been some error in your code")
}

let arr = [2, 'string', obs = { blue: 'Color', human: 'eyes' }]
console.log(arr)
console.dir(arr)


/** try catch finally */

try {
    dfasd
} catch (error) {
    console.log("error had been captured : " + error)
} finally {
    console.log("finally will execute no matter what")
}

/** try catch works in synchornous  */

try {

    setTimeout(() => console.log(23),
        console.log("error cannot be catched inside the setTimeout")
        , uns //undefined 
        , 1000);
} catch (e) {
    console.log('time out expception : ' + e)
}


/** name, message and stack */

try {
    obje
} catch (e) {

    console.log(e.name)
    console.log(e.message)
    console.log(e.stack)
}


// Error handling with class 

class Error {

    age() {
        throw 'error is thrown '
    }
}



let ob = new Error
// console.log('Error method ', ob.age())

console.log('hi how are ')

let age = document.getElementById('Value')
console.log('Age value is : ', age)
function ageCheck() {

    if (age.value > 18) {
        alert('You are qualified for voting ')
        console.log('Allowed')
    } else {
        return ageCheck(age.value = prompt('Try again'))

    }
}

