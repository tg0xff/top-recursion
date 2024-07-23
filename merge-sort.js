function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  const merged = [];
  while (left.length > 0 && right.length > 0) {
    const leftNum = left[left.length - 1];
    const rightNum = right[right.length - 1];
    if (leftNum > rightNum) {
      merged.push(left.pop());
    } else {
      merged.push(right.pop());
    }
  }

  if (left.length > 0) {
    merged.concat(left);
  } else if (right.length > 0) {
    merged.concat(right);
  }

  return merged;
}

console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]):")
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("mergeSort([105, 79, 100, 110]):")
console.log(mergeSort([105, 79, 100, 110]));
