// Variables
const name = "Advait";
const age = 18;
const isStudent = true;

// Function 1 — greet
function greet(name) {
  return `Hey, I'm ${name}! Welcome to my page.`;
}

// Function 2 — add
function add(a, b) {
  return a + b;
}

// Function 3 — isEven
function isEven(num) {
  return num % 2 === 0;
}

// Log results to console
console.log(greet(name));
console.log("2 + 3 =", add(2, 3));
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));

// Button handler
function handleGreetClick() {
  alert(greet(name));
}
