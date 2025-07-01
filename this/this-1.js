const obj = {
  name: "Margarita",
  sayHi() {
    // Regular function inside setTimeOut has its own 'this' context.
    // Which is undefined in strict mode
    // so 'this.name' is undefined.
    // To fix this, use an arrow function which inherits 'this' from the obj.
    setTimeout(() => {
      console.log("Hi from", this.name);
    }, 1000);
  },
};
