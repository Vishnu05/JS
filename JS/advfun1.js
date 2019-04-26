

//window properties
console.log(window.innerHeight)

//var variable and properties are became as window property
var a = 5
console.log(window.a)
window.a = 'Window variable changed'
console.log(a)

let b = 10
console.log(window.b) // undefined

// 'this' is global window property in browser
console.log(this)
console.log(window)

window.globalObj = {
    survey: 'application',
    tdd: 'unit test',
    server: 'java'
}

console.log(window.globalObj)
console.log(window.globalObj.survey)
console.log(window.Promise)
console.log(typeof a)

//calculating function parameter length
function a1(x) { }
function a2(x, y, z) { }
function a3(x, y, z, s, d) { }
console.log(a1.length + ' : ' + a2.length + ' : ' + a3.length)

//inner function call nested function call

function call1() {

    function call2() {

        function call3() {
            return 'callback functions'
        }

        return call3();
    }

    return call2()
}

console.log(call1())

//nfe - naming function expression
let nfe = function (who) {
    return `Hello, Agian ${who}`

}

console.log(nfe('My friend'))

//scheduling settimeout and timeinterval

let st = function () {
    return 'time out function.. start...'
}
//https://gitlab.com/vthamiz5/js/blob/973b3dfb3c7264bcbd9c802b4c084e808dfd3fc9/JS/advfun1.js#L67

// setTimeout(st(), 10000)

/* for (let as = 0; as < 4; as++) {
    console.log(setTimeout(st(), 10000))
}
 */
function times() {
    return setTimeout(function () {
        // alert('no way ..')
    }, 2000)
}

times()

let setTim = setInterval(() => {
    alert('Set Intervals')
}, 2000);

//clearInterval(setTim, 6000)
clearTimeout(setTim, 5000)
let it = 1
setInterval(function () {
    // func(it)
}, 100)

console.log(window.document.head)


/** Map is similar to object but the key value can be anytype */
let mps = new Map()
mps.set(1, 'Name')
mps.set('god', 'objectss')
mps.set(true, false)
console.log(mps)

for (let aaa = 0; aaa < mps.length; aaa++) {
    console.log(mps[0])
}

//new Map(['1','psdsa'],[2,'js'],[3,'java'])
//.forEach(logMapElements)

let fb = {
    name: 'Vishnu',
    fun() {
        return this.name;
    }
}
//console.log(setTimeout(fb.fun(), 1000))
console.log(fb.fun())

console.log(window.history)
console.log(Element);

let af = () => {
    return console.log('arrow function reduce code')
};
af();


let js = {
    standard: 'ecmascript',
    type: 'browser',
    features: ['html', 'css', 'javascript', 'dom', 'async call'],
    get() {
        this.features.forEach(
            //  features  => console.log('')
        )
    }
}

let objs = {
    ide: 'vs code',
    liscence: 'open source',
    lang_supt: ['js', 'html', 'css', 'python', 'mostly for forntend'],
    intelsence: 'true',
    git: 'support gitlens is better extension'
}

//console.log(Array.forEach(objs))
console.log(objs.lang_supt.forEach)

let cook = 'set=`cookies` empty spaces'
let cook1 = 'user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT max-age=30000'
document.cookie = encodeURIComponent(cook) + ' ' + encodeURIComponent(cook1)
console.log(document.cookie)

// arrow function dosen't have this ???
function funs() {
    console.log(this)
}

// parameterized arrow functions
let funn = (a, b) => {
    console.log(this)
    console.log('Parameter are passing : ' + a + b)
}

funs()
funn('Hello! ', 'Are you fine.. ?')