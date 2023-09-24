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
const userInput = prompt("Enter the car's speed (in km/h):");
const carSpeed = parseFloat(userInput);
if (!isNaN(carSpeed)) {
  const result = calculateDemeritPoints(carSpeed);
  alert(result);
  alert('Invalid input. Please enter a valid speed (in km/h).');
}
