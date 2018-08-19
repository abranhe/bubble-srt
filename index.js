'use strict';

module.exports = arr => {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return arr;
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
