/*
 *  Slides the mobile navbar menu and disables body scroll
 */ 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section');


    // Prevents nav transition from appearing when resizing to mobile view
    window.addEventListener('resize', () => {
        if(window.innerWidth > 875) {
            nav.classList.remove('nav-transition');
        }
    }, false);

    burger.addEventListener('click', () => {
        // Toggle nav
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        } else {
            nav.classList.add('nav-active');
        }

        nav.classList.add('nav-transition');

        // Toggle sections
        sections.forEach( section => {
            if (section.classList.contains('section-pushed')){
                section.classList.remove('section-pushed');
            } else {
                section.classList.add('section-pushed');
            }
        });

        // Burger animation
        if (burger.classList.contains('toggle')) {
            burger.classList.remove('toggle');
        } else {
            burger.classList.add('toggle');
        }

        // Animate links and disable body scroll while burger nav is open
        navLinks.forEach( (link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
                bodyScrollLock.enableBodyScroll(nav);
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                bodyScrollLock.disableBodyScroll(nav);
            }
        });

        // Closes burger nav when a link is clicked
        // then scrolls to the appropriate section on the page
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function() {
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                }
                sections.forEach( section => {
                    if (section.classList.contains('section-pushed')){
                        section.classList.remove('section-pushed');
                    }
                });
                if (burger.classList.contains('toggle')) {
                    burger.classList.remove('toggle');
                }

                navLinks.forEach( link => {
                    if (link.style.animation) {
                        link.style.animation = ``;
                        bodyScrollLock.enableBodyScroll(nav);
                    }
                });
            });
        }



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
        document.body.classList.toggle("dark-theme");
    });

}


const app = () => {
    navSlide();
    toggleCollapsible();
    toggleDarkMode();
}

app();