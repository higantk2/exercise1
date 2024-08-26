// Handle click events on navigation links
const navbarLinks = document.querySelectorAll("nav a");


navbarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
       
        // Remove 'active' class from all links and add to the clicked link
        navbarLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');


        // Get the section ID from the link's href attribute
        const targetSectionId = link.getAttribute("href");


        if (targetSectionId === "#") {
            // Scroll to the top of the page if href is "#"
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll to the target section smoothly
            document.querySelector(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Set up Intersection Observer to manage active link state based on section visibility
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');


const observerOptions = {
    root: null, // Observe intersections relative to the viewport
    threshold: 0.3 // Trigger when 30% of the section is visible
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));


            // Add 'active' class to the link corresponding to the currently visible section
            const sectionId = entry.target.getAttribute('id');
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}, observerOptions);


// Observe each section
sections.forEach(section => {
    observer.observe(section);
});



