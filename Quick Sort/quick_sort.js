// Main algorithm body
function quickSort(arr, left, right) {
  var len = arr.length;
  var pivot;
  var partitionIndex;

  console.log("working on\t\t" + arr + " (from " + left + " to " + right + ")");

  if(left < right) {
    pivot = right; // this can be random in the array section
    partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1); // recursion on left side of the partition index
    quickSort(arr, partitionIndex + 1, right); // recursion on right side of the partition index
  }

  return arr;
}

// Partition function
function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot]; // get the pivot value
  var partitionIndex = left; // set partition index on left side of our sub-array

  for (var i = left; i < right; i++){
    if(arr[i] < pivotValue){ // if current element is lower than the pivot then...
      swap(arr, i, partitionIndex); // ...switch the partition index with current element and...
      partitionIndex++; // ...increase the position of the partition index
      console.log("new element swapped:\t" + arr);
    }
  }

  console.log("before last swap:\t" + arr);
  swap(arr, right, partitionIndex); // at the end, swap the pivot (on the right) with the partition index, so we are sure than all the elements below the partition index (and so on the right) are lower than the pivot
  console.log("after last swap:\t" + arr);

  return partitionIndex;
}

// Swap function
function swap(arr, i, j) {
  var tmp = arr[i];
   arr[i] = arr[j];
   arr[j] = tmp;
}

var myArray = [40, 7, 23, 2, 54, 1, 77, 2, 10, 4];
console.log(quickSort(myArray, 0, myArray.length - 1));
