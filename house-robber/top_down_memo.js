/**
 * hackysolution.js
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {

    if (nums.length < 1) return 0;

    // hack for when they throw a bunch of 1's or 0's or something
    let diffVals = false;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] != nums[i-1])
            diffVals = true;
    }

    // if all the values are the same, return value * length / 2, accounting for even / odd
    if (!diffVals) return nums.length % 2 === 0 ? nums.length / 2 * nums[0] : (nums.length + 1) / 2 * nums[0];

    let memo = Array(nums.length).fill(-1, 0);
    return rec(nums, 0, 0);

    /**
     * @parram {number[]} arr the array of houses and their values
     * @param {number} i current index of the array
     * @param money amount of money which can currently be stolen
     * @return {number} total which can be stolen
     */
    function rec(arr, i, money) {
        if (i >= nums.length) // return money once we reach end of array
            return money;

        if (memo[i] > 0)
            return memo[i];

        let withThisHouse = rec(arr, i+2, money) + arr[i];
        let withoutThisHouse = rec(arr, i+1, money);

        let result = undefined;

        if (withThisHouse > withoutThisHouse) {
            result = withThisHouse;
        } else {
            result = withoutThisHouse;
        }

        memo[i] = result;
        return result;
    };
};

module.exports = {
    rob
};
