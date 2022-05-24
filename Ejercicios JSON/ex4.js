// 1. Muestra la edad
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.age;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

// 2. Muestra del primer elemento pets, el tipo de animal
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.pets[0].animal;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

// 3. Muestra del primer elemento pets, el nombre
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.pets[0].name;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

// 4. Muestra el número de mascotas (pets)
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.pets.length;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

// 5. Muestra el nombre de todas las mascotas


