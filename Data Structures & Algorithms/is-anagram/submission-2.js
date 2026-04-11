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
            if (hashMap.has(s[i])) {
                hashMap.set(s[i], hashMap.get(s[i]) + 1);
            }else {
                hashMap.set(s[i], 1);
            }
        }

        for (let j =0; j < t.length; j++){
            if (hashMap.has(t[j])) {
                hashMap.set(t[j], hashMap.get(t[j]) - 1);
            } else {
                return false;
            }
        }

        for (const [key , value] of hashMap) {
            if (value !== 0) {
                return false;
            }
        }

        return true;
    }
}
