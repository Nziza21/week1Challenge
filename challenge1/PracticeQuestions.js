(Bubble Sort)

function bubbleSort(arr) {
  const len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const inputArray = [5, 6, 1, 3, 4, 2];
const sortedArray = bubbleSort(inputArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]

(Loops - Staircase Problem)

function printStairs(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const hashes = '#'.repeat(i);
    console.log(spaces + hashes);
  }
}

printStairs(2);
// Output:
//  #
// ##

printStairs(3);
// Output:
//   #
//  ##
// ###

(Objects - Volume of a Cylinder)

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  calculateVolume() {
    const pi = Math.PI;
    const volume = pi * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4); // Rounded to four decimal places
  }
}

const cylinder = new Cylinder(3, 5); // Example with a radius of 3 and height of 5
const volume = cylinder.calculateVolume();
console.log(`Volume of the cylinder: ${volume}`);
// Output: Volume of the cylinder: 141.3717
