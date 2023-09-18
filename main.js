let inputAngka1;
let inputAngka2;
const penambahan = (a, b) => a + b;
let hasilTambah = penambahan(inputAngka1, inputAngka2);

const pengurangan = (a, b) => a - b;
let hasilKurang = pengurangan(inputAngka1, inputAngka2);
let menu = prompt(
  "1. Penjumlahan\n2. Pengurangan\n3. Pembagian\n4. Perkalian\n5. Pangkat 2\n6. Akar Pangkat 2\n7. Akar Pangkat 3"
);

function pangkat2() {
  let a = prompt("Masukkan angka:");
  return alert(a ** 2);
}

function akarPangkat2() {
  let a = prompt("Masukkan angka:");
  return alert(Math.sqrt(a));
}

function akarPangkat3() {
  let a = prompt("Masukkan angka:");
  return alert(Math.cbrt(a));
}

if (menu == 1) {
  pangkat2();
} else if (menu == 2) {
  akarPangkat2();
} else if (menu == 3) {
  akarPangkat3();
}
