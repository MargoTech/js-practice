function newFunction(skill) {
  console.log(`Hello, my name is ${this.name}, and I work with ${skill}`);
}

const user = {
  name: "Margarita",
};

const guest = {
  name: "Guest",
};

newFunction("JavaScript");

newFunction.call(user, "JavaScript");

newFunction.apply(guest, ["Python"]);

const newFunctionTwo = newFunction.bind(guest);
newFunctionTwo("Python");

// Hello, my name is undefined, and I work with JavaScript
// Hello, my name is Margarita, and I work with JavaScript
// Hello, my name is Guest, and I work with Python
// Hello, my name is Guest, and I work with Python
