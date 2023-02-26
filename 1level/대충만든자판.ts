{
  const solution = (keymap: Array<string>, targets: Array<string>): number[] => {
    return targets.map((target) => {
      let result = [...target]
        .map((word) => {
          return Math.min(...keymap.map((key) => (key.indexOf(word) >= 0 ? key.indexOf(word) + 1 : Infinity)));
        })
        .reduce((acc, cur) => acc + cur);
      return result === Infinity ? -1 : result;
    });
  };
}
