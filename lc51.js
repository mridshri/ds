/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:

Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 

Constraints:

1 <= n <= 9

https://leetcode.com/problems/n-queens
*/
function solveNQueens(n: number): string[][] {
    var res = [];
    var col = new Set();
    var pDiag = new Set();
    var nDiag = new Set();

    var board = [];
    for(let i = 0; i < n; i++){
        board[i] = [];
        for(let j = 0; j<n; j++){
            board[i][j]= ".";
        }
    }

    function backTrack(r: number): string[][] {
        let copy = []
        if (r == n) {
            for (let lRow = 0; lRow < n; lRow++) {
                copy[lRow] = board[lRow].join('');
            }
            res.push(copy);
            return;
        }
        for(let c = 0; c < n; c++){
            if(col.has(c) || pDiag.has(r+c) || nDiag.has(r-c)){
                continue;
            }
            col.add(c);
            pDiag.add(r+c);
            nDiag.add(r-c);
            board[r][c] = "Q"

            backTrack(r+1);

            col.delete(c);
            pDiag.delete(r+c);
            nDiag.delete(r-c);
            board[r][c] = ".";        
        }
        
    }
    backTrack(0);
    return res;
};
