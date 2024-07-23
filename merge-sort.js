function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  const merged = [];
  let lIndex = 0;
  let rIndex = 0;
  for (let i = 0; left[lIndex] !== undefined && right[rIndex] !== undefined; i++) {
    const lNum = left[lIndex];
    const rNum = right[rIndex];
    if (lNum < rNum) {
      merged[i] = lNum;
      lIndex++;
    } else {
      merged[i] = rNum;
      rIndex++;
    }
  }

  if (lIndex < left.length) {
    return merged.concat(left.slice(lIndex));
  } else if (rIndex < right.length) {
    return merged.concat(right.slice(rIndex));
  }
  return merged;
}

console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]):")
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("mergeSort([105, 79, 100, 110]):")
console.log(mergeSort([105, 79, 100, 110]));
