// задание 1
let nums  = [15, 24312, 732812, 347193, 33, 51, 22, 123, 653, 284723894729]
for (let i = 0; i<= 10; i ++){
    nums.push(i)
console.log(nums[0])
    console.log(nums[4])
    console.log(nums[7])
}
// задание 2
let nums = [-10, -3, -1, 1, 6, 18]
for (let i in nums){
   nums[i] = nums[i] * 2
}
for (let i= 0; i >= 6; i++){
    nums.push(i)
}
console.log(nums)
