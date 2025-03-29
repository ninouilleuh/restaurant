document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
            nav.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navToggle.classList.add('scrolled');
        } else {
            navToggle.classList.remove('scrolled');
        }
    });
});

