
let nums = [2, 3, 6, 6, 5]
let set = new Set()
console.log(nums.length)
for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
}

let nums1 = []

let j = 0;
for (let i of set) {
    nums1[j++] = i;
}

for (let i = 0; i < nums1.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums1.length; j++) {
        if (nums1[j] < nums1[count]) {
            count
        }
    }

}

console.log(nums1)

console.log(set)