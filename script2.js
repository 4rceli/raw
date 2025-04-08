// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona o link "Contato" que abrirá o modal
    const openLink = document.getElementById("open-contact");

    // Seleciona o modal de contato
    const modal = document.getElementById("contact-modal");

    // Seleciona o botão de fechar (X) dentro do modal
    const closeBtn = modal.querySelector(".close");

    // Quando o link "Contato" for clicado
    openLink.addEventListener("click", (e) => {
        e.preventDefault();            // Impede o comportamento padrão do link
        modal.style.display = "flex"; // Exibe o modal usando flexbox
    });

    // Quando o botão de fechar for clicado
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta o modal
    });

    // Quando o usuário clicar fora do conteúdo do modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"; // Fecha o modal se o clique for no fundo
        }
    });
});

 // Abrir sidebar
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // impede que o clique suba pro window
        sidebar.style.right = "0";
    });

    // Fechar pelo botão X
    closeSidebar.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.style.right = "-250px";
    });

    // Fechar clicando fora da sidebar
    window.addEventListener("click", (e) => {
        // Só fecha se o clique NÃO for dentro da sidebar nem no botão
        if (!sidebar.contains(e.target) && e.target !== menuToggle) {
            sidebar.style.right = "-250px";
        }
    });

    // Marcar a aba ativa no menu
    const links = document.querySelectorAll("nav a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});



