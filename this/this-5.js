class Developer {
  constructor(name) {
    this.name = name;
  }

  regularMethod() {
    setTimeout(function () {
      console.log("Regular function:", this.name);
    }, 1000);
  } //'this" = undefined, create new context for "this", global object

  arrowMethod() {
    setTimeout(() => {
      console.log("Arrow function:", this.name);
    }, 1000);
  } // doesn't have own context, use function's context
}

const dev = new Developer("Margarita");
dev.regularMethod();
dev.arrowMethod();
