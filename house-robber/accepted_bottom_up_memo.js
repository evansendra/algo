/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let max = function(a, b) {
        return a > b ? a : b;
    }

    let sums = Array(nums.length).fill(0);

    nums.forEach(function(num, idx, arr) {
        if (idx === 0)
            sums[idx] = nums[idx];
        else if (idx === 1)
            sums[idx] = max(nums[idx], nums[idx-1]);
        else
            sums[idx] = max(sums[idx-2] + num, sums[idx-1]);
    });

    // return 0 if the array is empty since we can't steal shit
    return nums.length > 0 ? sums[nums.length - 1] : 0;
};

module.exports = {
  rob
};
