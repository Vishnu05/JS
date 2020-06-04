

/** Const variable the value cannot be changed or modified and resassigned*/

let example = "let is scope level variable"
const ex = "Fixed one this cannot be altered or changed"

/** values before changing */
console.log(example)
console.log(ex)

/** values and type are changing now */
example = {
    phone: "basic",
    os: "not android"
}

/** below code will throw error because const value cannot be reassigned or cannot be changed*/
//ex = {}
example = "let values are changed"
// ex = true

console.log(example)

/** Examples with object */

let objectLet = {
    phone: "basic",
    user: "me",
    os: "not android"
}

const objectConst = {
    phone: "Realme 3 pro",
    user: "mom",
    os: "Android color os"
}

console.log(objectLet)
console.log(objectConst)

/** Modifying the object it will not throw an error
 * inner value can be modified and reassinged and new value is good 
 */

objectLet.phone = "basic samsung"
objectLet.keypad = "keypad"

objectConst.phone = "Realme 3 pro good camera quality"
objectConst.keypad = "touch"

console.log(objectLet)
console.log(objectConst)

/** Reassigin the varible with object */

objectLet = {
    value: "let Values can be reassigned again"
}
console.log(objectLet)

/** Throws an error */
// objectConst = {}

/** Functions same as object we can modify it but cannot be ressagined */

let funLet = (name) => {
    return name
}

const funConst = (name) => {
    return name
}

console.log(funLet('Vishnu'))
console.log(funConst("Thamizharasan"))

funLet = (a, b) => {
    return a + b
}

/** error */
//funConst = (a, b) => {}

console.log(funLet(10, 20))

