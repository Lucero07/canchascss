var futbol = document.getElementById('futbol');
var basquet = document.getElementById('basquet');
var tenis = document.getElementById('tenis');
var canchas = document.getElementsByClassName('canchas');

 futbol.addEventListener('click',mostrarFutbol);
 basquet.addEventListener('click',mostrarBasquet);
 tenis.addEventListener('click',mostrarTenis);

 function mostrarFutbol() {
   canchas[0].style.display="block";
   canchas[1].style.display="none";
   canchas[2].style.display="none";

 }

 function mostrarBasquet() {
   canchas[0].style.display="none";
   canchas[1].style.display="block";
   canchas[2].style.display="none";
 }
 function mostrarTenis() {
   canchas[0].style.display="none";
   canchas[1].style.display="none";
   canchas[2].style.display="block";
 }
