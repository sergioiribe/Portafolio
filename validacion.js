const pantalla = document.getElementsByClassName(".hola");

function mostrar() {
  pantalla.classList.add("active");
}

function ocultar() {
  if (pantalla.classList.contains("active")) {
    pantalla.classList.remove("active");
  }
}
 
function send (e) {
    e.preventdefault()
    
}