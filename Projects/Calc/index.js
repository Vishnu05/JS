
// get the two input values 
const first = document.getElementById('first')
const second = document.getElementById('second')

const answer = document.getElementById('ans')

// passing value arguments

// creating a paragram element to display the results 
const ans = document.createElement('p')


/** Need to be refactored */

const add = () => {
    console.log('Addition function...')

    ans.textContent = 'Addition results are : ' + (parseInt(first.value) + parseInt(second.value))
    answer.appendChild(ans)

}

const sub = () => {

    ans.textContent = 'Subtraction results are : ' + (parseInt(first.value) - parseInt(second.value))

    answer.appendChild(ans)
}

const div = () => {

    ans.textContent = 'Divison Quotient results are ; ' + (parseFloat(first.value) / parseFloat(second.value)) +
      ' , \n'+  (' Division remainder results are : ' + (parseFloat(first.value) % parseFloat(second.value)))

    answer.appendChild(ans)

}


const mul = () => {

    ans.textContent = 'Multiplication results are : ' + (parseFloat(first.value) * parseFloat(second.value))

    answer.appendChild(ans)
}