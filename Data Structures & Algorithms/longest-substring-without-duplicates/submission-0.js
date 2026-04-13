class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const hashSet = new Set();
        let left = 0;
        let maxLength = 0;

        for (let right = 0 ; right < s.length; right++){
            while (hashSet.has(s[right])){
                hashSet.delete(s[left]);
                left++;
            }
            hashSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
