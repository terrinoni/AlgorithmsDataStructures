function radixSortLSD(arr, maxDigit) {
  var mod = 10; // this will be used to compute the values from the elements
  var dev = 1; // used to compute in which bucket we should place the element

  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) { // iterate over the various digits
    console.log("iterate over\t\t" + arr);
    var counter = [];
    // import the elements into the various buckets
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev); // compute in which bucket we should place the element
      if(counter[bucket] == null)
        counter[bucket] = []; // the real bucket
      counter[bucket].push(arr[j]); // push the current element into the selected bucket
    }

    // export the elements from the various buckets in a ordered manner
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if(counter[j] != null) { // if the bucket is not empty...
        while ((value = counter[j].shift()) != null) { // ...extract the elements one-by-one and...
          arr[pos++] = value; // ...move the elements in the right place
        }
      }
    }

    console.log("iteration result:\t" + arr);
  }

  return arr;
}

var myArray = [40, 7, 23, 2, 54, 1, 77, 2, 10, 4];
console.log(radixSortLSD(myArray, 2));
