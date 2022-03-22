const frases = ["Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5"];

generador = () => {
  let i = Math.floor(Math.random() * frases.length);

  console.log(i);

  document.getElementById("generador").innerHTML = frases[i];
};
