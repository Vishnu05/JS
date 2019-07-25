
/** Creating dom elements  */


console.log('this is creating events in dom ~')

let p = document.createElement('label')
let pp = document.createTextNode('CreateElement')

let nos = document.getElementById('cret')
let eleCret = document.createElement('label')
eleCret.textContent = 'New element is created...'
console.log(eleCret)
console.log(nos)
nos.appendChild(eleCret)

let ullist = document.getElementById('ullist')
let adlist = document.createElement('li')
adlist.textContent = 'List has been created successfully and added to dom node!!'
ullist.appendChild(adlist)
console.log(ullist)
let divs = document.createElement('input')
//document.body.appendChild(divs) ;
console.log(divs)
console.dir(divs)

 /** The element used to add a new node in dom  */
const newList = document.getElementById('lll')
let lis = document.createElement('li')
lis.textContent = 'capgemini'
console.log(lis)
newList.appendChild(lis)

function tpe() {
    let code1 = document.getElementById('code1')
    console.log(code1.value)
    let liss = document.createElement('li')
    liss.textContent = code1.value
    ullist.appendChild(liss)
}

 let keyBo = document.getElementById('keyBo')
 console.dir("ji")

//  let adevn = document.getElementById('adeven')
//  adevn.addEventListener()

let scope = 'hi'

if (true) {
    scope = 1 
}

let sp = () => {
    console.log(scope)
    scope = 'Values are changed when you declare as global variable '
}; 

sp()

console.log(scope)
