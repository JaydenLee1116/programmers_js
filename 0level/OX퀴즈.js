function solution(quiz) {
  return quiz.map((value) => {
    let left = value.split('=')[0];
    let right = value.split('=')[1];
    let X = parseInt(left.split(' ')[0]);
    let operator = left.split(' ')[1];
    let Y = parseInt(left.split(' ')[2]);
    let Z = parseInt(right);
    return operator === '+' ? (X + Y === Z ? 'O' : 'X') : X - Y === Z ? 'O' : 'X';
  });
}
