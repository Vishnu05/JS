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

console.log(window.document.head)

function name(x) {

    return x
}

console.log(name('Vishnu'))

let tg = document.getElementsByTagName('li')
console.log(tg)

let cn = document.getElementsByClassName('uil')
console.log(cn)

//querySelector which will pick the css element and return it
/**
 * querySelector vs querySelectorAll 
 * qs = it select only sepicifed element
 * qsa = will select all the css element in DOM or object
 */
let qs = document.querySelectorAll('li')
console.log(qs)

console.log(Node.DOCUMENT_NODE)
console.log(Element.length)

//eventListener

let ao = document.getElementById('one')
var tw = document.getElementById('two')
let sm = document.getElementById('sum')

/** click
 * mouseenter - when the cursor enter to element event is triggered
 * mouseleave - when cursor leaves the element event is triggered 
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
    OnCh.addEventListener('mouseenter', () => {
        console.log(OnCh.value + " : Charecter length : " + OnCh.value.length)
        document.getElementById('ochane').innerHTML = `Values are : ${OnCh.value.toUpperCase()}`
    }
    )
}

function onf() {
    let onv = document.getElementById('on')
    onv.value = onv.value.toUpperCase()
}

// removing addEventListner .. ? ?

function paf() {
    let pav = document.getElementById('popid')
    console.log(pav)

    pav.addEventListener('mouseover', () => {
        alert('Yo you touched it!')
    })
}

//let rmb = pav.getElementById('rm').removeEventListener('click', () => console.log('remove'))
/* .removeEventListener('click', () => {
console.log('Event Listener Removed Successfully')
}) */

console.log(Node)
console.log(Element)
console.log(EventTarget)
console.log(document.body)

function elem(...a) {
    console.log(a)
}

elem(document.body instanceof Node, document.body instanceof Element, document.body instanceof HTMLElement,
    document.body instanceof EventTarget)

let d = document.body
console.log(d.nodeType)

// nodes parent and childNode

console.log(document.childNodes)
let bod = document.getElementsByTagName('body')
console.log(bod)
console.log(Node.childNodes)

/**
 * Div vs Span 
 * Div - is large container, it has block level scope and occupy the whole id in document 
 * Span - Inline element where this can have spefic access till that property  (Need more clarification)
 */
let inl = document.getElementById('in')
inl.addEventListener('mouseover', () => console.log('inline element'))


let blocks = document.getElementById('blo')
blo.addEventListener('mouseover', () => console.log('block level element'))

let ot = document.getElementById('ot').outerHTML = 'HTMLs'

let op = document.body.firstChild
console.log(op)

console.log(window.outerHeight)
document.write('DOM ' + navigator.userAgent + " ||| \n : " + navigator.platform + navigator.javaEnabled())

document.body.style.background = ''

console.log(location)

console.log(document.body)

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

/* Nodes check */
for (let i = 0; i < document.body.childNodes.length; i++) {
    // console.log(document.body.childNodes[i])
}

console.log(document.body.parentNode === document.documentElement)

for (let a of document.body.children) {
    // console.log(a)
};


/** Changing inner html doesn't work */
let iht = document.getElementById('ihe').innerHTML = document.getElementById('iht').innerHTML  // ? why innerHTML
console.log(iht)

document.getElementById('att').style.color = 'red'