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

  getCombinedBalance = () => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(
      INPUT.reduce(
        (acc, user) => acc + Number(user.balance.replace(/[^0-9.-]+/g, "")),
        0
      )
    );
  };

  getUserNameFromId = (id) => {
    const user = INPUT.find((u) => u.id === id);
    return user ? `${user.name.last}, ${user.name.first}` : null;
  };
}

const solver = new Solver();

console.log("Age above 50: ", solver.getNumUsersOverAge(50));
console.log("Last registered: ", solver.getLastRegisteredActiveUser());
console.log("FruitCount: ", solver.getNumFavoriteFruit());
console.log("Most common eye color is: ", solver.getMostCommonEyeColor());
console.log("Combined balance: ", solver.getCombinedBalance());
console.log(
  "User with id: '5aabbca3e58dc67745d720b1': ",
  solver.getUserNameFromId("5aabbca3e58dc67745d720b1")
);
