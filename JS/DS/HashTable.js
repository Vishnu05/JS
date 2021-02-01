

// finding out the occurance of the character, string or numbers in array

let arr = [2, 4, 6, 3, 2, 2, 3]

let map = new Map()
for (i of arr) {

    // checking if the map has key
    if (map.has(i)) {
        // if the key has update the value
        map.set(i, map.get(i) + 1)
    } else {
        // insert the key and value
        map.set(i, 1)
    }
}

console.log('Map : ', map)
