

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

console.log(arr.length)
console.log(arr[3].fun())

arr.pop();
arr.push(function a() { return 'pushing element to array' })
console.log(arr)

arr.unshift('Jon doe'); console.log(arr); //arr.shift()
//arr.length = 1; //truncating the array element by giving the size of array
console.log(arr)

console.log(Math.max(1,2,3,4,5,200))
delete arr[1]
console.log(arr)

arr=['split method in java script .']



console.log(arr)


