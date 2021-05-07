# Interview Preparation
Just the overall process of landing the dream job. 

## Resources Online
[Algoexpert](https://www.algoexpert.io/product) 

[Educative.io](https://www.educative.io/courses/grokking-the-coding-interview)

[Algomonster](https://algo.monster/dashboard)

[Hackerearth](https://www.hackerearth.com/practice/interviews/) 

[JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

[Leetcode](https://leetcode.com/)

[Hackerank](https://www.hackerrank.com/dashboard)

[Leetcode Patterns](https://seanprashad.com/leetcode-patterns/)

[75 Leetcode Questions](https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU)

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

# Data Structures & Algorithms

## Graph 
Graphs are non linear data structures that contain vertices, and edges. Can also be defined as a set of nodes that are connected to form of a network. 
[8-Essential Graphs](https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/)

### Two forms of a graph 

#### Vertex

Vertex is an essential part of a graph. A collection of vertices forms a graph in a sense they are similar to linked list nodes.

#### Edges 

An edge is a link between two vertices. It can be directed or unidirected. An unidirected edge is similar to Facebook friends. You both follow each other. So you have no sense of direction. That can be traversed in either direction. A directed edge on the other hand is similar to Instagram followers, you can follow anyone you like, but they don't have to follow you back. 

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

[Pattern Resources](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns)

#### Sequence

This is the most common type of DP problem and a good place to get a feel of dynamic programming. In the recurrence relation,dp[i] normally means max/min/best value for the sequence ending at index i.

Fib
Climbing Stairs
House robber - find maximum amount of loot
Coin change - find minimum amount of coins needed to make up an amount

#### Grid 

Robot unique paths - number of ways for robot to move from top left to bottom right
Min path sum - find path in a grid with minimum cost
Maximal square - find maximal square of 1s in a grid of 0s and 1s

#### Dynamic Number of Subproblems 

This is similar to "Sequence DP" except dp[i] depends on a dynamic number of subproblems, e.g. dp[i] = max(d[j]..) for j from 0 to i.

Longest Increasing Subsequence - find the longest increasing subsequence of an array of numbers
Buy/sell stock with at most K transactions - maximize profit by buying and selling stocks using at most K transaction

#### Partition 

Divide into twos: 

0/1 Knapsack 
Decode ways - how many ways to decode a string
Word break - partition a word into words in a dictionary
Triangle - find the smallest sum path to traverse a triangle of numbers from top to bottom
Partition to Equal Sum Subsets - partition a set of numbers into two equal-sum subsets

#### Two Sequences 

This type of problem has two sequences in their problem statement. dp[i][j] represents the max/min/best value for the first sequence ending in index i and second sequence ending in index j.

Edit distance - find the minimum distance to edit one string to another
Longest common subsequence - find the longest common subsequence that is common in two sequences

#### Game Theory 

This type of problem asks for whether a player can win a decision game. The key to solving game theory problems is to identify winning state, and formulating a winning state as a state that returns a losing state to the opponent

Coins in a line
Divisor game
Stone game



