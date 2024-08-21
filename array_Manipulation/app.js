// 1. Initialize the Array
let numbers = [5, 3, 8, 1, 2];

// 2. Functions to Implement

// Add a Number
function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}:`, array);
}

// Remove a Number
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`After removing ${number}:`, array);
    } else {
        console.log(`${number} not found in the array.`);
    }
}

// Sort the Numbers
function sortNumbers(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    console.log('Sorted array:', sortedArray);
    return sortedArray;
}

// Calculate Sum
function calculateSum(array) {
    const sum = array.reduce((total, num) => total + num, 0);
    console.log('Sum of numbers:', sum);
    return sum;
}

// Calculate Average
function calculateAverage(array) {
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log('Average of numbers:', average);
    return average;
}

// 3. Main Program

console.log('Initial array:', numbers);

// Demonstrate the use of each function
addNumber(numbers, 4);  // Add 4 to the array
removeNumber(numbers, 3);  // Remove the first occurrence of 3
let sortedArray = sortNumbers(numbers);  // Sort the array
let sum = calculateSum(numbers);  // Calculate the sum
let average = calculateAverage(numbers);  // Calculate the average

// Print the original and modified arrays after each operation
console.log('Final array:', numbers);