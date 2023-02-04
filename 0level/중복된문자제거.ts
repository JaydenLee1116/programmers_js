{
  type Solution = (str: string) => string;

  const solution: Solution = (str) => {
    return [...str].filter((w, i, arr) => arr.indexOf(w) === i).join('');
  };
}
