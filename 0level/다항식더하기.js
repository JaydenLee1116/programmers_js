function solution(polynomial) {
  let firstX = 0;
  let constant = 0;
  let arr = polynomial.split('+');
  arr.forEach((value) => {
    if (value.includes('x')) {
      firstX += isNaN(parseInt(value.replace('x', ''))) ? 1 : parseInt(value);
    } else {
      constant += parseInt(value);
    }
  });
  if (firstX) {
    if (constant) {
      return `${firstX === 1 ? '' : firstX}x + ${constant}`;
    } else {
      return `${firstX === 1 ? '' : firstX}x`;
    }
  } else {
    if (constant) {
      return `${constant}`;
    } else {
      return '';
    }
  }
}
