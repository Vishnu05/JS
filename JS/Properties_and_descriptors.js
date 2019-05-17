
/** Properties and descriptors */

let obje = {
    protot: 'String',
    ype: 324,
    power: 'Objects are powerful'
}

console.log(obje)

/** this remove only property  */
delete obje.protot

delete obje

console.log(obje)

let descriptor = Object.getOwnPropertyDescriptor(obje, 'power')
console.log(JSON.stringify(descriptor))

/** Json to <=> Objects  */

let computer = {

    monitor: 'lenova',
    keyboard: 'logitech',
    mouse: 'logitech',
    processor: 'i5',
    ram: 8
}

console.log(computer)

console.log(JSON.stringify(computer))
//console.log(JSON.parse(computer))

let cpu = {
    "motherboard": "intel",
    "Ramtype": "ddr ram",
    "processor": "i5",
    "core": 4
}

/** Cool right */
console.table(cpu)
// console.log(JSON.parse(cpu))

let nums = [2, 3, 6, 6, 5]
let set = new Set()
console.log(nums.length)
for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
        set.delete(nums[i])
    } else {
        set.add(nums[i])
    }
}

console.log(set)