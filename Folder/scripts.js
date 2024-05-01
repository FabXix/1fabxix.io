function mostrarSeccion(seccionId) {
    ocultarTodasLasSecciones();
    document.getElementById(seccionId).style.display = 'block';
}

function ocultarTodasLasSecciones() {
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });
}
document.addEventListener("DOMContentLoaded", function () {
    cambiarFondo();
});

function cambiarFondo() {
    document.body.style.backgroundImage = 'url(font.gif)';
    document.body.style.backgroundSize = 'cover';
}

// Resto del código de scripts.js (si lo tienes)
