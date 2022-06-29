function solution(board, moves) {
  let answer = 0;
  const n = board.length;
  let basket = [];
  let moveToIndex = moves.map((move) => move - 1);

  for (let move of moveToIndex) {
    for (let i = 0; i < n; i++) {
      if (board[i][move]) {
        if (basket[basket.length - 1] === board[i][move]) {
          basket.pop();
          board[i][move] = 0;
          answer += 2;
          break;
        } else {
          basket.push(board[i][move]);
          board[i][move] = 0;
          break;
        }
      }
    }
  }

  return answer;
}
