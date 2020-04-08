const data = [2, 4, 6, 10]; // n = 4
// const data = [114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,
  // 187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240]; // n = 48

console.info("data length:", data.length);

const bottomup = require('./accepted_bottom_up.js');
const topdownmemo = require('./top_down_memo.js');
const topdown = require('./slow_top_down.js'); // 2^n !! for 48 inputs took about 2 minutes...

// console.log("Bottom up:", bottomup.rob(data));

console.log("Top down memo:", topdownmemo.rob(data));

// console.log("Top down:", topdown.rob(data));
