let age = 25;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 5000,
};

let totalAdultYears;

function calculateAdultYears() {
  return age - 18;
}

totalAdultYears = calculateAdultYears();
alert(totalAdultYears);