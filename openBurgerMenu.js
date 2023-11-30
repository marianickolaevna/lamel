function openBurgerMenu() {
    let element = document.getElementById("burgerMenuBody");
    let state = getComputedStyle(element).display == "flex";
  
    state ? (element.style.display = "none") : (element.style.display = "flex");
  }