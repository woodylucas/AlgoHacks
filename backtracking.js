/*
This pattern is called backtracking. Backtracking is going back and changing the position to make it right. 

Backtracking is the technique to solve the problem recursively, by making a series of choices, and if any choice fails, we abandon the choice and try a different one. 


IDENTIFYING: Given a set of choices, constraints, decisions --> what we do recursivly. We make decisions with given choices, and constraints 
If it fails, take a step back and make a diffrent choice. 


Backtracking discard current decisions on the basis of future results 






Rat in the maze: 

/*
Choices: We can move x direction, and y direction
Constraints: x >= 0 && x < n && y >= 0 && y < n && board[x][y] === 1
Decisions: x + 1 y + 1
Goal: if (x === n - 1 && y === n - 1 && board[x][y] === 1) return true


*/

function solveMaze(maze) {
  const solution = [];
  for (let i = 0; i < maze.length; i++) {
    const row = Array.from({ length: maze.length }, () => 0);
    solution.push(row);
  }
  return solveTheMazeHelper(maze, 0, 0, solution, maze.length);
}

function solveTheMazeHelper(maze, x, y, solution, n) {
  // Goal: Base case
  if (x === n - 1 && y === n - 1 && maze[x][y] === 1) {
    solution[x][y] = 1;
    return true;
  }

  // Choices, and constraints
  if (isSafe(maze, x, y, n)) {
    solution[x][y] = 1;
    // x direction downwards
    if (solveTheMazeHelper(maze, x + 1, y, solution, n)) return true;
    // y direction forwards
    if (solveTheMazeHelper(maze, x, y + 1, solution, n)) return true;

    // Discard current decisions backtrack undo our decision
    solution[x][y] = 0;
    return false;
  }
}
// Constraints
function isSafe(maze, x, y, n) {
  if (x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1) {
    return true;
  }
}

const maze = [
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
];

// console.log(solveMaze(maze));

// N-Queens 1
/* 
Choices: to place a queen we can either go row by row column by column we will be going by column
Constraints: A queen can not be place horizontally, diagonally, and vertcally to another queen
Recursion: Choice is safe to be made place in row into column, if choices do not work out, discard the current move
Goal: Place the Queen in the right place, until we reach the last column

*/

function nonAttackingQueen(n) {
  const result = [];
  const colPlacements = new Array(n).fill(0);
  getNonAttackingQueens(0, colPlacements, n, result);
  return result;
}

function getNonAttackingQueens(row, colPlacements, boardSize, result) {
  // Goal
  if (row === boardSize) {
    const board = generateBoard(boardSize, colPlacements);
    result.push(board);
    return;
  }

  for (let col = 0; col < boardSize; col++) {
    if (isNonAttackPlacements(row, col, colPlacements)) {
      colPlacements[row] = col;
      getNonAttackingQueens(row + 1, colPlacements, boardSize, result);
    }
  }
}

function isNonAttackPlacements(row, col, colPlacements) {
  for (let previousRow = 0; previousRow < row; previousRow++) {
    const columnCheck = colPlacements[previousRow];
    const sameColumn = columnCheck === col;
    const onDiagonal = Math.abs(columnCheck - col) === row - previousRow;
    if (onDiagonal || sameColumn) return false;
  }
  return true;
}

function generateBoard(boardSize, colPlacements) {
  const board = [];
  for (let row = 0; row < colPlacements.length; row++) {
    const boardRow = [];
    for (let col = 0; col < boardSize; col++) {
      if (col === colPlacements[row]) {
        boardRow.push("Q");
      } else {
        boardRow.push(".");
      }
    }
    board.push(boardRow.join(""));
  }
  return board;
}

// console.log(nonAttackingQueen(4));

// Choices: Placing n queens either row by row or columnn by column the length of the board
// Constraints: A isNonAttackingQueen can not be placed either horizonatally, vertically, or diagonally
// Decisions/ Recursion: If position is safe we will place the position in col else we undo current decision
// Goal: Once we have placed all queens in n available position we will increment our counter when we reach the lets column on the board
function totalNQueens(n) {
  const colPlacements = new Array(n).fill(0);
  return getTotalOfNonAttackingPlacments(0, n, colPlacements);
}

function getTotalOfNonAttackingPlacments(row, boardSize, colPlacements) {
  // Goal
  if (row === boardSize) {
    return 1;
  }

  let validPlacements = 0;
  // Constraints and Choices
  for (let col = 0; col < boardSize; col++) {
    if (isNonAttackPlacementsClone(row, col, colPlacements)) {
      colPlacements[row] = col; // Our choice
      validPlacements += getTotalOfNonAttackingPlacments(
        row + 1,
        boardSize,
        colPlacements
      );
    }
  }
  return validPlacements;
}

function isNonAttackPlacementsClone(row, col, colPlacements) {
  for (let previousRow = 0; previousRow < row; previousRow++) {
    const columnToCheck = colPlacements[previousRow];
    const sameColumn = col === columnToCheck;
    const onDiagonal = Math.abs(columnToCheck - col) === row - previousRow;
    if (onDiagonal || sameColumn) return false;
  }
  return true;
}

// console.log(totalNQueens(4));

// Choices: Every digit in range of 1-9 where we can place a digit in a open cell until we reach the end of the board.
// Constraints: A digit can only be placed in a subgrid, row, and column that ranges 1-9, and unique.

function sudokuSolver(board) {
  solveSudokuPartial(0, 0, board);
  return board;
}

function solveSudokuPartial(row, col, board) {
  let currentRow = row,
    currentCol = col;
  // IF we are passed now we want to reset our current column and move down to our next row
  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    if (currentRow === board.length) return true;
  }
  // If the board is empty
  if (board[currentRow][currentCol] === 0) {
    // We can generate all possible numbers
    return tryDigitsAtPosition(currentRow, currentCol, board);
  }
  return solveSudokuPartial(currentRow, currentCol + 1, board);
}

function tryDigitsAtPosition(row, col, board) {
  for (let digit = 1; digit < 10; digit++) {
    if (isValidPosition(digit, row, col, board)) {
      board[row][col] = digit;
      // The
      if (solveSudokuPartial(row, col + 1, board)) return true;
    }
  }
  // If we can not solve the board we will undo our current scribble and return false
  board[row][col] = 0;
  return false;
}

function isValidPosition(value, row, col, board) {
  // To check if a row is available
  const rowIsValid = !board[row].includes(value);
  // To check if check if this value is availible in this col
  const colIsValid = !board.map((row) => row[col]).includes(value);

  if (!rowIsValid || !colIsValid) return false;
  // check for subgrid
  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;

  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subgridRowStart + rowIdx;
      const colToCheck = subgridColStart + colIdx;
      const existingValue = board[rowToCheck][colToCheck];
      // this check is to check if the the value that we passed in is located in any of our subgrids
      if (existingValue === value) return false;
    }
  }
  return true;
}

// Choices is to include or exclude
// constraints must not contain duplicates
// make recursive decisions once choices and constraints are valids. If decision doesn;t work we will backtrack and make other decision.
const board = [
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7],
];
console.log(sudokuSolver(board));

// Solution 1
function powerset(nums, idx = null) {
  if (idx === null) idx = nums.length - 1;
  if (idx < 0) return [[]];
  const elem = nums[idx];
  const subset = powerset(nums, idx - 1);
  const { length } = subset;
  for (let i = 0; i < length; i++) {
    const currentSubset = subset[i];
    subset.push(currentSubset.concat(elem));
  }
  return subset;
}
// Solution 2
function subsets(nums) {
  return subsetHelper(0, nums, [], []);
}

function subsetHelper(idx, nums, powerset, currentSubset) {
  powerset.push(currentSubset.slice());
  for (let i = idx; i < nums.length; i++) {
    currentSubset.push(nums[i]);
    subsetHelper(i + 1, nums, powerset, currentSubset);
    currentSubset.pop();
  }
  return powerset;
}
