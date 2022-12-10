function solution(board) {
  const LENGTH = board.length;
  let newBoard = new Array(LENGTH).fill(0).map((_) => new Array(LENGTH).fill(0));
  board.forEach((row, i) => {
    let rowNumber = i;
    row.forEach((column, j) => {
      let columnNumber = j;
      if (column === 1) {
        if (rowNumber > 0) {
          newBoard[rowNumber - 1][columnNumber - 1] = 1;
          newBoard[rowNumber - 1][columnNumber] = 1;
          newBoard[rowNumber - 1][columnNumber + 1] = 1;
        }
        newBoard[rowNumber][columnNumber - 1] = 1;
        newBoard[rowNumber][columnNumber] = 1;
        newBoard[rowNumber][columnNumber + 1] = 1;
        if (rowNumber < LENGTH - 1) {
          newBoard[rowNumber + 1][columnNumber - 1] = 1;
          newBoard[rowNumber + 1][columnNumber] = 1;
          newBoard[rowNumber + 1][columnNumber + 1] = 1;
        }
      }
    });
  });
  return newBoard.flat(1).filter((value) => value !== 1).length;
}
