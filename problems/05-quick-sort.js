// Implement Quick Sort

function quickSort(array) {
  // your code here
  if(array.length <= 1) {
    return array
  }

  let specialGuy = array.shift()
  let lefty = []
  let righty = []

  for(let i = 0; i < array.length; i++) {
    if(array[i] < specialGuy) {
      lefty.push(array[i])
    } else if (array[i] >= specialGuy) {
      righty.push(array[i])
    }
  }
    let leftySorted = quickSort(lefty)
    let rightySorted = quickSort(righty)

  return leftySorted.concat(specialGuy).concat(rightySorted)
}


module.exports = {
  quickSort
};
