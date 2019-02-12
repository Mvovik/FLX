function getMin(a, b, c) {
  let arr = [a, b, c];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

getMin(3, 0, -3);