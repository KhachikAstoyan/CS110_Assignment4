module.exports = function gcd(a, b) {
  let rem = 0;
  while (a % b !== 0) {
    rem = a % b;
    a = b;
    b = rem;
  }

  return b;
};
