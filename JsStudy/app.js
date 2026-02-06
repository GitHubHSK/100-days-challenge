let age = 25;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 5000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

let person = {
  name: "Max", //Property
  greet() { //Method
    alert("Hello!");
  },
};

person.greet();