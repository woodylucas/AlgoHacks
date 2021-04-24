/*

Dynamic Programming: A method for solving complex problems by breaking down a collection of similar sub-problems, solving each 
those subproblems just once, and storing their soluions.


When you know it's dynamic programming ? 
Overlapping Subproblems: calculating certain subproblems more than once

Optimal Substructure 


*/

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

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Memoization Top Down Approach
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
// Bottoms Up Approach
function knapsackProblem(items, capacity) {
  if (items.length === 0 || capacity <= 0) return [0, []];
  const knapsackValues = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = Array.from({ length: capacity + 1 }, () => 0);
    knapsackValues.push(row);
  }

  for (let idx = 1; idx < items.length + 1; idx++) {
    const currentWeight = items[idx - 1][1];
    const currentProfit = items[idx - 1][0];
    for (let c = 0; c < capacity + 1; c++) {
      if (currentWeight <= c) {
        knapsackValues[idx][c] = Math.max(
          knapsackValues[idx - 1][c],
          knapsackValues[idx - 1][c - currentWeight] + currentProfit
        );
      } else {
        knapsackValues[idx][c] = knapsackValues[idx - 1][c];
      }
    }
  }
  return knapsackValues[items.length][capacity];
}

function canPartitionTopDown(nums) {
  let sum = 0;
  // accumulate a total sum with our running sum variable
  for (const num of nums) {
    sum += num;
  }
  // If the total sum is not an even number return false: this means it can not be broken down into pairs
  if (sum % 2 !== 0) return false;

  return memoPartition(nums, sum / 2, 0);
}

function memoPartition(nums, sum, idx, memo = []) {
  // IF the sum is zero return true that means we found a pair
  if (sum === 0) return true;
  // IF we reached the end of the array we are out of options, or our array is empty return false
  if (nums.length === 0 || idx >= nums.length) return false;
  memo[idx] = memo[idx] || [];

  if (memo[idx][sum] === undefined) {
    if (nums[idx] <= sum) {
      // IF our sum is not less than zero
      if (memoPartition(nums, sum - nums[idx], idx + 1, memo)) {
        memo[idx][sum] = true;
        return true;
      }
    }
    memo[idx][sum] = memoPartition(nums, sum, idx + 1, memo);
  }
  return memo[idx][sum];
}

console.log(canPartitionTopDown([1, 5, 11, 5]));
