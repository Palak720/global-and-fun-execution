// Declare a global variable age and assign a value to it
let age = 25;

// Create a function displayAge that logs the value of age
function displayAge() {
  console.log(`The age is ${age}`);
}

// Create a second function changeAge, which changes the value of age
function changeAge(newAge) {
  age = newAge;
  console.log(`The age has been updated to ${age}`);
}

// Call displayAge and changeAge and check how the value of age is updated
displayAge(); // Output: The age is 25
changeAge(30); // Output: The age has been updated to 30
displayAge(); // Output: The age is 30
