class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length -1;

        while (p1 < p2) {
            const sumVal = numbers[p1] + numbers[p2];
            if ( sumVal === target) {
                return [ p1+1, p2+1 ];
            } else if (sumVal < target){
                p1++;
            } else {
                p2--
            }
        }

        return [];
    }
}
