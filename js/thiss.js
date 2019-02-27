

let obj = {

    id: 1,
    age: 10,
    country: 'india',
    func() {
        return this.country //  
    }
};

let objects = obj

obj = null

//alert(objects.func())

console.log()

let arr = [21, 'age', true, { company: 'capgemini', fun() { return 'array inside a object and function' } }, function () {
    return 'function call'
}];

let arr1 = arr;
console.log(arr.length)
console.log(arr[3].fun())

arr.pop();
arr.push(function a() { return 'pushing element to array' })
console.log(arr)

arr.unshift('Jon doe'); console.log(arr); //arr.shift()
//arr.length = 1; //truncating the array element by giving the size of array
console.log(arr)

console.log(Math.max(1, 2, 3, 4, 5, 200))
delete arr[1]
console.log(arr)

arr = ['split method in java script .']

arr = ['we', 'are', 'listening', 'capgemini', 'india', 'chennai']

console.log(arr.splice(0, 'karapakkam', 'pt'))
console.log(arr)
console.log(arr.slice(5, 7))

console.log(arr.concat(12, 34, 3543, 09))

console.log(arr.concat(arr1))
console.log(arr.indexOf(true))

let lengths = arr.map(iter => iter.length)
console.log(lengths + " sort : " + arr.sort())

arr = [2, 4, 13, 24, 54, 15, 'vishnu', 'thamizharasan']
//alert(arr.reverse())

for (let a of arr) {
    // console.log(a)
}

for (let a in objects) {
    console.log(objects[a])
}

console.log(arr.join()) //convets the array to string
console.log(Array.isArray(arr)) // check the array is array or not

//console.log(arr.split(","))

console.log(window.outerHeight)
document.write('DOM '+navigator.userAgent+" ||| \n : "+navigator.platform + navigator.javaEnabled())

document.body.style.background = ''

console.log(location)