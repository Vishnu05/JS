
/** creating element  */

let butt = document.getElementById('but')

// whenever body is loaded, addElement() function is invoked 
document.body.onload = setTimeout(() => {
    return addElement()
}, 3000)

function addElement() {
    console.log('On load function works ')

    // creating a new button element 
    let but = document.createElement('button')

    
    // with eventListener when ever user click alert will work
    but.addEventListener('click', () => {
        alert('your form has been submitted successfully')
    })

    but.style.color = 'blue'
    but.style.width = '90px'
    but.style.height = '50px'

    // create a textnode
    let content = document.createTextNode('Click Here to get your from ')

    // appending the textnode to the button element 
    but.appendChild(content)

    document.body.insertBefore(but, butt)

}
