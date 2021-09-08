/*
 *  Slides the mobile navbar menu
 */ 
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

/*
 *  Toggles the collapsible accordion for project descriptions
 */ 
const toggleCollapsible = () => {
    const toggleBtns = document.querySelectorAll('.collapsible');
    
    for (let i = 0; i < toggleBtns.length; i++) {
        toggleBtns[i].addEventListener("click", function(){
            this.classList.toggle("active");
            let projContainer = this.parentNode.parentNode;
            const projDesc = projContainer.querySelector(".project-desc");

            if (projDesc.style.display === "block") {
                projDesc.style.display = "none";
                this.querySelector(".toggle-open").style.display = "block";
                this.querySelector(".toggle-close").style.display = "none";
            } else {
                projDesc.style.display = "block";
                this.querySelector(".toggle-open").style.display = "none";
                this.querySelector(".toggle-close").style.display = "block";
            }
        });

    }
}

/*
 *  Toggles dark mode
 */
const toggleDarkMode = () => {
    const darkModeToggleBtn = document.querySelector(".dark-light-mode-btn");

    darkModeToggleBtn.addEventListener("click", function(){
        console.log(this);
        document.body.classList.toggle("dark-theme");
    });

}


const app = () => {
    navSlide();
    toggleCollapsible();
    toggleDarkMode();
}

app();