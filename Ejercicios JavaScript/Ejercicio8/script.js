(function () {
  // Asignamos las variables necesarias
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".boton");
  let clear = document.querySelector(".boton-c");
  let equal = document.querySelector(".boton-igual");

  // Recogemos los datos de los botones clickeados
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.value;
      screen.value += value;
    });
  });

  equal.addEventListener("click", () => {
    if (screen.value === "") {
      screen.value = "Por favor, añade un valor";
    } else {
      let answer = eval(screen.value);
      console.log(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", () => {
    screen.value = "";
  });
})();
