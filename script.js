// Script da div personagens

function toggleImage(id) {
    var img = document.getElementById(id);
    
    // Verifica se a imagem está visível
    var isVisible = getComputedStyle(img).display !== 'none';
    
    // Alterna a visibilidade da imagem
    img.style.display = isVisible ? 'none' : 'block';
}