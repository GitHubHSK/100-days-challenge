const hobbies = ["Sports", "Cooking"];
const age = 32;

hobbies.push("Reading");

console.log(hobbies);

// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objects

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);