// Computador
let objeto1 = document.getElementById("0");
let objeto2 = document.getElementById("1");
let objeto3 = document.getElementById("2");
// Jugador
let objeto4 = document.getElementById("Piedra");
let objeto5 = document.getElementById("Papel");
let objeto6 = document.getElementById("Tijera");

let humano = null;
let computador = null;


objeto4.addEventListener("click", function() {
    
  objeto4.style.display = "inline";
  objeto5.style.display = "none";
  objeto6.style.display = "none";
  humano = Piedra;
  seleccionComputador();
});

objeto5.addEventListener("click", function() {
  objeto4.style.display = "none";
  objeto5.style.display = "inline";
  objeto6.style.display = "none";
  humano = Papel;
  seleccionComputador();
});

objeto6.addEventListener("click", function() {
  objeto4.style.display = "none";
  objeto5.style.display = "none";
  objeto6.style.display = "inline";
  humano = Tijera;
  seleccionComputador();
});

function seleccionComputador() {
  lanzamiento2 = Math.floor(Math.random() * 3);
  if (lanzamiento2 === 0 ) {
    objeto1.style.display = "inline";
    objeto2.style.display = "none";
    objeto3.style.display = "none";
    computador = Piedra;
  }
  else if (lanzamiento2 === 1) {
    objeto1.style.display = "none";
    objeto2.style.display = "inline";
    objeto3.style.display = "none";
    computador = Papel;
  }
  else if (lanzamiento2 === 2) {
    objeto1.style.display = "none";
    objeto2.style.display = "none";
    objeto3.style.display = "inline";
    computador = Tijera;
  }
};

resultado.addEventListener("click", () =>{
  if(humano == computador){
    alert("EMPATE");
  }
  else if(humano == Piedra && computador == Tijera || humano == Papel && computador == Piedra || humano == Tijera && computador == Papel ){
    alert("Gana Humano");
  }
  else {
    alert("Gana Computador");
  }
});


reset.addEventListener("click",() =>{
  objeto1.style.display = "inline";
  objeto2.style.display = "inline";
  objeto3.style.display = "inline";
  objeto4.style.display = "inline";
  objeto5.style.display = "inline";
  objeto6.style.display = "inline";
});







