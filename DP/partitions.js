// 416. Partition Equal Subset Sum
/*
 Given a non-empty array nums containing only positive integers, 
 find if the array can be partitioned into two subsets such that 
 the sum of elements in both subsets is equal.
 */

function canPartition(nums) {
  // accumulate a sum to break into two subsets
  const sum = nums.reduce((total, num) => total + num, 0);
  // Check if the sum is odd, if it is return false because we can't break it into two.
  if (sum % 2 !== 0) return false;
  // DRIVER
  return partitionSubset(0, sum / 2, nums);
}

function partitionSubsetHelper(idx, sum, nums, memo = []) {
  // GOAL: BASE CASE
  if (sum === 0) return true;
  if (nums.length === 0 || idx >= nums.length) return false;
  // Since we are using a 2D array to store the cache we have
  // to check if memo was received as an argument when the function was called.
  // If it was, we initialize it for use, but if it wasn't, we set it to an empty object.
  memo[idx] = memo[idx] || [];

  if (memo[idx][sum] === undefined) {
    if (nums[idx] <= sum) {
      // We are returning a boolean so we have to check if sum is not below zero
      if (partitionSubsetHelper(idx + 1, sum - nums[idx], nums, memo)) {
        memo[idx][sum] = true;
        return true;
      }
    }
    memo[idx][sum] = partitionSubsetHelper(idx + 1, sum, nums, memo);
  }
  return memo[idx][sum];
}

// Subset Sum

const canPartitionSum = function (num, sum) {
  return partitionSum(0, num, sum);
};

function partitionSum(idx, num, sum, memo = []) {
  if (sum === 0) return true;
  if (idx >= num.length || num.length === 0) return false;
  memo[idx] = memo[idx] || [];
  if (memo[idx][sum] === undefined) {
    if (num[idx] <= sum) {
      if (partitionSum(idx + 1, num, sum - num[idx], memo)) {
        memo[idx][sum] = true;
        return true;
      }
    }
    memo[idx][sum] = partitionSum(idx + 1, num, sum, memo);
  }
  return memo[idx][sum];
}

// Last Stone II/ Minimum Subset Sum Difference
function minimumSubsetDiff(num) {
  return minPartition(0, 0, 0, num);
}
function minPartition(idx, sum1, sum2, nums, memo = []) {
  if (idx >= nums.length) return Math.abs(sum1 - sum2);

  memo[idx] = memo[idx] || [];
  if (memo[idx][sum1] === undefined) {
    let firstDiff = minPartition(idx + 1, sum1 + nums[idx], sum2, nums, memo);
    let secondDiff = minPartition(idx + 1, sum1, sum2 + nums[idx], nums, memo);
    memo[idx][sum1] = Math.min(firstDiff, secondDiff);
  }
  return memo[idx][sum1];
}
