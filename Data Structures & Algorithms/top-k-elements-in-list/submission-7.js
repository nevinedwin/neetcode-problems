class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        const bucket = Array.from({length: nums.length + 1}, () => []);

        for (let i =0; i< nums.length; i++){
            freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
        };

        Object.entries(freqMap).forEach(([num, freq]) => {
            bucket[freq].push(num);
        });

        const result = [];
        for (let j = bucket.length - 1; j >= 0 && result.length !== k; j--){
            for (const num of bucket[j]){
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    };
}
