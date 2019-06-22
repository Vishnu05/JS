
import {email, pwd, submit} from "./globalVariable"

submit.disabled = true
export function validate() {
    submit.disabled = true

    if (email.value != '' && pwd.value != '') {
        submit.disabled = false
    }
}
