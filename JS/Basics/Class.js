
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

    /** JS can have only one constructor */
    /* constructor(name, cl) {
        console.log('second constructor')
     }*/

    /** This doesn't work */
    Cls() {
        console.log('Default constructor type ...?')
    }
}

let ob = new Cls('Vishnu')

