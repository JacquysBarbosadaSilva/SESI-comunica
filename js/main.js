function openMenu() {
    document.getElementById("menu").style.left = "90"; // Abre o menu
    document.getElementById("overlay").style.display = "block"; // Exibe o overlay
}

function closeMenu() {
    document.getElementById("menu").style.left = "-335px"; // Fecha o menu
    document.getElementById("overlay").style.display = "none"; // Esconde o overlay
}