const chars = ["A", "B", "C", "D", "E", "F"];

module.exports = function toHex(num) {
  let hex = [];
  let quotient = num;
  let remainder = 0;

  while (quotient !== 0) {
    remainder = quotient % 16;
    quotient = Math.floor(quotient / 16);
    hex.push(remainder <= 9 ? remainder : chars[remainder - 10]);
  }

  return hex.reverse().join("");
};
