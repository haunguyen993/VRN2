// ==========================================
// NAVBAR FUNCTIONALITY
// ==========================================

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER - ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(`
    .content-grid,
    .strategy-card,
    .logistics-item,
    .timeline-card,
    .conclusion-card,
    .lesson-card,
    .stat-box
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// COUNTER ANIMATION
// ==========================================

function animateCounter(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('vi-VN');
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const value = target.getAttribute('data-count');
            if (value && !target.classList.contains('counted')) {
                target.classList.add('counted');
                animateCounter(target, parseInt(value), 2000);
            }
        }
    });
}, { threshold: 0.5 });

// Set up counters
document.querySelectorAll('.stat-value, .result-number').forEach(stat => {
    const text = stat.textContent.replace(/[^0-9]/g, '');
    if (text) {
        stat.setAttribute('data-count', text);
        stat.textContent = '0';
        counterObserver.observe(stat);
    }
});

// ==========================================
// ACTIVE NAVIGATION HIGHLIGHT
// ==========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.backgroundColor = '';
                link.style.color = '';
            });
            navLink.style.backgroundColor = 'rgba(196, 30, 58, 0.1)';
            navLink.style.color = '#c41e3a';
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// IMAGE LAZY LOADING ENHANCEMENT
// ==========================================

const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Kiểm tra nếu ảnh đã load rồi (từ cache)
            if (img.complete && img.naturalHeight !== 0) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                }, { once: true });
                
                // Fallback: nếu load lâu quá, vẫn hiện ảnh
                setTimeout(() => {
                    if (img.style.opacity === '0') {
                        img.style.opacity = '1';
                    }
                }, 1000);
            }
            
            imageObserver.unobserve(img);
        }
    });
}, { threshold: 0.01 });

images.forEach(img => {
    imageObserver.observe(img);
});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// Add CSS for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #c41e3a, #8b0000);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(196, 30, 58, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(196, 30, 58, 0.6);
    }
    
    .scroll-to-top:active {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// TIMELINE ANIMATION
// ==========================================

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ==========================================
// CARD HOVER EFFECTS
// ==========================================

const cards = document.querySelectorAll('.strategy-card, .conclusion-card, .lesson-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// ==========================================
// PARALLAX EFFECT FOR HERO
// ==========================================

const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;
        const maxScroll = window.innerHeight * 0.8; // Giới hạn parallax
        
        if (scrolled < maxScroll) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ==========================================
// READING PROGRESS BAR
// ==========================================

const progressBar = document.createElement('div');
progressBar.className = 'reading-progress';
document.body.appendChild(progressBar);

const progressStyle = document.createElement('style');
progressStyle.textContent = `
    .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #c41e3a, #ffd700);
        z-index: 9999;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(progressStyle);

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / documentHeight) * 100;
    
    progressBar.style.width = progress + '%';
});

// ==========================================
// QUOTE REVEAL ANIMATION
// ==========================================

const quotes = document.querySelectorAll('.quote-box, .tribute-quote, .legacy-quote-final');

const quoteObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const quote = entry.target.querySelector('p');
            if (quote) {
                quote.style.opacity = '0';
                quote.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    quote.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    quote.style.opacity = '1';
                    quote.style.transform = 'scale(1)';
                }, 100);
            }
            quoteObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

quotes.forEach(quote => {
    quoteObserver.observe(quote);
});

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

window.addEventListener('load', () => {
    // Trigger initial highlight
    highlightNavigation();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    console.log('Website Chiến Dịch Điện Biên Phủ đã được tải thành công!');
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener('keydown', (e) => {
    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'B' to scroll to bottom
    if (e.key === 'b' || e.key === 'B') {
        window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth' 
        });
    }
});

// ==========================================
// PRINT OPTIMIZATION
// ==========================================

window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections for printing
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.style.pageBreakInside = 'avoid';
    });
});

// ==========================================
// EASTER EGG - VICTORY ANIMATION
// ==========================================

let clickCount = 0;
const logo = document.querySelector('.logo h2');

if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            // Create victory animation
            const celebration = document.createElement('div');
            celebration.innerHTML = '🎉 Chiến Thắng Điện Biên Phủ - Lừng Lẫy Năm Châu! 🎉';
            celebration.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #c41e3a, #8b0000);
                color: white;
                padding: 30px 50px;
                border-radius: 12px;
                font-size: 1.5rem;
                font-weight: bold;
                box-shadow: 0 10px 40px rgba(196, 30, 58, 0.5);
                z-index: 10000;
                animation: celebration 0.5s ease;
            `;
            
            const celebrationStyle = document.createElement('style');
            celebrationStyle.textContent = `
                @keyframes celebration {
                    0% { transform: translate(-50%, -50%) scale(0); }
                    50% { transform: translate(-50%, -50%) scale(1.1); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
            `;
            document.head.appendChild(celebrationStyle);
            
            document.body.appendChild(celebration);
            
            setTimeout(() => {
                celebration.remove();
                clickCount = 0;
            }, 3000);
        }
    });
}

