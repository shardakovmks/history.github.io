let currentSection = 0;

function scrollToNext() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    currentSection += 1;
}

const elements = document.querySelectorAll('.block, .details, .photo');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

/* Перемещение по странице */
const sections = document.querySelectorAll('.timeline, .hero, .footer');

function scrollSection(direction) {
    currentSection += direction;

    if (currentSection < 0) {
        currentSection = 0;
    }

    if (currentSection >= sections.length) {
        currentSection = sections.length - 1;
    }

    sections[currentSection].scrollIntoView({
        behavior: 'smooth'
    });
}


