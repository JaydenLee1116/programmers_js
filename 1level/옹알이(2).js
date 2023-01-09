const solution = (babbling) => {
  const NOUNS = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;
  babbling.forEach((value, index, array) => {
    let valueArr = [...value];
    let tempNoun = '';
    let validatedNouns = [];
    while (valueArr.length) {
      tempNoun = valueArr.pop() + tempNoun;
      if (NOUNS.includes(tempNoun)) {
        validatedNouns = [tempNoun].concat(validatedNouns);
        tempNoun = '';
      }
    }
    validatedNouns.forEach((noun, i, arr) => {
      if (noun === arr[i + 1]) {
        validatedNouns = [];
        return false;
      }
    });
    if (validatedNouns.join('') === value) count++;
  });

  return count;
};
