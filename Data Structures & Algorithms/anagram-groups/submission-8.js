class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (const str of strs) {
            let key = this.createKey(str);
            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }

    createKey(str) {
        const count = new Array(26).fill(0);

        for (let k of str) {
            count[k.charCodeAt(0) - 97]++;
        }

        return count.join("#");
    }
}
