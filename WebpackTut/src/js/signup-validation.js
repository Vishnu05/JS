
import { email, pwd, submit } from "./globalVariable.js"

submit.disabled = true
function validate() {
    submit.disabled = true

    if (email.value != '' && pwd.value != '') {
        submit.disabled = false
    }
}

export { validate }