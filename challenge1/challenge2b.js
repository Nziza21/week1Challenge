function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const maxDemeritPoints = 12;

  if (speed <= speedLimit) {
    return 'Ok';
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (demeritPoints <= maxDemeritPoints) {
      return `Points: ${demeritPoints}`;
    } else {
      return 'License suspended';
    }
  }
}

// Prompt the user for input
const userInput = prompt("Enter the car's speed (in km/h):");

// Convert the user input to a number
const carSpeed = parseFloat(userInput);

// Check if the input is a valid number
if (!isNaN(carSpeed)) {
  // Calculate and display demerit points or "Ok" message
  const result = calculateDemeritPoints(carSpeed);
  alert(result);
} else {
  // Display an error message for invalid input
  alert('Invalid input. Please enter a valid speed (in km/h).');
}
