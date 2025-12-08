// Script da Seção personagens
function toggleImage(id) {
    var img = document.getElementById(id);
    // Verifica se a imagem está visível
    var isVisible = getComputedStyle(img).display !== 'none';
    // Alterna a visibilidade da imagem
    img.style.display = isVisible ? 'none' : 'block';
}

// Mostrar o botão apenas quando chegar na seção "historia"
const btnTopo = document.getElementById("btnTopo");
const secaoHistoria = document.getElementById("historia");
window.addEventListener("scroll", function () {
    const posicaoHistoria = secaoHistoria.offsetTop;
    if (window.scrollY >= posicaoHistoria) {
        btnTopo.style.display = "flex";
    } else {
        btnTopo.style.display = "none";
    }
});

// Voltar ao topo ao clicar
btnTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Nav Hamburguer
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});