import { useImmer } from "use-immer";

const person1 = {
  name: "Niki de Saint Phalle",
  artwork: {
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  },
};

const nextPerson = { ...person1.artwork, name: "test" };

console.log(person1.artwork);
console.log(nextPerson);
