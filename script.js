// List of reasons for the animated background
const reasons = [
    'Rask levering', 'Mobil først', 'SEO optimalisert', 'Rent design', 'Skreddersydd',
    'Pålitelig kode', 'Premium utseende', 'Brukervennlig', 'Moderne stil', 'Alltid oppdatert',
    'Sikre sider', 'Klart merkevare', 'Unike ideer', 'Smidige animasjoner', 'Responsivt oppsett',
    'Frisk UI', 'Skarpe visuelle', 'Fokusert UX', 'Fremtidssikker', 'Grundig testet',
    'Solid support', 'Hjelp 24/7', 'Rask respons', 'Innen 24t', 'Klar prosess',
    'Ærlig rådgivning', 'Ingen skjulte gebyrer', 'Klare kontrakter', 'Vennlig service', 'Direkte kontakt',
    'En-til-en', 'Kreativ touch', 'Egendefinerte farger', 'Logo-vennlig', 'Lett kode',
    'Rask lasting', 'Optimaliserte bilder', 'Enkel å bruke', 'Skaler lett', 'Bygget for vekst',
    'Klare CTAer', 'Klar for markedsføring', 'Profesjonelt utseende', 'Merkevare konsekvent', 'Klar for globalt',
    'Enkel vedlikehold', 'Klar struktur', 'Smidig navigasjon', 'Typografi kjærlighet', 'Skreddersydd layout',
    'Dynamisk innhold', 'Raske endringer', 'Oppdateringsvennlig', 'Klar prising', 'Direkte tilbakemelding',
    'Visuell effekt', 'Konverteringsfokus', 'Testet UX', 'Reelle resultater', 'Sterk identitet',
    'Autentisk stemme', 'Personlig preg', 'Transparent arbeid', 'Topp verktøy', 'Bygget for hånd',
    'Friske konsepter', 'Inspirert design', 'Bruker først', 'Trendbevisst', 'Alltid forbedring',
    'Smidig scroll', 'Elegante farger', 'Merkevareharmoni', 'Visuell balanse', 'Fokuserte mål',
    'Direkte strategi', 'Ekte lidenskap', 'Tidsriktige oppdateringer', 'Raske feilrettinger', 'Klare rapporter',
    'Enkel overlevering', 'Fleksible planer', 'Enkle oppgraderinger', 'Opplæring inkludert', 'Hjelp etter lansering',
    'Dedikert omsorg', 'Nøye testing', 'Klar tidslinje', 'Oppdateringer ved milepæler', 'Levering i tide',
    'Ærlig tilbakemelding', 'Ekte samarbeid', 'Ingen outsourcing', 'Direkte utvikler', 'Kvalitetsfokus',
    'Høye standarder', 'Ekte håndverk', 'Beviste metoder', 'Tillit fra kunder', 'Bygget med hjerte'
];


// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all features
    initScrollingBackground();
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initNavbarScroll();
});

// Initialize scrolling background with reasons
function initScrollingBackground() {
    const scrollContent1 = document.getElementById('scroll-content-1');
    const scrollContent2 = document.getElementById('scroll-content-2');
    const scrollContent3 = document.getElementById('scroll-content-3');
    const scrollContent4 = document.getElementById('scroll-content-4');
    const scrollContent5 = document.getElementById('scroll-content-5');
    const scrollContent6 = document.getElementById('scroll-content-6');
    const scrollContent7 = document.getElementById('scroll-content-7');
    const scrollContent8 = document.getElementById('scroll-content-8');
    const scrollContent9 = document.getElementById('scroll-content-9');
    const scrollContent10 = document.getElementById('scroll-content-10');

    if (!scrollContent1 || !scrollContent2 || !scrollContent3 || !scrollContent4 || !scrollContent5 || !scrollContent6 || !scrollContent7 || !scrollContent8 || !scrollContent9 || !scrollContent10) return;

    // Create different sets of shuffled reasons for each row
    const shuffledReasons1 = shuffleArray([...reasons.slice(0, 10)]);
    const shuffledReasons2 = shuffleArray([...reasons.slice(10, 20)]);
    const shuffledReasons3 = shuffleArray([...reasons.slice(20, 30)]);
    const shuffledReasons4 = shuffleArray([...reasons.slice(30, 40)]);
    const shuffledReasons5 = shuffleArray([...reasons.slice(40, 50)]);
    const shuffledReasons6 = shuffleArray([...reasons.slice(50, 60)]);
    const shuffledReasons7 = shuffleArray([...reasons.slice(60, 70)]);
    const shuffledReasons8 = shuffleArray([...reasons.slice(70, 80)]);
    const shuffledReasons9 = shuffleArray([...reasons.slice(80, 90)]);
    const shuffledReasons10 = shuffleArray([...reasons.slice(90, 100)]);

    const reasonsText1 = shuffledReasons1.join(' • ') + ' • ';
    const reasonsText2 = shuffledReasons2.join(' • ') + ' • ';
    const reasonsText3 = shuffledReasons3.join(' • ') + ' • ';
    const reasonsText4 = shuffledReasons4.join(' • ') + ' • ';
    const reasonsText5 = shuffledReasons5.join(' • ') + ' • ';
    const reasonsText6 = shuffledReasons6.join(' • ') + ' • ';
    const reasonsText7 = shuffledReasons7.join(' • ') + ' • ';
    const reasonsText8 = shuffledReasons8.join(' • ') + ' • ';
    const reasonsText9 = shuffledReasons9.join(' • ') + ' • ';
    const reasonsText10 = shuffledReasons10.join(' • ') + ' • ';

    // Create multiple copies for seamless scrolling
    scrollContent1.textContent = reasonsText1.repeat(4);
    scrollContent2.textContent = reasonsText2.repeat(4);
    scrollContent3.textContent = reasonsText3.repeat(4);
    scrollContent4.textContent = reasonsText4.repeat(4);
    scrollContent5.textContent = reasonsText5.repeat(4);
    scrollContent6.textContent = reasonsText6.repeat(4);
    scrollContent7.textContent = reasonsText7.repeat(4);
    scrollContent8.textContent = reasonsText8.repeat(4);
    scrollContent9.textContent = reasonsText9.repeat(4);
    scrollContent10.textContent = reasonsText10.repeat(4);
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Animate hamburger bars
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navToggle.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = '';
                bar.style.opacity = '';
            }
        });
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');

            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });
}

// Smooth Scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.about-content, .timeline-item, .portfolio-item, .why-choose-item, .contact-grid > *');

    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Timeline animation with delay
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Portfolio items animation with stagger
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.nav');
    if (!navbar) return;

    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove shadow based on scroll position
        if (scrollTop > 10) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll (optional - commented out for better UX)
        /*
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        */

        lastScrollTop = scrollTop;
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sender...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            contactForm.reset();

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Show success message
            showNotification('Meldingen ble sendt! Jeg tar kontakt med deg innen 24 timer.', 'success');
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: inherit;
            padding: 0;
            line-height: 1;
        }
    `;

    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }

    // Add to document
    document.body.appendChild(notification);

    // Close functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for hero section (optional)
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Add smooth hover effects
function initHoverEffects() {
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize additional features on load
window.addEventListener('load', function () {
    initHoverEffects();

    // Add loaded class for any final animations
    document.body.classList.add('loaded');
});

// Handle resize events
window.addEventListener('resize', debounce(function () {
    // Handle any resize-specific logic here
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}, 250));

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
            item.style.transform = 'translateY(-12px)';
            item.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
});


let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // scrolling down
        nav.classList.add('hide');
    } else {
        // scrolling up
        nav.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // handle negative scroll
});

// Also show nav when mouse is near the top (e.g., top 50px)
document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {
        nav.classList.remove('hide');
    }
});





document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stopp standard innsending

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xpwlwpow", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            form.reset();
            document.getElementById("formMessage").style.display = "block";
        } else {
            alert("Noe gikk galt: " + (data.error || "Ukjent feil"));
        }
    })
    .catch(error => {
        alert("Noe gikk galt. Prøv igjen.");
        console.error(error);
    });
});

