document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealFunction = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealFunction);
    revealFunction(); // Trigger once on load

    // Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(startCounters, 20);
            } else {
                counter.innerText = target;
            }
        });
    };

    const statsSection = document.getElementById('stats');
    
    window.addEventListener('scroll', () => {
        if (!hasCounted && statsSection) {
            const sectionTop = statsSection.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                startCounters();
                hasCounted = true;
            }
        }
    });

    // Form Submission Simulation
    const form = document.getElementById('booking-form');
    const statusMsg = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';

            // Simulate API call
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.opacity = '1';
                form.reset();
                
                statusMsg.innerText = 'Appointment request sent successfully! We will contact you shortly.';
                statusMsg.style.color = '#10b981'; // emerald green
                
                setTimeout(() => {
                    statusMsg.innerText = '';
                }, 5000);
            }, 1500);
        });
    }
});