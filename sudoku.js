 const fs = require ('fs')

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
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        if (board[i][j] === '-') {
          const random = `${Math.floor((Math.random() * 9) + 1)}`;
          if (!board[i].includes(random) && s === true) {
            board[i][j] = random;
          }
        }let col = ''
        for (let k = 0; k < board[i].length; k += 1){
          col += board[k][j]
          let s
          if (!col.includes(random)) {
            s =true
          }
        }
        console.log(col)
      }
    }
  }
  return board;
}
console.table(fillTheRow(board));
