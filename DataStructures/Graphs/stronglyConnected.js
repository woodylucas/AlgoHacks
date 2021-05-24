// Tarjan’s and Kosaraju’s Algorithm will be implemented

function riverSizes(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const size = [];
  let m = matrix.length,
    n = matrix[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 1) {
        const riverLength = dfs(matrix, row, col, m, n);
        size.push(riverLength);
      }
    }
  }
  return size;
}

function dfs(matrix, row, col, m, n) {
  if (row < 0 || row >= m || col < 0 || col >= n || matrix[row][col] === 0)
    return 0;
  matrix[row][col] = 0;
  return (
    // Down
    dfs(matrix, row + 1, col, m, n) +
    // Up
    dfs(matrix, row - 1, col, m, n) +
    // Right
    dfs(matrix, row, col + 1, m, n) +
    // Left
    dfs(matrix, row, col - 1, m, n) +
    1
  );
}

function riverSizes2(matrix) {
  const sizes = [];
  if (matrix.length === 0) return size;
  let m = matrix.length,
    n = matrix[0].length;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 1) {
        const riverLength = bfs(matrix, row, col, m, n);
        sizes.push(riverLength);
      }
    }
  }
  return sizes;
}

function bfs(matrix, row, col, m, n) {
  const queue = [row * n + col]; // Turn a 2D matrix into a 1D Matrix
  matrix[row][col] = 0;
  let size = 0;
  while (queue.length > 0) {
    const idx = queue.pop();
    let r = Math.floor(idx / n); // convert a 1D back to 2D this is the formula for row
    let c = idx % n; // convert a 1D back to 2D this is a formula for col
    // Down, Up, Right, Left
    const directions = [
      [1, 0],
      [-1, 0],
      [0, -1],
      [0, 1],
    ];
    size++; // Increment our size within the while loop
    for (const direction of directions) {
      let [x, y] = direction;
      x = x + r;
      y = y + c;
      if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] === 1) {
        matrix[x][y] = 0;
        queue.push(x * n + y);
      }
    }
  }
  return size;
}

// Number of Islands

function numOfIslands(grid) {
  // We need to first validate our input
  if (grid.length === 0) return 0;
  let islandCount = 0;
  // Dimension
  let m = grid.length,
    n = grid[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === "1") {
        islandCount++;
        bfs(grid, row, col, m, n);
      }
    }
  }

  return islandCount;
}

function bfs(matrix, row, col, m, n) {
  const queue = [row * n + col]; // Formula to convert a 2D to a 1D
  matrix[row][col] = "0";
  while (queue.length > 0) {
    const idx = queue.pop();
    let r = Math.floor(idx / n); // Formula to convert back to a 2D: row
    let c = idx % n; // Formula to convert back to a 2D: col
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]; // Directions: Left, Right, Down, Up
    for (const direction of directions) {
      let [x, y] = direction;
      x = x + r; // Convert back to row
      y = y + c; // Convert back to column
      if (x >= 0 && x < m && y < n && y >= 0 && matrix[x][y] === "1") {
        matrix[x][y] = "0";
        queue.push(x * n + y);
      }
    }
  }
}
