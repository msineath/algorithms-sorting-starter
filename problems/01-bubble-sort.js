// Implement Bubble Sort

function swapsies(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}


/*
take array, for length of: sort until each is iterated.
at each el, check if it's greater than neighbor to right.
if it is, swapsies, then (swapped === true).
if looped through AND (swapped === false), return.
*/

function bubbleSort(array) {
  // your code here
    let swapped = true;

    while(swapped) {
      swapped = false;

      for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) {
          swapsies(array, i, i + 1)
          swapped = true;
        }
      }
    }
    if (swapped === false) {
      return array;
    }
}

module.exports = {
  bubbleSort,
  swapsies
};
