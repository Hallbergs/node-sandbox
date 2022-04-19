import { INPUT } from "./input.js";

export default class Solver {
  getNumUsersOverAge = (age) => {
    return INPUT.reduce((acc, user) => (user.age > age ? acc + 1 : acc), 0);
  };

  getLastRegisteredActiveUser = () => {
    return INPUT.reduce((acc, user) =>
      user.isActive && Date.parse(user.registered) > Date.parse(acc.registered)
        ? user
        : acc
    );
  };

  getNumFavoriteFruit = () => {
    const fruitCount = new Map();
    for (const user of INPUT) {
      const currentCount = fruitCount.get(user.favoriteFruit) || 0;
      fruitCount.set(user.favoriteFruit, currentCount + 1);
    }
    return fruitCount;
  };

  getMostCommonEyeColor = () => {
    const eyeColors = new Map();
    for (const user of INPUT) {
      const currentCount = eyeColors.get(user.eyeColor) || 0;
      eyeColors.set(user.eyeColor, currentCount + 1);
    }
    return [...eyeColors.keys()].reduce((a, b) =>
      eyeColors.get(a) > eyeColors.get(b) ? a : b
    );
  };
}

const solver = new Solver();

console.log("Age above 50: ", solver.getNumUsersOverAge(50));
console.log("Last registered: ", solver.getLastRegisteredActiveUser());
console.log("FruitCount: ", solver.getNumFavoriteFruit());
console.log("Most common eye color is: ", solver.getMostCommonEyeColor());
