const factorial = require("./factorial");
const gcd = require("./gcd");
const lcm = require("./lcm");
const toHex = require("./toHex");

if (factorial(5) === 120) {
  console.log("✅ [factorial] Test passed!");
} else {
  console.log(`❌ [factorial] Test failed`);
}

if (gcd(6, 21) === 3) {
  console.log("✅ [gcd] Test passed!");
} else {
  console.log(`❌ [gcd] Test failed`);
}

if (lcm(6, 12) === 12) {
  console.log("✅ [lcm] Test passed!");
} else {
  console.log(`❌ [lcm] Test failed`);
}

if (toHex(Math.floor(Math.random() * 1000))) {
  console.log("✅ [toHex] Test passed!");
} else {
  console.log(`❌ [toHex] Test failed`);
}
