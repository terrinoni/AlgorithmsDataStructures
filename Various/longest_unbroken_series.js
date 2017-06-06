function findUnbroken(array) {
  let maxList = [];
  let count = 0;
  let preVal = array[0];
  maxList.push(preVal);
  count++;

  let currList = [];
  for (var i = 1; i < array.length; i++) {
    if(array[i] > preVal) {
      currList.push(array[i]);
      if(currList.length > maxList.length) {
        maxList = currList;
      }
    } else {
      currList = []; // clean up
      currList.push(array[i]); // store the new value
    }
    preVal = array[i];
  }

  return maxList;
}

let myArray = [15, 2, 38, 71, 2, 524, 98];

console.log("max unbroken list is " + findUnbroken(myArray));
