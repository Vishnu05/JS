
import { one, two, result } from "./globalVariable.js";

export function ad() {
    result.innerHTML = parseFloat(one.value) + parseFloat(two.value)
}
