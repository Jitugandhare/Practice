function outer() {
  let name = "Jitu";

  function inner() {
    console.log("Hello, " + name);
  }

  return inner;
}

const greet = outer(); // outer() runs and returns inner
greet(); // "Hello, Jitu"

