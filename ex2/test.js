const factorial = require("./factorial");
const gcd = require("./gcd");
const hcm = require("./hcm");
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

if (hcm(6, 21) === 3) {
  console.log("✅ [hcm] Test passed!");
} else {
  console.log(`❌ [hcm] Test failed`);
}

if (toHex(Math.floor(Math.random() * 1000))) {
  console.log("✅ [toHex] Test passed!");
} else {
  console.log(`❌ [toHex] Test failed`);
}
