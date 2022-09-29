const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];
const p = document.querySelector("p");
function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}
// p.addEventListener("click", makeGreen);

// Regular

console.log("hello");

// Interpolated
console.log("hello I am a %s string", "big");
// Styled
console.log(" %c I am a big text", "font-size:30px; background:red;");
// warning!
console.warn("no nver");
// Error :|

// Info
console.info("crocodiles are reptiles");

// Testing
console.assert(1 === 1, "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting

console.count("wes");
console.count("wes");
console.count("steve");
console.count("steve");
console.count("wes");
console.count("wes");
console.count("steve");

// timing

console.time("fetch data");
fetch("https://api.github.com/users/ayobanjo")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetch data");
    console.log(data);
  });
