let menu = prompt(
    "1. Penjumlahan\n2. Pengurangan\n3. Pembagian\n4. Perkalian\n5. Pangkat 2\n6. Akar Pangkat 2\n7. Akar Pangkat 3"
);

const penambahan = () => {
    let a = parseInt(prompt("Masukkan angka pertama:"));
    let b = parseInt(prompt("Masukkan angka kedua:"));
    return alert(a + b)
};

const pengurangan = () => {
    let a = parseInt(prompt("Masukkan angka pertama:"));
    let b = parseInt(prompt("Masukkan angka kedua:"));
    return alert(a - b)
};

function pembagian() {
    let angka1 = parseInt(prompt("Masukkan angka pertama:"));
    let angka2 = parseInt(prompt("Masukkan angka kedua:"));
    return alert(angka1 / angka2);
}

function perkalian() {
    let angka1 = parseInt(prompt("Masukkan angka pertama:"));
    let angka2 = parseInt(prompt("Masukkan angka kedua:"));
    return alert(angka1 * angka2);
}

function pangkat2() {
  let a = prompt("Masukkan angka:");
  return alert(a ** 2);
};

function akarPangkat2() {
  let a = prompt("Masukkan angka:");
  return alert(Math.sqrt(a));
};

function akarPangkat3() {
  let a = prompt("Masukkan angka:");
  return alert(Math.cbrt(a));
};

if (menu == 1) {
    penambahan();
} else if (menu == 2) {
    pengurangan();
} else if (menu == 3) {
    pembagian();
} else if (menu == 4) {
    perkalian();
} else if (menu == 5) {
    pangkat2();
} else if (menu == 6) {
    akarPangkat2();
} else if (menu == 7) {
    akarPangkat3();
}
