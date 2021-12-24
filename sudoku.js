// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
 const fs = require ('fs')

 const boardString = fs.readFileSync('./sudoku-puzzles.txt','utf8').split('\n');

 function solve(boardString) {
  
  let board = boardString.slice(0, 1).join().split('')
  
  return board
}
console.table(solve(boardString));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
// const fs = require('fs');
// function readFile(numberOfString) {
//   const text = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n');
//   const string = text[numberOfString - 1];
//   console.log(string);
//   return string;
// }
// const string = readFile(1);
// function beautifyTheString(string) {
//   const beatyArr = [];
//   for (let i = 0; i < 81; i += 9) {
//     beatyArr.push(string.slice(i, i + 9).split(''));
//   }
//   return beatyArr;
// }
// // console.log(beautifyTheString(string));
// const board = beautifyTheString(string);
// function fillTheRow(board) {
//   while (board.flat().includes('-')) {
//     for (let i = 0; i < board.length; i += 1) {
//       for (let j = 0; j < board[i].length; j += 1) {
//         if (board[i][j] === '-') {
//           const random = `${Math.floor((Math.random() * 9) + 1`Q)}`;
//           if (!board[i].includes(random)) {
//             board[i][j] = random;
//           }
//         }
//       }
//     }
//   }
//   return board;
// }
// console.table(fillTheRow(board));
// // Takes a board as a string in the format
// // you see in the puzzle file. Returns
// // something representing a board after
// // your solver has tried to solve it.
// // How you represent your board is up to you!
// // function solve(boardString) {
// // }
// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
// // function isSolved(board) {
// // }
// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
// // function prettyBoard(board) {
// // }
// // Exports all the functions to use them in another file.
// // module.exports = {
// // 	solve: solve,
// // 	isSolved: isSolved,
// // 	prettyBoard: prettyBoard
// // }
