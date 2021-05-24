// Check if the graph is unidirected: we have the option to use union find or dfs will implement both

function numOfFriends(isConnected) {
  const visited = new Set(); // Create a visited set to keep track of components
  let count = 0;
  for (let row = 0; row < isConnected.length; row++) {
    if (!visited.has(row)) {
      count++;
      dfs(row, isConnected, visited);
    }
  }

  return count;
}

function dfs(row, isConnected, visited) {
  visited.add(row);
  for (let col = 0; col < isConnected.length; col++) {
    if (isConnected[row][col] === 1 && !visited.has(col)) {
      visited.add(col);
      dfs(col, isConnected, visited);
    }
  }
}
