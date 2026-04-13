class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;
        let right = 1;

        while (right < prices.length) {
            if (prices[right] > prices[left]){
                const profitNow = prices[right] - prices[left];
                profit = Math.max(profit, profitNow);
            } else {
                left = right;
            }
            right++;
        };

        return profit;
    }
}
