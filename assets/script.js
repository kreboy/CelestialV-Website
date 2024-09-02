// JavaScript, um beim Klicken auf die Header-Links zu den Abschnitten zu scrollen
document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('header nav a');

    headerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                const windowHeight = window.innerHeight;
                const targetScroll = offsetTop - (windowHeight / 2) + (targetSection.clientHeight / 2);

                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// JavaScript, um Abschnitte bei Scrollen anzuzeigen
window.addEventListener('scroll', revealSections);

function revealSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
}
