
const alp = ['A', 'B', 'C', 'D', 'E', 'F']
const num = [1, 2, 3, 4, 5, 6, 7]

const [a, b] = alp
console.log(a, b)

// spread parameter 
console.log(...alp, ...num)

// filter and map 

const filterMap = ['java', 'python', 'javascript', 'ruby', 'swift']
// console.log(filterMap.map((value, iteration) => {
//     console.log('Values : ', value, iteration)
// }))

const nestedObj = [
    {
        emp: "jake", experience: [
            { java: 3, springBoot: 4 }, { js: 2, reactJS: 2 }
        ]
    },
    {
        emp: "tom", experience: [
            { java: 3, springBoot: 4 }, { js: 2, reactJS: 2 }
        ]
    }, {
        emp: "robert", experience: [
            { java: 3, springBoot: 4 }, { js: 2, reactJS: 2 }
        ]
    }
]

console.log('nestedObj ', nestedObj)


nestedObj.map((k) => {
    console.log("Map value : ", k)
})

nestedObj.filter((k) => (
    console.log("Filter Value : ", k)
))

nestedObj.reduce((k) => (
    console.log("Reduce value : ", k)
))

// to check the value and then iterate over map
nestedObj.filter((k) => (
    k.emp == 'tom'
)).map((k) => (
    console.log(' Filter map : ', k),
    k.experience.map((k) => {
        console.table(k)
    })
))

