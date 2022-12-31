// // gameboard
// let gameboard = (() => {
//   // represent the gameboard as a ]n array of arrays
//   let tic = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""],
//   ];
//   let placeX = (row, column) => {
//     tic[row][column] = "x";
//   };
//   return {
//     tic,
//     placeX,
//   };
// })();

// let game = gameboard.tic;

// player 1 is always x
// player 2 is always o
//
let addMark = (e) => {
  // add mark to the grid
  gridMark(e.target.classList[1]);
  if (player1Turn) e.target.classList.add("x");
  else e.target.classList.add("o");
  // change turn
  changeTurn();
};
// grab board
let board = document.querySelector(".board");
// make grid in board
const makeBoard = () => {
  let row = 0;
  let column = 0;
  // make 9 cells
  for (let i = 0; i < 9; i++) {
    // make the cell
    let cell = document.createElement("div");
    // give it an click action
    cell.addEventListener("click", addMark, { once: true });
    // give it a class of cell
    cell.classList.add("cell");
    // give it a class to map to the array
    cell.classList.add(`${[row, column]}`);
    // change the row and column each iteration
    column++;
    if (column === 3) {
      column = 0;
      row++;
    }
    // add cell to board
    board.appendChild(cell);
  }
};
makeBoard();
// while is it player 1's turn, click a square an make it an x
let player1Turn = true;
// change turn after play
let changeTurn = () => {
  player1Turn = !player1Turn;
};
// while is it player 2's turn, click a square an make it an o
// after each players choice, check to see if that player has won
let grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
//  (1,1)
const gridMark = (string) => {
  // break apart the string
  let coordinate = [...string];
  let row = coordinate[0];
  let column = coordinate[2];
  // map the coordinates to the grid
  if (player1Turn) grid[row][column] = "x";
  else grid[row][column] = "o";
};
// display the winning message page with winning message
// check to see if there is a tie
// display the winning message page with tie message
// click reset button to play again
