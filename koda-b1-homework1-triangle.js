// For
let height = 10;
for (let i = 1; i <= height; i++) {
  let triangle = "";
  for (let k = height; k >= i; k--) {
    triangle += " ";
  }
  for (let j = 1; j <= i; j++) {
    triangle += `* `;
    // triangle += `${j} `;
    // triangle += j;
  }
  console.log(triangle);
}

// While
let l = 1;
while (l <= height) {
  let triangle = "";
  let n = height;
  while (n >= l) {
    triangle += " ";
    n--;
  }
  let m = 1;
  while (m <= l) {
    triangle += "* ";
    m++;
  }
  console.log(triangle);
  l++;
}

// Do While
let o = 1;
do {
  let triangle = "";
  let q = height;
  do {
    triangle += " ";
    q--;
  } while (q >= o);
  let p = 1;
  do {
    triangle += "* ";
    p++;
  } while (p <= o);
  o++;
  console.log(triangle);
} while (o <= height);
