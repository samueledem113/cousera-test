// Array of names
let names = ["John", "Paul", "George", "Ringo", "Jane", "Emily", "Jack", "Anna"];

// Loop over the array
for (let i = 0; i < names.length; i++) {
  // Get the current name
  let name = names[i];
  
  // Check the first letter of the name
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
