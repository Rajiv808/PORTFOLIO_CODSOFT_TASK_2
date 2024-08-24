
// Smooth Scroll for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typed.js for dynamic text effect
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Android Developer'],
    typeSpeed: 50,
});
