document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".videos__seletores button");
  const iframes = document.querySelectorAll(".videos iframe");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove a classe de todos os botões
      buttons.forEach((btn) => {
        btn.classList.remove("videos__seletores__seletor-clicado");
      });

      // Adiciona a classe ao botão clicado
      this.classList.add("videos__seletores__seletor-clicado");

      // Obtém o ID do iframe associado ao botão
      const iframeId = this.getAttribute("data-iframe");

      // Oculta todos os iframes
      iframes.forEach((iframe) => {
        iframe.style.display = "none";
      });

      // Exibe o iframe correspondente ao botão clicado
      const selectedIframe = document.getElementById(iframeId);
      selectedIframe.style.display = "block";
    });
  });
});
