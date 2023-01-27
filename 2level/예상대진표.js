const solution = (n, a, b) => {
  const participants = new Array(n).fill(0);
  participants[a - 1] = 1;
  participants[b - 1] = 1;
  const countMatches = (participants) => {
    let length = participants.length;
    const left = participants.slice(0, length / 2);
    const right = participants.slice(length / 2, length);
    if (left.includes(1) && right.includes(1)) {
      return Math.log2(length);
    } else {
      participants = left.includes(1) ? left : right;
      return countMatches(participants);
    }
  };
  return countMatches(participants);
};
