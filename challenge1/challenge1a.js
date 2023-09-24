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
const userInput = prompt("Enter the student's mark (between 0 and 100):");

const userMark = parseFloat(userInput);

if (!isNaN(userMark) && userMark >= 0 && userMark <= 100) {
  const grade = calculateGrade(userMark);

  alert(`Student's grade: ${grade}`);
} else {
  alert('Invalid input. Please enter a number between 0 and 100.');
}
