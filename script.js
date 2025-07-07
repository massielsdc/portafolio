// Mostrar botón al hacer scroll
window.onscroll = function () {
  const boton = document.getElementById("btnVolverArriba");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
};

// Volver arriba
document.getElementById("btnVolverArriba").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
