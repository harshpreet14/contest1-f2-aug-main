let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  const developers = arr.filter(person => person.profession === 'developer');

  developers.forEach(developer => {
    console.log(`ID: ${developer.id}, Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: 20, profession: "intern" };

  // Append the new object to the array
  arr.push(newEmployee);

  // Console log the updated array
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedArr = arr.filter(person => person.profession !== 'admin');

  // Console log the updated array
  console.log(updatedArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    { id: 5, name: "alice", age: 22, profession: "manager" },
    { id: 6, name: "bob", age: 24, profession: "intern" }
  ];

  // Concatenate the new array with the original array
  const updatedArr = arr.concat(newEmployees);

  // Console log the updated array
  console.log(updatedArr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
