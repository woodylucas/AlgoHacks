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
