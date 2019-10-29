
let a = {
    name: 'cat',
    age: 1.5,
    func() {
        //  alert('this example : ' + this.name)
    }
}

let b = a;
a = null
console.log(b.name + " " + b.func())

let c = b.func;
//alert(c)

let user = {
    name: "John",
    go: function () {// alert(this.name)
    }
};

(user.go)()

function ab() {
    console.log('function expression call')
}

let ds = ab

user[Symbol]

let obj = {
    // name: 'vishnu',
    age: '12',
    valueOf() {
        return true;
    }
};

console.log(obj + 5)

argums = 12
function users(argum) {
    this.agrum = 1233,
        name = name
}


let us = new users('params')

console.log(us.agrum);
//;_proto_()

//calculator bug one

let ob = {
    read() {
        let a = prompt('enter two values', '')
        let b = prompt('enter two values', '')
        this.sum()
    },

    sum() {
        this.mul();
        return console.log(this.a + this.b);

    },

    mul() {
        return console.log(this.a * this.b);
    }
};

//let Calculator = new ob();
//ob.read()


let set = 'string methods'
let sets = 23.34234
console.log((set.toUpperCase() + " " + sets.toFixed(99)));

set.prim = 123
//alert(set.prim)
console.log(1e20000)


a = true;
console.log(set.length)
for (let a of set) {
    //console.log(a)
}

set.sub
/*
 while(a){
    let a= prompt('Enter the number')
    if(a===Number){
        a=false
    }
 } */

//alert('\\vishnu\\')

//alert(arr) 

let str = 'hello javascript i"m going to do a serach'

console.log('indexOf method : ' + str.indexOf('e', 2))


let eg = {
    ironman: "tonystark",
    captian: "steven",
    avengers: function () {
        return this.ironman + " " + this.captian
    }
}

console.log(eg.avengers())
