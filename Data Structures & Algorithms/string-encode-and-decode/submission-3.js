class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        if(strs.length === 0) return '';

        for (let str of strs) {
            res += `${str.length}#${str}`
        };

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let p1 = 0;

        if (str.length === 0) return [];

        while (p1 < str.length){
            let p2 = p1;
            while (str[p2] !== '#'){
                p2++;
            }

            const len = Number(str.slice(p1, p2));
            res.push(str.slice(p2+1, p2+1+len));
            p1 = p2 + 1 + len;
        }

        return res;
    }
}
