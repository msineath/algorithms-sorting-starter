// Implement Selection Sort


// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  // your code here
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(arr) {
  // your code here
  let swapped = true;

  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      let min = arr[i]
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
          swap(arr, i, j)
          swapped = true;
        }
      }
    }
  }
  return arr;
}

module.exports = {
  selectionSort,
  swap
};
