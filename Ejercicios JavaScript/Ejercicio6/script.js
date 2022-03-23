// const frases = ["Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5"];

const frases = [
  { frase: "Frase 1", autor: "Autor 1" },
  { frase: "Frase 2", autor: "Autor 2" },
  { frase: "Frase 3", autor: "Autor 3" },
  { frase: "Frase 4", autor: "Autor 4" },
];

generador = () => {
  let i = Math.floor(Math.random() * frases.length);

  console.log(i);

  document.getElementById(
    "generador"
  ).innerHTML = `${frases[i].frase}, de ${frases[i].autor}`;
};
