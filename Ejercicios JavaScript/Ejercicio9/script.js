function muestrac() {
  f = document.getElementById("tbf1").value;
  c = toCelsius(f);
  document.getElementById("tbc1").value = c;
}

function muestraf() {
  c = document.getElementById("tbc2").value;
  f = toFahr(c);
  document.getElementById("tbf2").value = f;
}

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}

toFahr = (c) => {
  return c * 1.8 + 32;
};
