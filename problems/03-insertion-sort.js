// Implement Insertion Sort

/*
declare location
declare value

traditional for loop:
value = array[i]
location = [i]

while location > 0 && array[location - 1] > added value, 
array[location] = array[location - 1]
location = location - 1
end while
}
array[location = added value]
//////////////////////////////////
loop over outer array (i)
do while loop for j
assign variable to check i - 1
with i loop, grab current el
if j >= 0, and array[j] > array[i] 
*/

function insertionSort(list) {
  // your code here
  let location;
  let value;

  for(let i = 0; i < list.length; i++) {
    value = list[i]
    location = i

    while(location > 0 && list[location - 1] > value) {
      list[location] = list[location - 1]
      location = location - 1
    }

    list[location] = value
  }
  return list
}

let array = [2, -1, 4, 3, 7, 3]

console.log(insertionSort(array))

module.exports = {
  insertionSort
};
