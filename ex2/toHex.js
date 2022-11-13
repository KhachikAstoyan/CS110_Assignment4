const chars = ["A", "B", "C", "D", "E", "F"];

module.exports = function toHex(num) {
  let hex = [];
  let quotient = num;
  let remainder = 0;

  while (quotient !== 0) {
    remainder = quotient % 16;
    quotient = Math.floor(quotient / 16);
    if (remainder <= 9) hex.push(remainder);
    else hex.push(chars[remainder - 10]);
  }

  return hex.reverse().join("");
};
