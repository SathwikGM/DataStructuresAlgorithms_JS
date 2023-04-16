const arr = [10, 20, 14, 12, 6, 30]
function bubbleSort(arr) {
  let swap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        noSwap = false
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort(arr))

function bubbleSort2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort2(arr))