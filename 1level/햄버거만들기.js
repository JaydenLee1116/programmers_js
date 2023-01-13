const solution = (ingredients) => {
  let count = 0;
  const tempIngredients = [];
  ingredients.forEach((ingredient, index) => {
    tempIngredients.push(ingredient);
    if (
      tempIngredients[tempIngredients.length - 1] === 1 &&
      tempIngredients[tempIngredients.length - 2] === 3 &&
      tempIngredients[tempIngredients.length - 3] === 2 &&
      tempIngredients[tempIngredients.length - 4] === 1
    ) {
      count++;
      tempIngredients.pop();
      tempIngredients.pop();
      tempIngredients.pop();
      tempIngredients.pop();
    }
  });
  return count;
};
