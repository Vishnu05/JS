
var qws = document.querySelector('#cqw');
console.log(qws);

let cqf = function () {
    return document.getElementById('cqw').innerHTML = 'Query chAnginG'
}

/** Document write */
let els = document.getElementById('ell');
els.style.color = '';

function el() {
    document.write('Hello ')
}

let tags = document.getElementsByTagName('div') // collection of tag

for (let i of tags) {
    //  console.log(i)
}
let query = document
console.log(query)

document.body.style.background = "1#42ebf4"


let fnn = document.getElementById('fn');

//document.write(fnn)

function fun() {
    if (fnn === null) {
        document.getElementById('fun')
    }
}

function native() {
    //  return "Native function"
}
console.log(native)

var qw = document.querySelector('#fn');
console.log(qw);

/** Diff ways of declaration  */
() => { return 'arr' };
() => 'arr';

let nmaes = () => {
    alert('Javascript is better')
}

// console.clear()

let sb = document.getElementById('sb')
let ln = document.getElementById('lns')
console.log(sb)

/** when js is finshed loaded it is true after entering the name it never checks again so it is disabled forever 
 * to enable the js has to call it again like function call to check the values and condition (not true about this statement)
 */
if (ln.value == '') {
    sb.disabled = true
}

function validate() {
    if (ln.value == '') {
        //alert('Fill the name ')
        sb.disabled = true
    }

    if (ln.value != '') {
        sb.disabled = false;
    }
}

let fo = document.querySelectorAll('input');

/**QuerySelectorAll  */
for (let i = 0; i < fo.length; i++) {
    fo[i].addEventListener('click', () => console.log(fo[i])); // ? ? ?
}
console.count()
console.error('Error message to console //\\..........')
//console.exception('nope')

