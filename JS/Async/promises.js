

let check
check = 1

let promise = new Promise(function (reject, resolve){

    if (check) {
        resolve('promise and callbacks.....')
    } else {
        reject ('promise fails ')
    }
})

console.log(promise)

let promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve = {
            json: "these are json values",
            xml : '<xml are great for accessing data>'
        }
    }, 10)
})

console.log(promise1)

/** This is example for another modules  */

export let examp = 'why fetch are better than promises'