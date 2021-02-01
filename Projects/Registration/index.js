
let username = document.getElementById('username')

let userDisplay = document.getElementById('userDisplay')

function user() {

    let a = username.value
    userDisplay.innerHTML = a
    console.log('function call', a)
}

console.log('Hi hello')

let ar = [
    { id: 1, name: "Rome", country: "italy", aliveOrDead: true },
    { id: 1, name: "NYC", country: "US", aliveOrDead: true },
    { id: 1, name: "London", country: "UK", aliveOrDead: true },
    { id: 1, name: "szhenchen", country: "China", aliveOrDead: true },
]

let mapVar = ar.map( (key, value)  => {
    console.log(key, value)
})