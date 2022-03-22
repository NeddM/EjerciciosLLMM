const slider = ["/img/NY1.jpg", "/img/NY2.jpg", "/img/NY3.jpg"];
let i = -1;

siguiente = () => {
  if (i < 2) {
    i++;
    document.getElementById("imagen").src = slider[i];
    console.log(i);
  } else if (i == 3) {
    i = 0;
  }
};

anterior = () => {
  if (i > 0) {
    i--;
    document.getElementById("imagen").src = slider[i];
    console.log(i);
  } else if (i == -1) {
    i = 3;
  }
};
