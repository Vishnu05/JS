

let fn = document.getElementById('fn')
let ln = document.getElementById('ln')

let form = document.getElementById('form')



function save() {

    console.log('save is called')
    
    //create a dom element  
    let para = document.createElement('p');


    para.style.color = "red"

    // create a text node 
    let text = document.createTextNode('Form has been submitted')


    console.log("creating a text node : ", text)

    // attach the text node with the new element created 
    para.appendChild(text)

    // append it
    form.append(para)

    // after certian interval remove the node
    setTimeout(() => {
        para.remove(para)
    }, 3000)

}