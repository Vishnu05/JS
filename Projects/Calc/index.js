
// get the two input values 
const first = document.getElementById('first')
const second = document.getElementById('second')

const answer = document.getElementById('ans')

// passing value arguments

// creating a paragram element to display the results 
const ans = document.createElement('p')
// ans.style.color = blue


// diabling all the button, if the values are empty 

const disableButton = () => {

    const addBut = document.getElementById('add')
    const subBut = document.getElementById('sub')
    const divBut = document.getElementById('div')
    const mulBut = document.getElementById('mul')

    if (first.value === '' || second.value === '') {
        subBut.disabled = true
        addBut.disabled = true
        divBut.disabled = true
        mulBut.disabled = true
    } else {
        subBut.disabled = false
        addBut.disabled = false
        divBut.disabled = false
        mulBut.disabled = false
    }
}

// on initial page loads, all the buttons are disabled 
disableButton()

/** Need to be refactored */

const add = () => {
    console.log('Addition function...')

    ans.textContent = 'Addition results are : ' + (parseInt(first.value) + parseInt(second.value))
    answer.appendChild(ans)

}

const sub = () => {
    console.log('Subtraction function...')

    ans.textContent = 'Subtraction results are : ' + (parseInt(first.value) - parseInt(second.value))

    answer.appendChild(ans)
}

const div = () => {
    console.log('Division function...')
    ans.textContent = 'Divison Quotient results are ; ' + (parseFloat(first.value) / parseFloat(second.value)) +
        ' , \n' + (' Division remainder results are : ' + (parseFloat(first.value) % parseFloat(second.value)))

    answer.appendChild(ans)

}


const mul = () => {
    console.log('Multiplication function...')

    ans.textContent = 'Multiplication results are : ' + (parseFloat(first.value) * parseFloat(second.value))

    answer.appendChild(ans)
}