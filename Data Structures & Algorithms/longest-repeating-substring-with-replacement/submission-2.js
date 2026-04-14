class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;
        let maxFreq = 0;
        let maxLen = 0;

        let hashMap = {};

        while (r < s.length) {
            hashMap[s[r]] = (hashMap[s[r]] || 0) + 1;

            maxFreq = Math.max(hashMap[s[r]], maxFreq);


            while ((r-l+1) - maxFreq > k){
                hashMap[s[l]] = hashMap[s[l]] - 1;
                maxFreq = 0;
                Object.values(hashMap).forEach((f)=>{
                    maxFreq = Math.max(maxFreq, f);
                });
                l++;
            }

            if ((r-l+1) - maxFreq <= k) {
                maxLen = Math.max(maxLen,(r-l+1));
            }
            r++;
        }

        return maxLen;
    }
}
