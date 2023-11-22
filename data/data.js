const applicationAPI =
  "https://applicationcontrollerwebapi.azurewebsites.net/api/Games/GetGame";
const defaultSymbol = require("../assets/tiles/cards/joker.png");
const themes = {
  cards: {
    name: "Cards",
    symbols: [
      {
        image: require("../assets/tiles/cards/club.png"),
      },
      {
        image: require("../assets/tiles/cards/diamond.png"),
      },
      {
        image: require("../assets/tiles/cards/heart.png"),
      },
      {
        image: require("../assets/tiles/cards/joker.png"),
      },
      {
        image: require("../assets/tiles/cards/seven.png"),
      },
      {
        image: require("../assets/tiles/cards/spade.png"),
      },
    ],
  },
  fruits: {
    name: "Fruits",
    symbols: [
      {
        image: require("../assets/tiles/fruits/apple.png"),
      },
      {
        image: require("../assets/tiles/fruits/cherry.png"),
      },
      {
        image: require("../assets/tiles/fruits/dalandan.png"),
      },
      {
        image: require("../assets/tiles/fruits/grapes.png"),
      },
      {
        image: require("../assets/tiles/fruits/lemon.png"),
      },
      {
        image: require("../assets/tiles/fruits/lychie.png"),
      },
    ],
  },
  animals: {
    name: "Animals",
    symbols: [
      {
        image: require("../assets/tiles/animals/bird.png"),
      },
      {
        image: require("../assets/tiles/animals/cow.png"),
      },
      {
        image: require("../assets/tiles/animals/dog.png"),
      },
      {
        image: require("../assets/tiles/animals/donkey.png"),
      },
      {
        image: require("../assets/tiles/animals/horse.png"),
      },
      {
        image: require("../assets/tiles/animals/lion.png"),
      },
    ],
  },
  alphabet: {
    name: "Alphabet",
    symbols: [
      {
        image: require("../assets/tiles/alphabet/A.png"),
      },
      {
        image: require("../assets/tiles/alphabet/B.png"),
      },
      {
        image: require("../assets/tiles/alphabet/C.png"),
      },
      {
        image: require("../assets/tiles/alphabet/D.png"),
      },
      {
        image: require("../assets/tiles/alphabet/E.png"),
      },
      {
        image: require("../assets/tiles/alphabet/F.png"),
      },
    ],
  },
};

export { applicationAPI, themes, defaultSymbol };
