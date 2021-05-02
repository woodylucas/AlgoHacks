function fibonacciMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n < 2) return n;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

function climbStairs(n, memo = []) {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  if (memo[n] !== undefined) return memo[n];
  return (
    climbStairs(n - 1, memo) +
    climbStairs(n - 2, memo) +
    climbStairs(n - 3, memo)
  );
}
// Jump Game II
function jump(array) {
  return minJumpsHelper(0, array);
}

function minJumpsHelper(idx, jumps, memo = []) {
  if (idx >= jumps.length - 1) return 0;
  if (jumps[idx] === 0) return Infinity;
  if (memo[idx] !== undefined) return memo[idx];
  let totalJumps = Infinity;
  let start = idx + 1;
  let end = idx + jumps[idx];
  while (start < jumps.length && start <= end) {
    const minJumps = minJumpsHelper(start++, jumps, memo);
    if (minJumps !== Infinity) totalJumps = Math.min(totalJumps, minJumps + 1);
  }
  memo[idx] = totalJumps;
  return memo[idx];
}
