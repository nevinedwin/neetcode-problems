class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};

        for (let i = 0; i < nums.length; i++) {
            const ele = nums[i];
            if (hashMap[ele] !== undefined) {
                return[hashMap[ele], i];
            } else {
                const d = target - ele;
                hashMap[d] = i;
            }
        }
        return result;
    }
}
