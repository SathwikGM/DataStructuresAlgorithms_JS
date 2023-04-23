const arr = [1, 4, 8, 5, 9, 10, 0]

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndex = start;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;

      swap(arr, swapIndex, i);
    }
    // console.log(arr);
  }

  swap(arr, swapIndex, start);
  // console.log(arr);
  return (swapIndex);
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // base condition is when left == right
  if (left < right) {
    // first time call to pivot which returns pivot index
    let pivotIndex = pivot(arr, left, right);
    // calling recursivly for the left side of the arr till pivotindex
    quickSort(arr, left, pivotIndex - 1);
    // calling recursivley for the right of the arr after pivot index to the end
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr
}

const sorted = quickSort(arr);
console.log(sorted);