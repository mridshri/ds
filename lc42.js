/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

https://leetcode.com/problems/trapping-rain-water
*/
function trap(h: number[]): number {


    let res = 0;
    let hLen = h.length;
    if(hLen == 0) return 0;
    let l =  0;
    let r =  hLen-1;
    let lMax = h[l];
    let rMax = h[r];
    
    while(l<r){
        if(lMax < rMax){
            l++;
            lMax = Math.max(lMax, h[l]);
            res = res+ lMax-h[l];
        } else {
            r--;
            rMax = Math.max(rMax, h[r]);
            res = res + rMax-h[r];
        }
    }
    return res;
};
