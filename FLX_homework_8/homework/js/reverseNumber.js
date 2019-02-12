function reverseNumber(a) {
  let b = a.toString();
  b = b.split("").reverse().join("");

  return Math.sign(a) * parseInt(b);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);