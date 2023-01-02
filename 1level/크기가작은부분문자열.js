const solution = (t, p) => {
  let tLength = t.length;
  let pLength = p.length;
  let count = 0;
  for (let i = 0; i <= tLength - pLength; i++) {
    let tSlice = t.slice(i, i + pLength);
    parseInt(tSlice) <= parseInt(p) ? count++ : null;
  }
  return count;
};

// const solution = (t, p) => {
//   let tLength = t.length;
//   let pLength = p.length;
//   let count = 0;
//   for (let i = 0; i <= tLength - pLength; i++) {
//     let tSlice = t.slice(i, i + pLength);
//     +tSlice <= +p ? count++ : null;
//   }
//   return count;
// };
