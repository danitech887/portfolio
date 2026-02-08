// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            if (menuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});

// Add mobile menu styles dynamically
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(253, 252, 251, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: calc(var(--spacing-unit) * 3);
            border-bottom: 1px solid var(--color-border);
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            gap: calc(var(--spacing-unit) * 2);
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
`;
document.head.appendChild(mobileMenuStyles);

// ==========================================
// PROJECT FILTER (Projects Page)
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-detail');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        projectItems.forEach(project => {
            const categories = project.dataset.category.split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                project.style.display = 'grid';
                // Fade in animation
                project.style.opacity = '0';
                project.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    project.style.transition = 'all 0.5s ease';
                    project.style.opacity = '1';
                    project.style.transform = 'translateY(0)';
                }, 10);
            } else {
                project.style.opacity = '0';
                project.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    project.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        // In a real application, you would send this to a backend API
        formStatus.textContent = 'Sending message...';
        formStatus.className = 'form-status';
        formStatus.style.display = 'block';
        
        // Simulate API call
        setTimeout(() => {
            // Success
            formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
            
            // In case of error, you would use:
            // formStatus.textContent = 'Oops! Something went wrong. Please try again.';
            // formStatus.className = 'form-status error';
        }, 1500);
    });
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInElements = document.querySelectorAll('.skill-category, .timeline-item, .education-item, .achievement-card, .social-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    lastScroll = currentScroll;
});

// ==========================================
// ANIMATE SKILL BARS ON SCROLL
// ==========================================

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            skillObserver.unobserve(bar);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================

const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    
    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (isPlus ? '+' : '') + (isPercentage ? '%' : '');
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ==========================================
// DYNAMIC YEAR UPDATE
// ==========================================

const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll('.footer-copyright');

copyrightElements.forEach(element => {
    element.textContent = `© ${currentYear} All rights reserved.`;
});

// ==========================================
// PROJECT CARD HOVER EFFECTS
// ==========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.project-placeholder');
        if (image) {
            image.style.transition = 'transform 0.5s ease';
            image.style.transform = 'scale(1.05)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.project-placeholder');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// ==========================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ==========================================

const orbs = document.querySelectorAll('.gradient-orb');

if (orbs.length > 0) {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
            orb.style.transition = 'transform 0.3s ease-out';
        });
    });
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #d64545;');
console.log('%cInterested in how this was built? Check out the source code!', 'font-size: 14px; color: #5a5a5a;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 12px; color: #8a8a8a;');
