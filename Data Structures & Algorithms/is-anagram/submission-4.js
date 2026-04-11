class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length  !== t.length) return false;

        const hashMap = new Map();

        for (let i = 0; i < s.length; i++) {
            hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
            hashMap.set(t[i], (hashMap.get(t[i]) || 0) - 1);
        }

        for (const [key , value] of hashMap) {
            if (value !== 0) {
                return false;
            }
        }

        return true;
    }
}
