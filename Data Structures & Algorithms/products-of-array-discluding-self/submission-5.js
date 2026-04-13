class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        const result = [];
        let zeroCount = 0;

        for (let i =0; i < nums.length; i++){
            if (nums[i] !== 0) {
                product *= nums[i];
            }else{
                zeroCount++;
            }
        }

        if (zeroCount > 1){
            return Array(nums.length).fill(0);
        }

        for (let i =0; i< nums.length; i++){
            if (zeroCount > 0){
                result.push(nums[i] === 0 ? product : 0);
            } else {
                result.push(product / nums[i]);
            }
        }

        return result;
    }
}
