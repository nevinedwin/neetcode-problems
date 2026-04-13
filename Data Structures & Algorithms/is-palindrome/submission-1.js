class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let p1 = 0;
        let p2 = cleanedString.length - 1;

        while (p1 < p2){
            if (cleanedString[p1] !== cleanedString[p2] ){
                return false;
            }
            p1++;
            p2--;
        }

        return true;
    }
}
