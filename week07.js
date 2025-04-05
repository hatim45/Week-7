// //Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

// Create the initial array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages", ages);
// Calculate the difference between the last and first elements dynamically
let difference = ages[ages.length - 1] - ages[0];
console.log("Difference:", difference);

// Add a new age to the array
ages.push(45);

// Recalculate the difference with the new array
difference = ages[ages.length - 1] - ages[0];
console.log("Updated Difference:", difference);

// Calculate the average age using a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average Age:", average);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average Letters per Name:", averageLetters);

// Concatenate all the names together, separated by spaces
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i];
  if (i < names.length - 1) {
    concatenatedNames += " "; // Add a space between names, but not at the end
  }
}
console.log("Concatenated Names:", concatenatedNames);


// How do you access the last element of any array?
let array11 = [10, 20, 30, 40];
let lastElement = array11[array11.length - 1];
console.log(lastElement); 


// How do you access the first element of any array?
let array1 = [10, 20, 30, 40];
let firstElement = array1[0];
console.log(firstElement); 


// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// The previously created names array


// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
// The previously created names array
let names2 = ["Kelly", "Sam", "Kate"];

// Create a new array to store the lengths of each name
let nameLengths = [];

// Loop through the names array and add the length of each name to nameLengths
for (let i = 0; i < names2.length; i++) {
  nameLengths.push(names2[i].length);
}

// Output the nameLengths array
console.log("Name Lengths:", nameLengths); // Output: [5, 3, 4]


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum2 = 0;

// Loop through the nameLengths array and add each element to the sum
for (let i = 0; i < nameLengths.length; i++) {
  sum2 += nameLengths[i];
}

// Output the sum of all elements
console.log("Sum of all elements in nameLengths:", sum2); 


// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
    // Initialize an empty string to store the result
    let result = '';
    
    // Use a loop to concatenate the word n times
    for (let i = 0; i < n; i++) {
      result += word;
    }
    
    // Return the final concatenated string
    return result;
  }
  
  // Example usage
  console.log(repeatWord('Hello', 3));

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
    // Concatenate firstName and lastName with a space in between
    return firstName + " " + lastName;
  }
  
  // Example usage
  console.log(getFullName('John', 'Doe')); // Output: John Doe
  console.log(getFullName('Jane', 'Smith'));


// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbers) {
    // Calculate the sum of all numbers in the array using a loop
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Return true if the sum is greater than 100, otherwise return false
    return sum > 100;
  }
  


// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    // Check if the array is empty to avoid division by zero
    if (numbers.length === 0) return 0;
  
    // Initialize a variable to store the sum
    let sum = 0;
  
    // Calculate the sum of all numbers in the array
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Calculate and return the average
    return sum / numbers.length;
  }


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isAverageGreater(array1, array2) {
    // Helper function to calculate the average of an array
    function calculateAverage(array) {
      if (array.length === 0) return 0; // Handle empty array edge case
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
    }
  
    // Calculate averages for both arrays
    const average1 = calculateAverage(array1);
    const average2 = calculateAverage(array2);
  
    // Compare the averages and return the result
    return average1 > average2;
  }


// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    // Return true if it's hot outside and money in pocket is greater than 10.50
    return isHotOutside && moneyInPocket > 10.50;
  }


// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function shouldWearJacket(isAboveSixty, isRaining) {
  if (isAboveSixty <= 60 || isRaining === true) {
    return "true";
  } else {
    return "false";
  }

  console.log(shouldWearJacket(80, yes));
}