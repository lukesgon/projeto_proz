function createNav() {
  const navContainer = document.getElementById("nav-container");
  const nav = document.createElement("nav");
  
  const links = [
      { text: "Início", href: "./src/app/pages/Home/home.html"},
      { text: "Login", href: "./src/app/pages/Login/login.html" },
      { text: "Sobre", href: "./src/app/pages/Sobre/sobre.html" },
      { text: "Suporte", href: "./src/app/pages/Suporte/suporte.html" },
      { text: "Carrinho", href: "./src/app/pages/Carrinho/carrinho.html" }
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

          navLinks.forEach((otherLink) => {
            otherLink.querySelector("button").classList.remove("active");
          });
          this.querySelector("button").classList.add("active");
        });
      
  });

   // Função para animar o texto letra por letra
   function animateText() {
    const textElement = document.querySelector('.animated-text');
    const text = textElement.innerText;
    textElement.innerText = '';
    
    let i = 0;
    const interval = 100; // Intervalo em milissegundos (100ms neste exemplo)

    function addNextLetter() {
        if (i < text.length) {
          if (text.charAt(i) === ' ') {
            textElement.innerHTML += '&nbsp;';
          }else {
            textElement.innerText += text.charAt(i);
          } 
          i++;
          setTimeout(addNextLetter, interval);
        } else {
            // Quando todas as letras forem adicionadas, reinicie a animação
            setTimeout(() => {
                textElement.innerText = '';
                i = 0;
                addNextLetter();
            }, 2000); // Aguarde 2 segundos antes de reiniciar
        }
    }

    // Inicie a animação
    addNextLetter();
}

 // Chame a função para iniciar a animação
  animateText();

// Carregue a página inicial por padrão
loadPage("./src/app/pages/Home/home.html");
});