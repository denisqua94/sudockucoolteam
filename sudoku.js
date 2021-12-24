const fs = require('fs')

// const boardString = fs.readFileSync('./sudoku-puzzles.txt','utf8').split('\n');
// const {sudokuParse} = require('./runner')


//  function solve(boardString) {

//   let board1 = boardString.slice(0, 1).join().split('')
//   let board = []
//   for(let i = 0; i <board1.length; i += 9){
//    board.push(board1.slice(i, i+9))
//   }

//   return board
// }
// console.table(solve(boardString));



function readFile(numberOfString) {
  const text = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n');
  const string = text[numberOfString - 1];
  console.log(string);
  return string;
}
const string = readFile(1);
function beautifyTheString(string) {
  const beatyArr = [];
  for (let i = 0; i < 81; i += 9) {
    beatyArr.push(string.slice(i, i + 9).split(''));
  }
  return beatyArr;
}
const board = beautifyTheString(string);

function fillTheRow(board) {
  while (board.flat().includes('-')) {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex += 1) {
      for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex += 1) {
        let canInsertNumber = false;
        const random = `${Math.floor((Math.random() * 9) + 1)}`;

        if (board[rowIndex][colIndex] === '-') {
          if (!board[rowIndex].includes(random) ) {
            canInsertNumber = true
          }
        }

        let col = ''
        for (let k = 0; k < board[rowIndex].length; k += 1) {
          col += board[k][colIndex]
          
          if (!col.includes(random) && canInsertNumber) {
          
            board[rowIndex][colIndex] = random;
          }
        }

        console.table(board)
      }
    }
  }
  return board;
}
console.table(fillTheRow(board));
