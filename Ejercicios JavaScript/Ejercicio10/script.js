// A
max(8, 9);
function max(a, b) {
  if (a > b) {
    document.getElementById("resultado1").innerHTML = `El resultado es: ${a}`;
  } else {
    document.getElementById("resultado1").innerHTML = `El resultado es: ${b}`;
  }
}

// B
maxOfThree(5, 4, 6);
function maxOfThree(a, b, c) {
  if (a > b) {
    document.getElementById("resultado2").innerHTML = `El resultado es: ${a}`;
    if (a < c) {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${c}`;
    } else {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${a}`;
    }
  } else if (b > a) {
    document.getElementById("resultado2").innerHTML = `El resultado es: ${b}`;
    if (b < c) {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${c}`;
    } else {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${b}`;
    }
  }
}

// C
esVocal('b')
function esVocal(a) {
  if (
    a == "a" ||
    a == "e" ||
    a == "i" ||
    a == "o" ||
    a == "u" ||
    a == "A" ||
    a == "E" ||
    a == "I" ||
    a == "O" ||
    a == "U"
  ) {
    document.getElementById("resultado3").innerHTML = `El valor ${a} es una vocal`;
  } else {
    document.getElementById("resultado3").innerHTML = `El valor ${a} no es una vocal`;
  }
}

// D


// E
sum()
function sum() {
  const lista = [1, 2, 3, 4]
  for (let i = 0; i > lista.length; i++) {
    let z = lista[i]
    document.getElementById('resultado5').innerHTML = `El resultado de la suma es ${z}`
    console.log(z)
  }

}

