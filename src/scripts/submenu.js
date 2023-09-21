// Seleciona o elemento do menu "baixos"
const baixosLink = document.querySelector(".baixos-link");
const produtosLink = document.querySelector(".produtos-link");

// Seleciona o submenu
const submenu = document.querySelector(".header__menu__submenu");
const submenuPreamp = document.querySelector(".header__menu__submenu-preamp");

// Adiciona um ouvinte de evento de clique ao menu "baixos"
baixosLink.addEventListener("click", (e) => {
  e.preventDefault();
  // Verifica se o submenu está visível
  if (submenu.style.display === "block") {
    // Se estiver visível, esconde o submenu
    submenu.style.display = "none";
  } else {
    // Se não estiver visível, exibe o submenu
    submenu.style.display = "block";
  }
});
document.addEventListener("click", (e) => {
  // Verifica se o clique ocorreu fora do submenu
  if (!submenu.contains(e.target) && e.target !== baixosLink) {
    // Se ocorrer fora do submenu, oculta o submenu
    submenu.style.display = "none";
  }
});

produtosLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (submenuPreamp.style.display === "block") {
    submenuPreamp.style.display = "none";
  } else {
    submenuPreamp.style.display = "block";
  }
});
document.addEventListener("click", (e) => {
  if (!submenuPreamp.contains(e.target) && e.target !== produtosLink) {
    submenuPreamp.style.display = "none";
  }
});
