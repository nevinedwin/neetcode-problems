class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hashMap = new Map();

        for ( let i = 0; i < strs.length; i++) {
            let found = false;

            for (const [key, value] of hashMap) {
                if (this.checkAnagram(key, strs[i])) {
                    value.push(strs[i]);
                    found = true;
                    break;
                }
            }

            if (!found) {
                hashMap.set(strs[i], [strs[i]]);
            }
        }

        const result = [];
        for (const [key, val] of hashMap) {
            result.push(val);
        }

        return result;
    }

    checkAnagram(str1, str2) {
        if (str1.length !== str2.length) return false;
        const map = {};

        for (let i = 0; i < str1.length; i++) {
            map[str1[i]] = (map[str1[i]] || 0) + 1;
            map[str2[i]] = (map[str2[i]] || 0) - 1;
        };

        for (const key in map){
            if (map[key] !== 0) return false;
        };

        return true;
    };
}
