function createNav() {
  const navContainer = document.getElementById("nav-container");
  const nav = document.createElement("nav");
  
  const logoLink = document.createElement("a");
  logoLink.href = "index.html";
  const logoImage = document.createElement("img");
  logoImage.src = "./src/app/img/Xplay Games.png";
  logoImage.alt = "Logo - XPlay - Games";
  logoImage.style.height = "70px";
  logoImage.style.width = "auto";
  logoLink.appendChild(logoImage);
  
  const links = [
      { text: "Início", href: "index.html" },
      { text: "Login", href: "login.html" },
      { text: "Sobre", href: "sobre.html" },
      { text: "Suporte", href: "suporte.html" },
      { text: "Carrinho", href: "carrinho.html" }
  ];

  links.forEach(linkInfo => {
      const link = document.createElement("a");
      link.href = linkInfo.href;
      const button = document.createElement("button");
      button.textContent = linkInfo.text;
      link.appendChild(button);
      nav.appendChild(link);
  });

  navContainer.appendChild(nav);
}

createNav();


document.addEventListener("DOMContentLoaded", function () {
  // Função para carregar o conteúdo da página com base no URL
  function loadPage(url) {
      const contentElement = document.getElementById("content");
      
      // Use fetch para carregar o conteúdo da página
      fetch(url)
          .then((response) => response.text())
          .then((html) => {
              contentElement.innerHTML = html;
          })
          .catch((error) => {
              console.error("Erro ao carregar a página:", error);
          });
  }

  // Manipule os cliques nos links da navegação
  const navLinks = document.querySelectorAll("#nav-container a");
  navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const href = this.getAttribute("href");
          loadPage(href);
      });
  });

  // Carregue a página inicial por padrão
  loadPage("home.html");
});