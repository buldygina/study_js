let nums = [-100, -89, - 40, -15, 1, 12, 43, 96, 149]
for (let i in nums){
    nums[i] = nums[i] * nums[i]
}
let count = nums.length - 1
let swapped
do {
    swapped = false 
    for (let i = 0; i < count; i++) {
        if (nums[i] > nums[i+1]){
            a = nums[i]
            nums[i] = nums[i +1]
            nums[i+1] = a
            swapped = true
        }
       
    }
    count --

}
while(swapped)
console.log(nums)