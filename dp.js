// Kadane's algorithm:
// Given an of integer array, find pair of ADJACENT elements that has the largest product
function adjacentElementsProduct(nums) {
  // When we see adjacent we will to implement Kadane's algorithnm which template goes as follows:
  let maxProduct = -Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    maxProduct = Math.max(maxProduct, nums[i] * nums[i + 1]);
  }
  return maxProduct;
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

function maxSubarray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
// console.log(maxSubarray([5, 4, -1, 7, 8]));

function maxProfit(prices) {
  let minimumPrice = Infinity;
  let maxEarnings = 0;
  for (const price of prices) {
    // Obtain the minimum
    minimumPrice = Math.min(minimumPrice, price);
    // The max difference is the max proft that will be earned
    maxEarnings = Math.max(maxEarnings, price - minimumPrice);
  }

  return maxEarnings;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

function zeroToOneKnapsack(profits, weights, capacity) {
  return knapsackHelper(0, profits, weights, capacity);
}

function knapsackHelper(idx, profits, weights, capacity, memo = []) {
  // IF the capacity is less than zero, or idx exceeds the length return 0
  if (idx >= profits.length || capacity <= 0) return 0;
  memo[idx] = memo[idx] || [];
  if (memo[idx][capacity] !== undefined) return memo[idx][capacity];
  // Zero to one knapsack means to include and exclude:
  let included = 0,
    excluded = 0;

  if (weights[idx] <= capacity) {
    included =
      profits[idx] +
      knapsackHelper(idx + 1, profits, weights, capacity - weights[idx], memo);
  }
  excluded = knapsackHelper(idx + 1, profits, weights, capacity, memo);
  memo[idx][capacity] = Math.max(included, excluded);
  return memo[idx][capacity];
}

// console.log(zeroToOneKnapsack([1, 6, 10, 16], [1, 2, 3, 5], 7));
