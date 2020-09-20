
let emailid = document.getElementById('emailval')
let passwd = document.getElementById('passwd')
let submit = document.getElementById('sub')

submit.disabled = true;

let emaillength

function validation() {

    emaillength = passwd.value
    console.log(emaillength.length)

    if (emailid.value != '' && passwd.value != '' && emaillength.length > 8) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }



    // if (emaillength < 8) {
    //     submit.disabled = true;
    // } else {
    //     submit.disabled = false;
    // }
}