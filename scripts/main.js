const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section');


    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Toggle sections
        sections.forEach( section => {
            section.classList.toggle('section-pushed');
        });

        // Animate links
        navLinks.forEach( (link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

}

// function smoothScroll(target, duration) {
//     let target = document.querySelector(target);
//     let targetPosition = target.getBoundingClientRect();
// }

const app = () => {
    navSlide();
    // smoothScroll();
}

app();