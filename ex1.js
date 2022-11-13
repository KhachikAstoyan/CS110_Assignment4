const n = 10;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (n - i - 1 > j) row += " ";
    else row += "*";
  }

  console.log(row);
}
