//dry code bolierplate

function tm() {

    var a = document.getElementById('tmid').innerHTML = 'Dom has changed the content'
    const newLocal = a.fontcolor = 'blue';
    // document.writeln(newLocal)
    // a.fontsize='20px'   
    // console.log(a)    
}


function lii(name, value) {
    console.log(name, value)

    // switch(name){
    document.getElementById(name).innerHTML = value
    // }
    // let nas=document.getElementById('na').innerHTML='Vishnu'
    // let or=document.getElementById('or').innerHTML='Capgemini'
    // let de=document.getElementById('de').innerHTML='Software Engineer'
    // let ex=document.getElementById('ex').innerHTML='1'

}

function name(x) {

    return x
}

console.log(name('Vishnu'))

let tg = document.getElementsByTagName('li')
console.log(tg)

let cn = document.getElementsByClassName('uil')
console.log(cn)

let qs = document.querySelectorAll('li')
console.log(qs)

console.log(Node.DOCUMENT_NODE)
console.log(Element.length)

//eventListener

let ao = document.getElementById('one')
var tw = document.getElementById('two')
let sm = document.getElementById('sum')

/** click
 * mouseenter
 * mouseleave
 * mouseover // pinterleave does the same //
 * focus - when the cursor is placed in the element
 * keypress - keyboard events whenever a key is pressed event occurs //keyup ?? but it does same thing
 * blur - whenever leaving the element
 */

/* ao.addEventListener('click', () => {
    console.log(`event occuring`)
}) */

ao.addEventListener('input', add)
tw.addEventListener('input', add)

function add() {
    let val = parseFloat(ao.value) || 0
    let val1 = parseFloat(tw.value) || 0
    sm.innerHTML = 'Values of two sum : ' + (val + val1)
}

let tdl = document.getElementById('tdl')
tdl.addEventListener('mouseover', () => console.log('touched'))

//KEYBOARD EVENTS
let kp = document.getElementById('kb')
kb.addEventListener('keydown', fun)

function fun(e) {
    console.log(e.key + " : " + e.code) //key value
    console.log(e) // dom element 
    console.log(e.keyCode) // denotes the number of key
}

let wind = () => {
    console.log(window)
    console.log(isSecureContext)
}
wind()

//onchange event
function sclt() {

    let och = document.getElementById('oc').value
      document.getElementById('goc').innerHTML = `Hurrah!! you have Selected : ${och}`
    //och_hide.addEventListener('click',() => )
}

// element.value will return the value of 

function oncha() {

    let OnCh = document.getElementById('onch')
    //    document.getElementById('ochane').innerHTML = `Charecter length : ${OnCh.value.length}`
    OnCh.addEventListener('mouseleave', () => {
        console.log(OnCh.value + " : Charecter length : " + OnCh.value.length)
        document.getElementById('ochane').innerHTML = `Values are : ${OnCh.value}`
    }
    )
}