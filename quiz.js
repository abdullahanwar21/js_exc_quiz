//! Objects

//* Problem 1
// Create an object 'person' with properties 'name' and 'age'. Then, write a function 'displayPersonInfo' that takes the person object as an argument and displays the name and age.
let person = {
  name: "Meer Abdullah",
  age: 21,
};
function displayPersonInfo(person) {
  console.log(` Name is: ${person.name} , Age is: ${person.age}`);
}
displayPersonInfo(person);

//* Problem 2
// Create an array 'students' with objects representing students. Each student should have 'name' and 'score' properties. Write a function 'findTopStudent' that finds and displays the student with the highest score.
let students = [
  {
    name: "kabeer",
    score: 450,
  },
  {
    name: "ali",
    score: 490,
  },
  {
    name: "qadeer",
    score: 470,
  },
];
function findTopStudent(students) {
  let topStu = students[0];
  for (let i = 0; i < students.length; i++) {
    const element = students[i];
    // console.log(topStu);
    if (element.score > topStu.score) {
      topStu = students[i];
    }
  }
  console.log(`Topper ${topStu.name} , Score : ${topStu.score}`);
}
findTopStudent(students);
//! Arrays

//* Problem 3
// Write a function 'calculateAverage' that takes an array of numbers and calculates and displays the average value.
let numbers = [5, 10, 15, 20];
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  console.log(average);
}
calculateAverage(numbers); // output :- 12.5
//* Problem 4
// Create an array 'fruits' and sort it in alphabetical order. Then, display the sorted array.
let fruits = ["Mango", "Orange", "Banana", "Apple", "Grape Fruit"];
console.log(fruits.sort());

//! Functions

//* Problem 5
// Write a function 'factorial' that calculates and displays the factorial of a number.
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//* Problem 6
// Create a function 'reverseString' that takes a string as input and displays the reverse of the input string.
let str = "pakistan";
function reverseString(str) {
  let revStr = str.split("").reverse("").join("");
  return revStr;
}
console.log(reverseString(str)); // Output :- natsikap
//! Constructor Function

//* Problem 7
// Create a constructor function 'Person' that takes 'name' and 'age' as parameters and creates person objects. Then, create two person objects and display their details.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(new Person());
//! Loops

//* Problem 8
// Write a loop that displays numbers from 1 to 10.
for (let oneToTen = 1; oneToTen <= 10; oneToTen++) {
  console.log(oneToTen);
}
//* Problem 9
// Write a function 'sumArrayElements' that calculates and displays the sum of elements in an array of numbers.
function sumArrayElements(numbers) {
    // Initialize sum
    let sum = 0;

    // Loop through the array and add each element to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Display the sum
    console.log("Sum of array elements:", sum);
}

// Example usage:
let myNumbers = [1, 2, 3, 4, 5];
sumArrayElements(myNumbers); // output:- 15


//! If-Else Statements

//* Problem 10
// Write a function 'isEven' that takes a number as input and displays whether the number is even or odd.
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("its an Even Number", num);
  } else {
    console.log("its an Odd Number", num);
  }
}
evenOrOdd(88); // Ouput :- 88 is EVen BEcause its devisable with 2

//* Problem 11
// Write a function 'checkVotingEligibility' that takes a person's age as input and displays whether the person is eligible to vote (18 years or older).
function checkVotingEligibility(voterAge) {
  if (voterAge >= 18) {
    console.log("Yes Eligible for vote");
  } else {
    console.log("No its not Eligible for vote");
  }
}
checkVotingEligibility(16);
//! Date

//* Problem 12
// Write a function 'displayCurrentDateTime' that displays the current date and time.
function displayCurrentDateTime() {
  let currentDateAndTime = new Date();
  console.log(currentDateAndTime);
}
displayCurrentDateTime();
//! Numbers

//* Problem 13
// Write a function 'isPrime' that takes a number as input and displays whether the number is prime or not.
// program to check if a number is prime or not
function isPrimeOrNot(number) {
  let isPrime = true;
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  } else {
    console.log("The number is not a prime number.");
  }
  return number ;
}
isPrimeOrNot(29)

//* Problem 14
// Write a function 'squareNumbers' that takes an array of numbers, squares each number, and displays the squared values.
function squareNumbers() {
  let arr = [2, 8, 10, 5];
  arr.map((e) => {
    console.log(e ** 2);
  });
  return arr;
}
squareNumbers();
//! Strings

//* Problem 15
// Write a function 'countVowels' that takes a string as input and displays the count of vowels (a, e, i, o, u) in the string.
function countVowels(str2) {
  let count = 0;
  str2 = str2.split("");
  for (const item of str2) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      count += 1;
    }
  }
  return `Vowels are in this word ${str2}  is: ${count}`;
}
console.log(countVowels("glorious")); // output:- 4 -> o,i,o,u
//! DOM Manipulation

//* Problem 16
// Create an HTML button with the text "Click Me" and a <div> element. When the button is clicked, change the text of the <div> to "Button Clicked!".
function btnClick() {
  // document.querySelector("button");
  document.querySelector("div").innerHTML = "Button Clicked !";
}
//* Problem 17
// Create an HTML form with an input field and a submit button. When the form is submitted, display an alert with the text entered in the input field.
let btn = document.getElementById("btn2");
btn.addEventListener("click", function () {
  let userInput = document.getElementById("text");
  if (userInput.value === "") {
    alert("Please Enter Some Text");
  } else {
    alert(userInput.value);
  }
});
