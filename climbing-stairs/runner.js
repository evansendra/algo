/**
 * top down, slow for large n
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let recursiveStep = function(stairNum) {
        if (stairNum > n)
            return 0;
        if (stairNum === n)
            return 1;

        return recursiveStep(stairNum + 1) + recursiveStep(stairNum + 2);
    }

    return recursiveStep(0);
};

/**
 * top down with memoization
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function(n) {
    let mem = Array(n+1).fill(0);

    let recursiveStep = function(stairNum) {
        if (mem[stairNum] > 0)
            return mem[stairNum];
        if (stairNum > n)
            return 0;
        if (stairNum === n)
            return 1;

        let ret = recursiveStep(stairNum + 1) + recursiveStep(stairNum + 2);
        mem[stairNum] = ret;
        return ret;
    }

    return recursiveStep(0);
};

/**
 * bottoms up
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
    let sum1 = 0;
    let sum2 = 1;
    let combinations = 0;
    for (let i = 1; i <= n; ++i) {
        combinations = sum1 + sum2;
        sum1 = sum2;
        sum2 = combinations;
    }
    return combinations;
};

// console.log(climbStairs0(44));
let start = new Date();
let cs1 = climbStairs1(1000);
let end1 = new Date() - start;

start = new Date();
let cs2 = climbStairs2(1000);
let end2 = new Date() - start;

console.log(cs1);
console.log("cs1 = cs2?", cs1 === cs2);
console.log("time cs1:", end1, "; time cs2:", end2);
