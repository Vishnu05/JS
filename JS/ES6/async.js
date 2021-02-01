
console.log('Async and await ---- ')

function hello( ){
    console.log('Normal function')
    return 'hello'
}

async function Hello() {
    console.log('Asycn function')
    return 'Hello async'
}

hello()
Hello()