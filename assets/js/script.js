// Script da Seção personagens
function toggleImage(id) {
    const img = document.getElementById(id);
    if (!img) return;

    const isVisible = getComputedStyle(img).display !== 'none';
    img.style.display = isVisible ? 'none' : 'block';

    const card = img.closest('.boxPersonagens')?.querySelector('.boxPersonagens2');
    if (card) {
        card.classList.toggle('active', !isVisible);
    }
}

const navLinks = document.querySelectorAll('.navlinks a');
const sections = [...document.querySelectorAll('section[id], div[id], footer')]
    .filter((element) => element.id && element.id !== '');

const highlightNav = () => {
    const scrollPosition = window.scrollY + 160;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        const activeLink = document.querySelector(`.navlinks a[href="#${id}"]`);

        if (!activeLink) return;

        const inView = scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        activeLink.classList.toggle('active', inView);
    });
};

// Mostrar o botão apenas quando chegar na seção "historia"
const btnTopo = document.getElementById("btnTopo");
const secaoHistoria = document.getElementById("historia");
if (btnTopo && secaoHistoria) {
    window.addEventListener("scroll", function () {
        const posicaoHistoria = secaoHistoria.offsetTop;
        btnTopo.style.display = window.scrollY >= posicaoHistoria ? "flex" : "none";
        highlightNav();
    });
}

// Voltar ao topo ao clicar
if (btnTopo) {
    btnTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Nav Hamburguer
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navlinks");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", String(!isExpanded));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

window.addEventListener('load', highlightNav);
window.addEventListener('scroll', highlightNav, { passive: true });

const revealElements = document.querySelectorAll('.historia, .enredo, .sagas, .mangas, .filmes, .musicas, .personagens');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

revealElements.forEach((element) => observer.observe(element));
