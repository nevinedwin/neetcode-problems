class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
       const rowSet = Array.from({length: 9}, () => new Set());
       const colSet = Array.from({length: 9}, () => new Set());
       const gridSet = Array.from({length: 9}, () => new Set());

       for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const cellValue = board[r][c];

            if(cellValue === '.') continue;

            const box = Math.floor(r/3) * 3 + Math.floor(c/3);

            if (rowSet[r].has(cellValue) || colSet[c].has(cellValue) || gridSet[box].has(cellValue)){
                return false;
            }

            rowSet[r].add(cellValue);
            colSet[c].add(cellValue);
            gridSet[box].add(cellValue);
        }
       }

       return true;


    }
}
