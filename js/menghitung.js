// Inisialisasi Variable
const inputA = document.querySelector(".input-a");
const inputR = document.querySelector(".input-r");
const inputN = document.querySelector(".input-n");
const btnHitung = document.querySelector(".calculate");
const navbarNav = document.querySelector(".navbar-nav");
const btnClear = document.querySelector(".erase");
const inputs = document.querySelectorAll("input");
const calculateResultWrapper = document.querySelector(".calculate-result");

// Memunculkan menu jika membuka di HP
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close menu jika di Klik diluar selain di logo menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fungsi Hitung Deret Eksponensial
function hitungDeretEksponensial(a, r, n) {
  var deret = [];
  for (var i = 0; i < n; i++) {
    var nilai = a * Math.pow(r, n);
    deret.push(nilai);
  }
  return deret;
}

// Syntax button untuk menghitung
btnHitung.addEventListener("click", function (e) {
  e.preventDefault();
  const a = parseFloat(inputA.value);
  const r = parseFloat(inputR.value);
  const n = parseInt(inputN.value);

  const sum = hitungDeretEksponensial(a, r, n);

  calculateResultWrapper.classList.add("visible");
  const deret = sum.join(". Jadi, hasil dari deret eksponensial tersebut adalah ");
  document.querySelector(".deret").innerHTML = `Deret : ${deret}`;
  document.querySelector(".result").innerHTML = `Jumlah n suku : ${sum.reduce(
    (a, b),
    0
  )}`;
});

// Syntax button untuk menghapus
btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  calculateResultWrapper.classList.remove("visible");
});
