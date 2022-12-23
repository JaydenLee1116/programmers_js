const calculateLength = (a, b) => ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** 0.5;

function solution(dots) {
  const basePoint = dots[0];
  const lengths = dots.slice(1, dots.length).map((value) => calculateLength(basePoint, value));
  lengths.sort((a, b) => a - b);
  return lengths[0] * lengths[1];
}
