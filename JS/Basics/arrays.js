
/** Arrays is also a object there properties can be changed and modified */

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



/**Push and Pop 
 * push - it will add a element in last array
 * pop - removes the last element in array 
 * this is fast when compare to the shift and unshift; no need to re-arrange the whole array
*/
let arr = ['hey', 32, { name: 23 }, function () { return 'array function' }]

console.log(arr[3]())

arr.pop()

arr.push('Adding a element');

arr = [21, 'age', true, { company: 'capgemini', fun() { return 'array inside a object and function' } }, function () {
    return 'function call'
}];

let arr1 = arr;
console.log(arr.length)
console.log(arr[3].fun())

arr.pop();
arr.push(function a() { return 'pushing element to array' })
console.log(arr)

/** Shift and Unshift 
 * sfit - (pop) similar but it will removes the element from first
 * unshift - (push) add element in first
 * these two are more costly when compared to pop & push 
 * each and every element has to be shifted accordingly 
*/-
    arr.unshift('Jon doe'); console.log(arr); //arr.shift()
//arr.length = 1; //truncating the array element by giving the size of array
console.log(arr)

console.log(Math.max(1, 2, 3, 4, 5, 200))
delete arr[1]
console.log(arr)


/** Split and Splice
 * Splice - 
 * Slice - 
 * Split - 
 */
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

//for each with functions
arr.forEach(e => {
    console.log(e)
});

for (let a of arr) {
    // console.log(a)
}

for (let a in objects) {
    console.log(objects[a])
}

console.log(arr.join()) //convets the array to string
console.log(Array.isArray(arr)) // check the array is array or not

//console.log(arr.split(","))

//alert('hello'=='hello')

function instances() {
    this.name = 'javascript engine'
    console.log(this)
}

// ?  constructor
let inst = new instances()

function consts(params) {

    this.undef = 'objects top level'
    setTimeout(() => {
        console.log('parameters and arguments ' + this.undef);
    }, 0);

    console.log(params)
}

let nwo = new consts('arguments are first')

//from oops lang this is used to refer the current instance of object ex: java

let invar = 'Computer'
function th(invar) {
    invar = invar;
    return invar
}

console.log(th('Science'))

let arrr = [1, 4, 6, 8, 10]

console.log(arr.map(x => x * 2))

/** .map, filter, reduce 
 *  map can iterate over the object in array by the call back function 
 *  map methods creates a new array with calling of every new element
 *  Map is used to iterate all the elements by callBack function
 *  Reduce - 
 *  Filter - make  condtion and return values 
*/


let filters = [{ id: 1, name: 'vishnu' }, { id: 2, name: 'Thamizharasan' }, { id: 3, name: 'Capgemini' }, { id: 4, name: 'software engineer' }]

console.log(filters.map(filters => console.log(filters.id)))
let maps = filters.map(filters => filters.id)
console.log(' this is how maps iterates... swag map function ' + maps)
maps = filters.map(filters => filters.name)

console.log(maps)
console.log(filters)

let reduceFun = [{ salary: 1000, id: 3, currentlyEmployed: true, name: 'Abc' },
{ salary: 1000, id: 34, currentlyEmployed: true, name: 'amz' },
{ salary: 23423, id: 90, currentlyEmployed: false, name: 'cg' },
{ salary: 43000, id: 65, currentlyEmployed: true, name: 'boi' },
{ salary: 60000, id: 22, currentlyEmployed: false, name: 'fb' }
]

// using key value pair 

console.log(reduceFun.map((key, value) => {
    console.log(" Key value pair in Map : ", key, value)
}))

/** getting all the salary  */
console.log(reduceFun.map(reduceFun => reduceFun.salary))

/** Accumulation ??  Reduce */
let reduceVar = reduceFun.reduce((acc, reduceFun) => reduceFun.salary + acc, 0)
console.log('Reduce array function : ' + reduceVar)
console.log('Sums up : ' + filters.reduce((params, filters) => params + filters.id, 0))
console.log('Reduce a ' + filters.reduce(filters => filters))

/** filters  */

let filtersArray = filters.filter(filters => filters.name === 'vishnu')
console.log('Filters in javaScript arrays : ' + filters)

let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers.map(numbers => numbers))
/** arguments ??  */
console.log(numbers.reduce((acc, ni) => acc + ni))
/** Filters  */
console.log('filters function : ' + numbers.filter(numbers => numbers > 3))
console.error('to print error message console.error() is used')

/** Browsers are more matured when there is an empty array it eliminates all that and gives as empty and 
 * only display which array have values 
 */

let arry = []
arry[1] = 'Vishnu'
arry[1000] = 'Thamizharasan'
arry[343] = 'Capgmeini'
console.log(arry)

// Array.prototype.

// nested Array object 

console.log('----------------------------------------')

nestedArray = [
    {
        id: 1, laptop: 'hp', os: [
            { id: 1, family: 'windows', arch: [{ type: '64 bit' }, { type: '84 bit' }] },
            { id: 2, family: 'linux', arch: [{ type: '64 bit' }, { type: '84 bit' }] },
            {
                id: 2, laptop: 'dell', os: [
                    { id: 1, family: 'windows' },
                    { id: 2, family: 'linux' }]
            },
            {
                id: 3, laptop: 'accer', os: [
                    { id: 1, family: 'windows' },
                    { id: 2, family: 'linux' }]
            }
        ]
    }
]

console.log('Nested Array : ', nestedArray)

let nested = nestedArray.map((key) => {
    console.log('key ', key)
    console.log('Second object : ', key.os)
    key.os.map((val) => {
        console.log('Second object values : ', val.family)
        val.arch.map((third) => {
            console.log('Third obeject value : ', third.type)
        })
    })

})