
let checklist = document.getElementById("checklist")
console.log(checklist)

let items = checklist.querySelectorAll('li')
console.log(items)

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', editItems)
}

window.focus
function editItems() {
    this.className="edit"
    var input=this.querySelector('input')
    
    console.log(input)

}