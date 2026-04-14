class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false;

        const windowSize = s1.length;
        
        const s1index = this.createIndexVal(s1); 

        let l = 0;
        let r = l + windowSize - 1;

        while (r < s2.length) {
            const subString = s2.slice(l, r+1);
            const ind = this.createIndexVal(subString);

            if (ind === s1index) return true;
            r++;
            l++;
        }
        return false;
    }

    createIndexVal (s){
        const result = Array.from({length: 26}, () => null);

        for (let i = 0; i < s.length; i++) {
            const indx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            result[indx] = (result[indx] || 0) + 1;
        }
        return result.join('#');
    }
}
