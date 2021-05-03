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

[Resources](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns)

