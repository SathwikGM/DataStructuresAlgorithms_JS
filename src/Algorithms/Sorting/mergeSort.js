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

const arr = [1, 7, 8, 3, 6, 0, 10];
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
}

const merge = mergeSort(arr);
console.log(merge);
