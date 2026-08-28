// 1. Lógica de Navegación entre páginas
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el salto normal del enlace
        const pageId = link.getAttribute('data-page');

        // Quitar active de todos los enlaces y páginas
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        // Agregar active al enlace clickeado y a la página correspondiente
        link.classList.add('active');
        document.getElementById(pageId).classList.add('active');
        
        // Scroll suave hacia arriba al cambiar de página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 2. Generador de Documentos con imágenes (Simuladas con colores/emojis)
const documentos = [
    { titulo: "Diploma Bachiller Academico", icono: "🎓", color: "#2f3542", archivo: "Portfolio/Resources/Diploma%20Bachiller%20Academico%20.pdf" }
];

const gallery = document.getElementById('docsGallery');

documentos.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doc-card';
    card.innerHTML = `
        <div class="doc-thumbnail" style="background-color: ${doc.color};">
            ${doc.icono}
        </div>
        <div class="doc-info">
            <h3>${doc.titulo}</h3>
            <p>Ver documento</p>
        </div>
    `;
    
    // Evento de clic para abrir el documento real si existe
    card.addEventListener('click', () => {
        if (doc.archivo) {
            window.open(doc.archivo, '_blank');
        } else {
            alert(`Abriendo: ${doc.titulo}\n(Aquí enlazarías el PDF o imagen real, ej: window.open('documento.pdf')`);
        }
    });
    
    gallery.appendChild(card);
});