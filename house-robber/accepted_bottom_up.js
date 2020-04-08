/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let max = function(a, b) {
        return a > b ? a : b;
    }

    let adjacentSum = 0;
    let nonAdjacentSum = 0;

    nums.forEach(function(num, idx, arr) {
        if (idx === 0) {
            adjacentSum = nums[idx];
        } else if (idx === 1) {
            nonAdjacentSum = adjacentSum;
            adjacentSum = max(nums[idx], nums[idx-1]);
        } else {
            let tmp = adjacentSum;
            adjacentSum = max(nonAdjacentSum + num, adjacentSum);
            nonAdjacentSum = tmp;
        }
    });

    // return 0 if the array is empty since we can't steal shit
    return nums.length > 0 ? adjacentSum : 0;
};

module.exports = {
  rob
};
