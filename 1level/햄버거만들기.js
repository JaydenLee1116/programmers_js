const countHamburger = (ingredients) => {
  if (!ingredients.join('').includes(1231)) {
    return 0;
  }
  let canMakeHamburger = false;
  ingredients.every((_, i, arr) => {
    if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3 && arr[i + 3] === 1) {
      canMakeHamburger = true;
      ingredients.splice(i, 4);
      return false;
    }
    return true;
  });

  return canMakeHamburger + countHamburger(ingredients);
};

const countHamburger2 = (ingredientsStr) => {
  if (!ingredientsStr.includes(1231)) {
    return 0;
  }
  ingredientsStr = ingredientsStr.replace('1231', '');
  return 1 + countHamburger2(ingredientsStr);
};

const countHamburger3 = (ingredients) => {
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

const countHamburger4 = (ingredients) => {
  let startIndex = 0;
  for (let i = startIndex; i < ingredients.length; i++) {
    if (ingredients[i] === 1 && ingredients[i + 1] === 2 && ingredients[i + 2] === 3 && ingredients[i + 3] === 1) {
      startIndex = i - 2;
    }
  }
};

const solution = (ingredients) => {
  let ingredientsStr = ingredients.join('');
  return countHamburger2(ingredientsStr);
};

countHamburger3([2, 1, 1, 2, 3, 1, 2, 3, 1]);
