

let s = 'javascriptloops'
let v = 'aeiou'

let a = s.split('')
let vv = v.split('')

for (let i of a) {
    //console.log(i)
    //if (a[i] ==  )
}


for (i = 0; i < a.length; i++) {

    if (v.includes(s[i])) {
        console.log(s[i])
        s[i] = ''
    } 
}

for (i = 0; i < a.length; i++) {
    if (s[i] != '') {
        console.log(s[i])
    }
 }