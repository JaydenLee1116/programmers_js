{
  const solution = (my_string: string): number => {
    return my_string
      .replace(/[A-z]/g, ',')
      .split(',')
      .reduce((acc, cur) => {
        return cur === '' ? acc : acc + parseInt(cur);
      }, 0);
  };
}
