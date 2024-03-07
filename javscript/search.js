function search(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return null;
}

// console.log(search(numbers,2))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return null;
}

console.log(binarySearch(numbers, 7));

function recursiveBinarySearch(list, target) {
  if (list.length === 0) {
    return false;
  } else {
    let midpoint = Math.floor(list.length / 2);
    if (list[midpoint] === target) {
      return true;
    } else {
      if (list[midpoint] < target) {
        return recursiveBinarySearch(list.slice(midpoint + 1), target);
      } else {
        return recursiveBinarySearch(list.slice(0, midpoint), target);
      }
    }
  }
}

// Example usage
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(recursiveBinarySearch(numbers2, 5)); // Returns true
console.log(recursiveBinarySearch(numbers2, 11));
