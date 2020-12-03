
/** Class in js */

class Js {

    Js() {
        console.log('JS to have class and constructor')
    }
}

let js = new Js()
js.Js()

// var cls = new Cls()

/** It literally work like java constructor */
class Cls {

    /** This is how constructor works in js with constructor keyword */
    constructor(name) {
        console.log('constructor ' + name)
    }

    /** JS can have only one constructor or else it will thrown an error */
    /* constructor(name, cl) {
        console.log('second constructor')
     }*/

    /** This doesn't work */
    Cls() {
        console.log('Default constructor type ...?')
    }
}

let ob = new Cls('Vishnu')

let number = 23.3

/** To check the type  */
console.log(typeof number)

class jsClass {

    /** Constructor will get the parameters and it will be set to firstname */
    constructor(name) {
        this.firstName = name
    }

    getName() {
        /** the value will be directly accessed by this.firstName */
        console.log(this.firstName)
    }
}

let value = new jsClass("Vishnu Thamizharasan")
value.getName()


//  class extends funcationality 


class Calculator {

    // throws error while declaring let, const and var ??
    // let x = 4;
    // var x =4;

    // class fields 
    x = 5
    y = 10
    // x = prompt('Enter the value of x ')
    // y = prompt('Enter the value of y ')

    s() {
        console.log(' Value of x and y ', this.x, ' : ', this.y)
        console.log('value of this : ', this)
        return this.x + this.y;
    }

     meth() {
        return 'hi'
    }
}

ob = new Calculator()
console.log('Value from the Calculator : ', ob.s())

// Class can be reused and the functionality to 
class subtraction extends Calculator {

    s() {
        return this.x - this.y
    }
}

ob = new subtraction
console.log('Value of subtraction is ', ob.s())

