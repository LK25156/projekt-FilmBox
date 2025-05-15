//1.najdeme tlačítko a menu
const menuTlacitkoElement = document.querySelector("#menu-tlacitko");
const menuPolozkyElement = document.querySelector("#menu-polozky");

//2.přidáme posluchač události
menuTlacitkoElement.addEventListener("click",() => {
//3.přepínáme třídu show
menuPolozkyElement.classList.toggle("show");

//bonus měníme ikonku
if (menuPolozkyElement.classList.contains("show")) {
  //menu je otevřené - ikonka se změní na křížek
 
  menuTlacitkoElement.innerHTML='<i class="fas fa-xmark"></i>'
} else {
 menuTlacitkoElement.innerHTML = '<i class="fas fa-bars"></i>'
}
})
