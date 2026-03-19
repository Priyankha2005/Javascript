let students = [
  { name: "Ram", mark: 40 },
  { name: "Priya", mark: 80 },
  { name: "Sam", mark: 30 }
];

let passed = students.filter(student => student.mark >= 50);

console.log(passed);