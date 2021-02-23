// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let result = []

  while (array1.length !== 0 || array2.length !== 0) {
    let val1 = array1.length ? array1[0] : Infinity
    let val2 = array2.length ? array2[0] : Infinity

    if (val1 > val2) {
      result.push(array2.shift())
    } else {
      result.push(array1.shift())
    }
  }

  while (array1.length !== 0) {
    result.push(array1.shift())
  }

  while (array2.length !== 0) {
    result.push(array2.shift())
  }
  return result;
}

function mergeSort(array) {
  // your code here
  if(array.length <= 1) {
    return array
  }
  let mid = (Math.floor(array.length / 2))

  let lefty = array.slice(0, mid)
  let righty = array.slice(mid)

  let sortedLefty = mergeSort(lefty)
  let sortedRighty = mergeSort(righty)

  return merge(sortedLefty, sortedRighty)
}

module.exports = {
  merge,
  mergeSort
};
