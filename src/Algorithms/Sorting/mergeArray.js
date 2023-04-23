function mergeArray(arrOne, arrTwo) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arrOne.length && j < arrTwo.length) {
    if (arrTwo[j] > arrOne[i]) {
      mergedArray.push(arrOne[i]);
      i++;
    }
    else {
      mergedArray.push(arrTwo[j]);
      j++;
    }
  }

  // When arrOne length is greater than arrTwo length
  while (i < arrOne.length) {
    mergedArray.push(arrOne[i]);
    i++;
  }

  // When arrTwo length is greater than arrOne length
  while (j < arrTwo.length) {
    mergedArray.push(arrTwo[j]);
    j++;
  }
  return mergedArray;
}

const merge = mergeArray([1, 5, 8], [2, 6, 9]);

console.log(merge);