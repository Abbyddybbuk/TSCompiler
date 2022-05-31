const add = (a: number, b: number = 2) => a + b; //Function  with default argument
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);
printOutput(add(2, 7));

const hobbies = ["Hobbies", "Travelling", "Coding"];

const activeHobbies = ["Gaming", "Driving", "Youtube"];

activeHobbies.push(...hobbies); // SpreadOperator

const person = {
  firstName: "Abhi",
  age: 37,
};

const copiedPerson = {
  ...person,
  Occupation: "Software Engineer",
};

console.log(copiedPerson);

const addRest = (...numbers: number[]) => {// Example of rest parameters as function is accepting array of values
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = addRest(1.77,2.98,3.37,4.54,5.33,6.76,7.99);
console.log(addedNumbers);

const [hobbies1, hobbies2,...restOfHobbies] = activeHobbies; // Array Destructuring
console.log(restOfHobbies, hobbies1, hobbies2);

const {firstName: userName, age} = copiedPerson; // Object Destructuring where name of firstName is changed to userName
console.log(userName, age);

