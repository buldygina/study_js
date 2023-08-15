// задание 1
// let nums  = [15, 24312, 732812, 347193, 33, 51, 22, 123, 653, 284723894729]
//     console.log(nums)
//     console.log(nums[0])
//     console.log(nums[4])
//     console.log(nums[7])

let nums = [-10, -3, -1, 1, 18, 6]
for ( let i =0; i < nums.length; i++){
    nums[i] = nums[i] * nums[i]
}
console.log(nums)
let swapped
let sortCount = nums.length - 1
do {
    swapped = false
    for (let i = 0; i < sortCount; i ++){
        if (nums[i] > nums[i + 1]){
            console.log('сравниваю', nums[i], 'с ', nums[i + 1])
            let a = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = a
            swapped = true
        }

    }
    sortCount --
}
while(swapped === true)
console.log(nums)
// 3 задание
// let nums = [1, 1, 1, 1, 1, 1, 1, 1, 0,  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1]
// let counter = 0
// let max_value = 0
// for ( let i = 0; i < nums.length; i ++){
//     if (nums[i] === 1){
//         counter++
//     }
//     else{
//         if (max_value < counter){
//             max_value = counter
//         }
//         counter = 0
//     }
// }
// console.log('макс-ное кол-во единиц', max_value)
