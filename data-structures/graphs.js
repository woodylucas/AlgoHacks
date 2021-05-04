/*
*Trees are a special unique kind of graph, but they can only have one root, and one unique path between two nodes

*Graph can go beyond that, and have any number of root elements and multple paths between nodes
** non linear data structure that contains nodes, and edges
*** edge connection is a connection between two nodes 

** Example Instagram 
* A user is a node, everytime you follow a user you build an EDGE connnecting two nodes together
* A follow can be a Directed Graph 
* --- > *
** Example 
* Edges are friendships 
Unidirected Graph 
* <--> *

Graphs can also be weighted, meaning the node has additional data about the relationship 

edges have meanings 

* Node might also point to itself* 
** Example, an airplane that takes off and lands at the same airport 


** Ways to represent a graph a 2D Array, or Adjacency Matrix 

*** 2 Rows have and edge or connection add a 1 at a point they intersect

** Adjacency List 

 */

// Vertex List & Edge List

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

console.log(airports);
