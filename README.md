# Interview Preparation
Just the overall process of landing the dream job. 
## Resources Online
[Algoexpert](https://www.algoexpert.io/product) 

[Educative.io](https://www.educative.io/)

[Algomonster](https://algo.monster/dashboard)

[Hackerearth](https://www.hackerearth.com/practice/interviews/) 

[JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

[Leetcode](https://leetcode.com/)

[Hackerank](https://www.hackerrank.com/dashboard)

## Reading Sources 
Elements of Programming Interviews in Python

Eloquent JavaScript: A Modern Introduction to Programming

Grokking Algorithms

## Youtube Resources 
[Nick White](https://www.youtube.com/channel/UC1fLEeYICmo3O9cUsqIi7HA)

[NeetCode](https://www.youtube.com/channel/UC_mYaQAE6-71rjSN6CeCA-g)

[Michael Muinos](https://www.youtube.com/channel/UC6B6UMcP7tdlE6NxkAha3tA)

[Kevin Naughton Jr.](https://www.youtube.com/channel/UCKvwPt6BifPP54yzH99ff1g)

[Back2BackSWE](https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA)

[Kenny Talks Code](https://www.youtube.com/channel/UChQRyFNgb7lbfzoacC5hk_A)


## Backtracking

## Dynamic Programming
Dynamic Prgrammimg is an optimization over plain recursion. Wherever recurison tools have repeated calls for the same input (overlapping subproblems). We optimize it using dynamic programming. The idea is to simply store the results of subproblems, so we do not have to re-compute them need later. The simple opitmization reduces time complexities from from exponential to polynomial. For example look at the Fibonacci Sequence, we are making the same calls more than once.

![image](https://user-images.githubusercontent.com/34947061/116868517-e9499300-abdc-11eb-858b-11522851c0a7.png)

### Top Down/ Memoization
1. Draw the tree: see the tree above

2. Identify states

What state do we need to know whether we have reached a solution? We need to know the value of n we are computing
What state do we need to decide which child nodes should be visited next and which ones? There is no extra state we need. We always visit n-1 and n-2.

3. DFS + memoization

### Bottoms Up 

![image](https://user-images.githubusercontent.com/34947061/116869152-311cea00-abde-11eb-88ab-ff1a2edd8ce5.png)

For the bottom-up dynamic programming, we want to start with subproblems first and work our way up to the main problem. This is normally done by filling up a table.

For the Fibonacci problem, we want to fill a one-dimensional table dp where each entry at index i represents value of the Fibonacci number at index i. The last element of the array is the result we want to return.

The order of filling matters because we cannot calculate dp[i] before we filled dp[i - 1] and dp[i - 2].

### When to use dynamic programming?

Mathematically, dynamic programming is an optimization method on one or more sequences (e.g. arrays, matrices). So questions asking about optimal way to do something on one or more sequences is often a good candidate for dynamic programming. Signs of dynamic programming:

The problem asks for the maximum/longest, minimal/shortest value/cost/profit you can get from doing operations on a sequence.
You've tried greedy but it sometimes it gives the wrong solution. This often means you have to consider subproblems for an optimal solution.
The problem asks for how many ways there are to do something. This can often be solved by DFS + memoization, i.e. top-down dynamic programming.
Partition a string/array into sub-sequences so that certain condition is met. This is often well-suited for top-down dynamic programming.
The problems is about optimal way to play a game.

### Types

#### Sequence

[Resources](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns)

