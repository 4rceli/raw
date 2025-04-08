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
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.style.right = "0";
});

closeSidebar.addEventListener("click", () => {
    sidebar.style.right = "-250px";
});

// Fecha a sidebar ao clicar fora dela (opcional)
window.addEventListener("click", (e) => {
    if (e.target === sidebar) {
        sidebar.style.right = "-250px";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});


