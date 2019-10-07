
/** A big mistake for a very long time I have been made is I was not mentioning the extension of file like (.js) instead
 *  giving the file name without the extension and anothe one is giving the values in curly braces(before I was not using curly
 *  braces it showed me error)
 */

<<<<<<< HEAD
import { hello , vari } from "./exports.js";
import { a, b, c, func } from "./exports.js"
=======
import { hello, vari } from "./exports.js";
import { a, b, c, func } from "./exports.js"
import { examp } from "./promises.js"
//Uncaught SyntaxError: The requested module './promises.js' does not provide an export named 'default'
>>>>>>> 62f00f49cbc0f70f040efce80dcde201a8876180
// import vari from "./exports.js" this is throwing error because of curly braces

hello()
console.log('hiiiii')
console.table(a, b, c, func)
<<<<<<< HEAD
console.table(vari, a)
=======
console.table(vari, a)
console.log(examp)
>>>>>>> 62f00f49cbc0f70f040efce80dcde201a8876180
