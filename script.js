// -------------------------------
// Modal de Contato
// -------------------------------

// Abre o modal ao clicar no link "Contato"
document.getElementById('open-contact')?.addEventListener('click', function () {
    document.getElementById('contact-modal').style.display = 'block';
});

// Fecha o modal ao clicar no botão de fechar (X)
document.querySelector('.close')?.addEventListener('click', function () {
    document.getElementById('contact-modal').style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function (event) {
    const modal = document.getElementById('contact-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// -------------------------------
// Carrossel com Botões e Toque
// -------------------------------

document.querySelectorAll('.carrossel-container').forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const nextBtn = container.querySelector('.next');
    const prevBtn = container.querySelector('.prev');

    // Botão "próximo" - rola o carrossel para a direita
    nextBtn.addEventListener('click', () => {
        carrossel.scrollBy({ left: 320, behavior: 'smooth' });
    });

    // Botão "anterior" - rola o carrossel para a esquerda
    prevBtn.addEventListener('click', () => {
        carrossel.scrollBy({ left: -320, behavior: 'smooth' });
    });

    // Controle por toque (mobile)
    let isDown = false;     // Indica se o dedo está pressionado
    let startX;             // Posição inicial do toque
    let scrollLeft;         // Scroll original antes do toque

    // Início do toque
    carrossel.addEventListener('touchstart', e => {
        isDown = true;
        startX = e.touches[0].pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    // Durante o toque (movimento)
    carrossel.addEventListener('touchmove', e => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 1.5; // Multiplica para dar mais sensibilidade
        carrossel.scrollLeft = scrollLeft - walk;
    });

    // Fim do toque
    carrossel.addEventListener('touchend', () => {
        isDown = false;
    });
});

// -------------------------------
// Lightbox com Navegação
// -------------------------------

const lightbox = document.getElementById('lightbox');           // Container da lightbox
const lightboxImg = document.getElementById('lightbox-img');    // Imagem exibida
const lightboxClose = document.querySelector('.lightbox-close');// Botão fechar
const lightboxNext = document.querySelector('.lightbox-next');  // Botão próximo
const lightboxPrev = document.querySelector('.lightbox-prev');  // Botão anterior
const allImgs = Array.from(document.querySelectorAll('.imgprojeto')); // Todas as imagens clicáveis

let currentIndex = 0; // Índice atual da imagem exibida

// Adiciona evento de clique para cada imagem do carrossel
allImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(currentIndex);
    });
});

// Abre a lightbox com a imagem clicada
function openLightbox(index) {
    lightboxImg.src = allImgs[index].src;
    lightbox.classList.remove('hidden');
}

// Fecha a lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
}

// Mostra a próxima imagem
function showNextImage() {
    currentIndex = (currentIndex + 1) % allImgs.length;
    openLightbox(currentIndex);
}

// Mostra a imagem anterior
function showPrevImage() {
    currentIndex = (currentIndex - 1 + allImgs.length) % allImgs.length;
    openLightbox(currentIndex);
}

// Eventos dos botões da lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextImage);
lightboxPrev.addEventListener('click', showPrevImage);

// Fecha a lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Suporte ao teclado: navegação por setas e ESC para fechar
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') closeLightbox();
    }
});
