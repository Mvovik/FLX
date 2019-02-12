function addOne(x) {
  return x + 1;
}

function pipe() {
  let sum = arguments[0];

  for(let i = 1; i < arguments.length; i++) {
    sum = arguments[i](sum);
  }
  return sum;
}

pipe(1, addOne);
pipe(1, addOne, addOne); 
