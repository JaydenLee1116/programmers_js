function solution(keyinput, board) {
  const [maxX, maxY] = board.map((value) => Math.floor(value / 2));
  let resultX = 0;
  let resultY = 0;
  keyinput.forEach((value) => {
    switch (value) {
      case 'up':
        resultY < maxY ? resultY++ : null;
        break;
      case 'down':
        resultY > -maxY ? resultY-- : null;
        break;
      case 'left':
        resultX > -maxX ? resultX-- : null;
        break;
      case 'right':
        resultX < maxX ? resultX++ : null;
        break;
    }
  });
  return [resultX, resultY];
}
