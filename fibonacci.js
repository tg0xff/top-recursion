function fibs(n) {
  const sequence = [0, 1];
  if (n <= 1) return sequence.slice(0, 1);
  if (n === 2) return sequence;
  for (let i = 3; i <= n; i++) {
    sequence[i - 1] = sequence[i - 2] + sequence[i - 3];
  }
  return sequence;
}

console.log("fibs(8):");
console.log(fibs(8));

function fibsRec(n) {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];
  const prevNum = fibsRec(n - 1);
  return [].concat(prevNum, prevNum[prevNum.length - 1] + prevNum[prevNum.length - 2]);
}

console.log("fibsRec(8):");
console.log(fibsRec(8));
