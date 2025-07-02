const person = {
  name: "Margarita",
  greet() {
    console.log("Hello, " + this.name);
  },
};

const greetFunc = person.greet;

greetFunc(); // "Hello, undefined". Strict mode, "this" is undefined

greetFunc.call(person); // "Hello, Margarita", call function like this=person

greetFunc.apply(person); // "Hello, Margarita",

const boundGreet = greetFunc.bind(person);
boundGreet(); // "Hello, Margarita", bring new function, where this = person
