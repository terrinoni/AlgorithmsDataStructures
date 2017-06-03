// Merging function of two sub-arrays
function merge(left, right) {
  var result = [];

  // Comparison
  while(left.length && right.length) {
    if(left[0] <= right[0])
      result.push(left.shift());
    else
      result.push(right.shift());
  }

  // Free remaining elements (if any)
  while(left.length)
    result.push(left.shift());
  while(right.length)
    result.push(right.shift());

  return result;
}

// Recurring part of the algorithm
function mergeSort(arr) {
  if(arr.length < 2)
    return arr;

  var middle = parseInt(arr.length / 2); // compute middle value
  var left = arr.slice(0, middle); // extract left sub-array
  var right = arr.slice(middle, arr.length); // extract right sub-array

  return merge(mergeSort(left), mergeSort(right));
}

var myArray = [76, 3, 99, 123, 5, 3, 77, 543, 21, 54];
console.log(mergeSort(myArray));
