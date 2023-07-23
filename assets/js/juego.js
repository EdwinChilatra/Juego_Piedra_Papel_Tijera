let objeto1 = document.getElementById("0");
let objeto2 = document.getElementById("1");
let objeto3 = document.getElementById("2");
let objeto4 = document.getElementById("0.0");
let objeto5 = document.getElementById("1.0");
let objeto6 = document.getElementById("2.0");

objeto4.addEventListener("click", function() {
    objeto4.style.display = "inline";
    objeto5.style.display = "none";
    objeto6.style.display = "none";
    seleccionComputador();
});

objeto5.addEventListener("click", function() {
  objeto4.style.display = "none";
  objeto5.style.display = "inline";
  objeto6.style.display = "none";
  seleccionComputador();
});

objeto6.addEventListener("click", function() {
  objeto4.style.display = "none";
  objeto5.style.display = "none";
  objeto6.style.display = "inline";
  seleccionComputador();
});


function seleccionComputador() {
  lanzamiento = Math.floor(Math.random() * 3);
  if (lanzamiento === 0 ) {
    objeto1.style.display = "inline";
    objeto2.style.display = "none";
    objeto3.style.display = "none";
  }
  else if (lanzamiento === 1) {
    objeto1.style.display = "none";
    objeto2.style.display = "inline";
    objeto3.style.display = "none";
  }
  else if (lanzamiento === 2) {
    objeto1.style.display = "none";
    objeto2.style.display = "none";
    objeto3.style.display = "inline";
  }
};

resultado.addEventListener("click", (seleccionComputador) =>{
  if(objeto1 === objeto3 || objeto2 === objeto4 || objeto3 === objeto6){
    alert("EMPATE");
  }
  else if(objeto1 === objeto6 || objeto2 === objeto4 || objeto3 === objeto5 ){
    alert("GANA COMPUTADOR");
  }
  else{
    alert("Gana Jugador")    
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







