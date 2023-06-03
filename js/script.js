let menu = document.getElementById("menu_links")
let menuBarras = document.getElementById ("menu_barras")

function mostrarMenu (){
  if (window.getComputedStyle(menu).display == "none") {
    menu.style.display = "flex"
    menuBarras.setAttribute("aria-label", "fechar menu")
    menuBarras.setAttribute("aria-expanded", "true")
  }
  else{
    menu.style.display = "none"
    menuBarras.setAttribute("aria-label", "abrir menu")
    menuBarras.setAttribute("aria-expanded", "false")

  }





  
}