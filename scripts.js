/* ---------------------------MOSTRAR/OCULTAR MENÚ LATERAL --------------------------------- */
document.getElementById('toggle-btn').addEventListener('click', function () {
    // Obtiene el menú lateral por su ID y alterna la clase 'active'.
    // La clase 'active' está definida en el CSS para controlar la visibilidad del menú.
    // Cuando el menú tiene la clase 'active', se despliega; cuando no la tiene, se oculta.
    document.getElementById('sidebar').classList.toggle('active');
});

/*----------------------------------- ANIMACIÓN AL CARGAR LA PÁGINA --------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todas las secciones (<section>) de la página usando querySelectorAll.
    // Esto devuelve una lista de nodos (NodeList) que representan las secciones.
    const sections = document.querySelectorAll('section');

    // Itera sobre cada sección y añade la clase 'fade-in'.
    // La clase 'fade-in' está asociada a una animación en el CSS que hace que las secciones
    // aparezcan gradualmente cuando la página se carga.
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

/* --------------------------------------------- ANIMACIÓN PARA LOS CONTENEDORES DE RESUME -------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los contenedores de la sección de currículum usando la clase '.resume-box'.
    // Estos contenedores representan bloques de información como educación, experiencia laboral y habilidades.
    const resumeBoxes = document.querySelectorAll('.resume-box');

    // Crea un IntersectionObserver para detectar cuándo los elementos entran en la vista del usuario.
    // El IntersectionObserver es una API moderna que permite observar cambios en la visibilidad de un elemento.
    const observer = new IntersectionObserver((entries) => {
        // Itera sobre cada entrada (entry) que el observador detecta.
        entries.forEach(entry => {
            // Si el elemento está intersectando (es decir, es visible en la pantalla),
            // se añade la clase 'visible' para activar la animación.
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Define el umbral de visibilidad necesario para activar la animación.
        // En este caso, la animación se activa cuando al menos el 10% del elemento es visible.
    });

    // Itera sobre cada contenedor de currículum y lo observa con el IntersectionObserver.
    // Esto asegura que la animación se active cuando el usuario hace scroll y el elemento entra en la vista.
    resumeBoxes.forEach(box => {
        observer.observe(box);
    });
});