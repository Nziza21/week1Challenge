function calculateGrade(mark) {
  if (mark > 79) {
    return 'A';
  } else if (mark >= 60 && mark <= 79) {
    return 'B';
  } else if (mark >= 50 && mark <= 59) {
    return 'C';
  } else if (mark >= 40 && mark <= 49) {
    return 'D';
  } else {
    return 'E';
  }
}

// Prompt the user for input
const userInput = prompt("Enter the student's mark (between 0 and 100):");

// Convert the user input to a number
const userMark = parseFloat(userInput);

// Check if the input is a valid number between 0 and 100
if (!isNaN(userMark) && userMark >= 0 && userMark <= 100) {
  // Calculate the grade based on the user's input
  const grade = calculateGrade(userMark);

  // Display the grade to the user
  alert(`Student's grade: ${grade}`);
} else {
  // Display an error message for invalid input
  alert('Invalid input. Please enter a number between 0 and 100.');
}
