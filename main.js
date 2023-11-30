const menu = document.getElementById("menu");
const burgerMenu = document.getElementById("burgerMenu");

function hideAndShow(elemToSHow, elemToHide) {
  elemToSHow.style.display = "flex";
  elemToHide.style.display = "none";
}

function changeMenu(menu, burgerMenu, breakPoint) {
  if (window.innerWidth > breakPoint) {
    hideAndShow(menu, burgerMenu);
  } else {
    hideAndShow(burgerMenu, menu);
  }
}

changeMenu(menu, burgerMenu, 700);

window.addEventListener("resize", () => changeMenu(menu, burgerMenu, 700));


