
let username = document.getElementById('username')

let userDisplay = document.getElementById('userDisplay')

function user() {
    
    let a = username.value
    userDisplay.innerHTML = a
    console.log('function call', a)
}