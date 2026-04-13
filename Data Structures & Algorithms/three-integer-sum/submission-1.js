class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = new Set();

        if (nums.length === 0) return [];

        for (let i = 0; i < nums.length; i++){
            const set = new Set();

            for (let j = i + 1; j < nums.length; j++){

                const reqVal = - (nums[i] + nums[j]);

                if (set.has(reqVal)){
                    result.add([nums[i], reqVal, nums[j]].sort((a, b) => a-b).join(','));
                }
                set.add(nums[j])
            }
        }
        return Array.from(result).map(str => str.split(',').map(Number));
    }
}
