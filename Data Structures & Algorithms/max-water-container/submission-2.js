class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterContent = 0;
        let p1 = 0;
        let p2 = heights.length - 1;

        while (p1 < p2) {
            const x = p2 - p1;
            const y = Math.min(heights[p1], heights[p2]);

            const vol = x * y;

            maxWaterContent = Math.max(maxWaterContent, vol);

            if (heights[p1] <= heights[p2]) {
                p1++;
            } else {
                p2--;
            }

        }
        return maxWaterContent;
    }
}
