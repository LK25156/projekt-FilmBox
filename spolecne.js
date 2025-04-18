//1.najdeme tlačítko a menu
const menuTlacitko = document.querySelector("#menu-tlacitko");
const menuPolozky = document.querySelector("#menu-polozky");
const ikonka = menuTlacitko.querySelector("i"); //najdeme <i> uvnitř tlačítka

//2.přidáme posluchač události
menuTlacitko.addEventListener("click",() => {
//3.přepínáme třídu show
menuPolozky.classList.toggle("show");

//bonus měníme ikonku
if (menuPolozky.classList.contains(show)) {
  //menu je otevřené - ikonka se změní na křížek
  ikonka.classList.remove("fa-bars");
  ikonka.classList.add("fa-xmark");
} else {
  //menu je zavřené - ikonka se změní zpět na hamburger
  ikonka.classList.remove("fa-xmark");
  ikonka.classList.add("fa-bars");
}
});
