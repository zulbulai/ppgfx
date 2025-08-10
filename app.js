// Professional App Initialization
class PixelPerfectApp {
    constructor() {
        this.isLoading = true;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        // Cache DOM elements
        this.cacheElements();
        
        // Initialize all features
        this.initLoadingScreen();
        this.initHeader();
        this.initMobileMenu();
        this.initNavigation();
        this.initPortfolio();
        this.initFAQ();
        this.initContactForm();
        this.initPaymentSystem();
        this.initAnimations();
        this.initScrollEffects();
        
        console.log('PixelPerfect Graphix app initialized successfully');
    }

    cacheElements() {
        // Loading screen
        this.loadingScreen = document.getElementById('loading-screen');
        
        // Header elements
        this.header = document.getElementById('header');
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        this.nav = document.getElementById('nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Portfolio elements
        this.portfolioFilters = document.querySelectorAll('.filter-btn');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // FAQ elements
        this.faqItems = document.querySelectorAll('.faq-item');
        
        // Contact form
        this.contactForm = document.getElementById('contact-form');
        
        // Payment modal
        this.paymentModal = document.getElementById('payment-modal');
        this.modalClose = document.getElementById('modal-close');
        this.paymentBtns = document.querySelectorAll('.payment-btn');
        
        // Stats counters
        this.statNumbers = document.querySelectorAll('.stat-number[data-count]');
    }

    initLoadingScreen() {
        // Show loading screen for a professional duration
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (this.loadingScreen) {
                    this.loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        this.loadingScreen.style.display = 'none';
                        this.isLoading = false;
                        document.body.style.overflow = 'visible';
                    }, 500);
                }
            }, 1200); // Professional loading time
        });

        // Fallback for slow connections
        setTimeout(() => {
            if (this.loadingScreen && this.loadingScreen.style.display !== 'none') {
                this.loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    this.loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 4000);
    }

    initHeader() {
        if (!this.header) return;

        // Professional header scroll effect
        let lastScrollY = 0;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                this.header.style.background = 'rgba(255, 255, 255, 0.98)';
                this.header.style.backdropFilter = 'blur(20px)';
                this.header.style.borderBottom = '1px solid rgba(30, 64, 175, 0.1)';
            } else {
                this.header.style.background = 'rgba(255, 255, 255, 0.95)';
                this.header.style.backdropFilter = 'blur(20px)';
                this.header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
            }

            // Professional hide/show effect
            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                this.header.style.transform = 'translateY(-100%)';
            } else {
                this.header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', this.debounce(handleScroll, 10));
    }

    initMobileMenu() {
        if (!this.mobileMenuBtn || !this.nav) return;

        this.mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.mobileMenuBtn.classList.toggle('active');
            this.nav.classList.toggle('active');
            
            // Professional body scroll handling
            if (this.nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav.contains(e.target) && !this.mobileMenuBtn.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        if (this.mobileMenuBtn && this.nav) {
            this.mobileMenuBtn.classList.remove('active');
            this.nav.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    }

    initNavigation() {
        if (!this.navLinks.length) return;

        // Professional smooth scrolling - FIX: Make navigation work
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
                
                // Close mobile menu
                this.closeMobileMenu();
            });
        });

        // Professional active link highlighting
        const updateActiveNav = () => {
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';
            
            sections.forEach(section => {
                if (this.header) {
                    const sectionTop = section.offsetTop - this.header.offsetHeight - 100;
                    if (window.scrollY >= sectionTop) {
                        currentSection = section.getAttribute('id');
                    }
                }
            });
            
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', this.debounce(updateActiveNav, 50));
    }

    initPortfolio() {
        if (!this.portfolioFilters.length || !this.portfolioItems.length) return;

        // FIX: Make portfolio filtering work properly
        this.portfolioFilters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                e.preventDefault();
                const filterValue = filter.getAttribute('data-filter');
                
                // Update active filter
                this.portfolioFilters.forEach(btn => btn.classList.remove('active'));
                filter.classList.add('active');
                
                // Professional filtering animation - FIX: Actually filter items
                this.portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
                
                this.currentFilter = filterValue;
                this.showNotification(`Portfolio filtered by: ${filterValue === 'all' ? 'All Projects' : filterValue}`, 'info');
            });
        });
    }

    initFAQ() {
        if (!this.faqItems.length) return;

        // FIX: Make FAQ accordion work properly
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isActive = item.classList.contains('active');
                    
                    // Professional accordion behavior - close others first
                    this.faqItems.forEach(faqItem => {
                        faqItem.classList.remove('active');
                        const answer = faqItem.querySelector('.faq-answer');
                        if (answer) {
                            answer.style.maxHeight = '0';
                        }
                    });
                    
                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                        const answer = item.querySelector('.faq-answer');
                        if (answer) {
                            answer.style.maxHeight = answer.scrollHeight + 'px';
                        }
                    }
                });
            }
        });
    }

    initContactForm() {
        if (!this.contactForm) return;

        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.contactForm);
            const name = formData.get('name')?.trim() || '';
            const email = formData.get('email')?.trim() || '';
            const message = formData.get('message')?.trim() || '';
            
            // Professional validation - FIX: Better validation with clear messages
            if (!this.validateForm(name, email, message)) {
                return;
            }
            
            // Professional form submission simulation
            this.submitForm();
        });

        // Professional real-time validation
        this.contactForm.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }

    validateForm(name, email, message) {
        let isValid = true;

        // Clear all previous errors
        this.contactForm.querySelectorAll('.form-control').forEach(field => {
            this.clearFieldError(field);
        });

        if (!name) {
            this.showFieldError('name', 'Full name is required');
            isValid = false;
        }

        if (!email) {
            this.showFieldError('email', 'Email address is required');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!message) {
            this.showFieldError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            this.showFieldError('message', 'Message should be at least 10 characters long');
            isValid = false;
        }

        if (!isValid) {
            this.showNotification('Please fix the errors in the form before submitting', 'error');
        }

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;

        switch (fieldName) {
            case 'name':
                if (!value) {
                    this.showFieldError(fieldName, 'Full name is required');
                    return false;
                }
                break;
            case 'email':
                if (!value) {
                    this.showFieldError(fieldName, 'Email address is required');
                    return false;
                } else if (!this.isValidEmail(value)) {
                    this.showFieldError(fieldName, 'Please enter a valid email address');
                    return false;
                }
                break;
            case 'message':
                if (!value) {
                    this.showFieldError(fieldName, 'Message is required');
                    return false;
                } else if (value.length < 10) {
                    this.showFieldError(fieldName, 'Message should be at least 10 characters long');
                    return false;
                }
                break;
        }

        this.clearFieldError(fieldName);
        return true;
    }

    showFieldError(fieldName, message) {
        const field = typeof fieldName === 'string' ? document.getElementById(fieldName) : fieldName;
        if (!field) return;

        field.style.borderColor = '#ef4444';
        
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        // Add new error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 4px;
            font-weight: 500;
        `;
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(fieldName) {
        const field = typeof fieldName === 'string' ? document.getElementById(fieldName) : fieldName;
        if (!field) return;

        field.style.borderColor = '';
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    submitForm() {
        const submitBtn = this.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending Message...';
        submitBtn.disabled = true;
        
        // Simulate professional API call
        setTimeout(() => {
            this.showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            this.contactForm.reset();
            
            // Clear any remaining errors
            this.contactForm.querySelectorAll('.form-control').forEach(field => {
                this.clearFieldError(field);
            });
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    initPaymentSystem() {
        // FIX: Make payment buttons work
        this.paymentBtns = document.querySelectorAll('.payment-btn');
        
        if (this.paymentBtns.length && this.paymentModal) {
            // Payment button handlers
            this.paymentBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const plan = btn.getAttribute('data-plan');
                    this.openPaymentModal(plan);
                });
            });
        }

        // Modal close handlers
        if (this.modalClose) {
            this.modalClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.closePaymentModal();
            });
        }

        if (this.paymentModal) {
            this.paymentModal.addEventListener('click', (e) => {
                if (e.target === this.paymentModal || e.target.classList.contains('modal-overlay')) {
                    this.closePaymentModal();
                }
            });
        }

        // ESC key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.paymentModal && !this.paymentModal.classList.contains('hidden')) {
                this.closePaymentModal();
            }
        });

        // Payment processing
        const proceedBtn = document.getElementById('proceed-payment');
        if (proceedBtn) {
            proceedBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.processPayment();
            });
        }
    }

    openPaymentModal(plan) {
        if (!this.paymentModal) return;
        
        const planDetails = {
            monthly: {
                name: 'Monthly Plan',
                price: '₹49/month',
                features: ['100+ Templates', 'Basic Customization', 'Standard Support', 'HD Downloads']
            },
            quarterly: {
                name: 'Quarterly Plan', 
                price: '₹99/3 months',
                features: ['300+ Templates', 'Advanced Customization', 'Priority Support', 'Commercial License']
            },
            annual: {
                name: 'Annual Plan',
                price: '₹299/year', 
                features: ['500+ Templates', 'Premium Customization', 'Dedicated Support', 'Brand Consultation']
            }
        };

        const selectedPlan = planDetails[plan];
        if (!selectedPlan) return;

        // Update modal content
        const selectedPlanEl = document.getElementById('selected-plan');
        const planPriceEl = document.getElementById('plan-price');
        const planFeaturesEl = document.getElementById('plan-features');

        if (selectedPlanEl) selectedPlanEl.textContent = selectedPlan.name;
        if (planPriceEl) planPriceEl.textContent = selectedPlan.price;

        if (planFeaturesEl) {
            planFeaturesEl.innerHTML = '';
            selectedPlan.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                planFeaturesEl.appendChild(li);
            });
        }

        // Show modal with professional animation
        this.paymentModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation
        setTimeout(() => {
            this.paymentModal.style.opacity = '1';
        }, 10);
    }

    closePaymentModal() {
        if (!this.paymentModal) return;
        
        this.paymentModal.classList.add('hidden');
        document.body.style.overflow = 'visible';
        this.paymentModal.style.opacity = '0';
    }

    processPayment() {
        const proceedBtn = document.getElementById('proceed-payment');
        if (!proceedBtn) return;

        const originalText = proceedBtn.textContent;
        
        proceedBtn.textContent = 'Processing Payment...';
        proceedBtn.disabled = true;
        
        // Simulate Razorpay integration
        setTimeout(() => {
            this.closePaymentModal();
            this.showNotification('Payment system ready! We\'ll contact you to complete the subscription setup. Thank you for choosing PixelPerfect Graphix!', 'success');
            proceedBtn.textContent = originalText;
            proceedBtn.disabled = false;
        }, 2500);
    }

    initAnimations() {
        // Professional scroll-based animations
        this.initScrollAnimations();
        this.initCounterAnimations();
        this.initScrollToTop();
    }

    initScrollAnimations() {
        if (typeof IntersectionObserver === 'undefined') return;

        const animateElements = document.querySelectorAll('.value-prop, .service-card, .pricing-card, .testimonial-card, .process-step');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    initCounterAnimations() {
        if (!this.statNumbers.length || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.statNumbers.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    initScrollToTop() {
        // Create professional scroll-to-top button
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        scrollBtn.className = 'scroll-to-top-btn';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');

        // Add professional styles
        const styles = document.createElement('style');
        styles.textContent = `
            .scroll-to-top-btn {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--brand-primary);
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: var(--shadow-lg);
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                transition: all 0.3s ease;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .scroll-to-top-btn.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .scroll-to-top-btn:hover {
                background: var(--brand-primary-hover);
                transform: translateY(-2px);
                box-shadow: var(--shadow-xl);
            }
            
            @media (max-width: 768px) {
                .scroll-to-top-btn {
                    bottom: 1.5rem;
                    right: 1.5rem;
                    width: 45px;
                    height: 45px;
                }
            }
        `;
        document.head.appendChild(styles);

        // FIX: Make scroll to top work properly
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.showNotification('Scrolled to top!', 'info');
        });

        const toggleScrollBtn = () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', this.debounce(toggleScrollBtn, 100));
        document.body.appendChild(scrollBtn);
    }

    initScrollEffects() {
        // FIX: Make all CTA buttons work properly
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn');
            if (!btn) return;
            
            const text = btn.textContent.toLowerCase().trim();
            
            if (text.includes('get started') || text.includes('start free trial')) {
                e.preventDefault();
                this.scrollToSection('#pricing');
                this.showNotification('Choose your perfect plan below!', 'info');
            }
            
            if (text.includes('view portfolio')) {
                e.preventDefault();
                this.scrollToSection('#portfolio');
                this.showNotification('Check out our amazing work!', 'info');
            }
            
            if (text.includes('learn more') && btn.closest('.service-card')) {
                e.preventDefault();
                this.showNotification('Explore our template subscriptions by choosing a plan!', 'info');
                setTimeout(() => this.scrollToSection('#pricing'), 1500);
            }
            
            if (text.includes('get custom design') || text.includes('get custom quote')) {
                e.preventDefault();
                this.scrollToSection('#contact');
                this.showNotification('Tell us about your custom design needs!', 'info');
            }
        });
    }

    scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section && this.header) {
            const headerHeight = this.header.offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Utility functions
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    debounce(func, wait) {
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

    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification-toast').forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification-toast notification-${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icons[type] || icons.info}</span>
                <span class="notification-text">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add professional notification styles
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification-toast {
                    position: fixed;
                    top: 100px;
                    right: 2rem;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    box-shadow: var(--shadow-xl);
                    z-index: 3000;
                    max-width: 400px;
                    min-width: 300px;
                    opacity: 0;
                    transform: translateX(100%);
                    transition: all 0.3s ease;
                    overflow: hidden;
                }
                
                .notification-toast.show {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                .notification-success { border-left: 4px solid var(--brand-success); }
                .notification-error { border-left: 4px solid #ef4444; }
                .notification-info { border-left: 4px solid var(--brand-primary); }
                .notification-warning { border-left: 4px solid var(--brand-secondary); }
                
                .notification-content {
                    display: flex;
                    align-items: flex-start;
                    padding: 1rem;
                    gap: 0.75rem;
                }
                
                .notification-icon {
                    font-size: 1.25rem;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                
                .notification-text {
                    color: var(--text-primary);
                    font-size: 0.875rem;
                    line-height: 1.5;
                    flex-grow: 1;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: var(--text-secondary);
                    cursor: pointer;
                    width: 28px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    flex-shrink: 0;
                    transition: all 0.2s ease;
                    margin-top: -2px;
                }
                
                .notification-close:hover {
                    background: #f3f4f6;
                    color: var(--text-primary);
                }
                
                @media (max-width: 768px) {
                    .notification-toast {
                        right: 1rem;
                        left: 1rem;
                        max-width: none;
                        min-width: auto;
                    }
                }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 10);

        // Auto remove
        const autoRemoveTimer = setTimeout(() => this.removeNotification(notification), 5000);

        // Close button handler
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearTimeout(autoRemoveTimer);
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        if (notification && notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }
}

// Professional error handling
window.addEventListener('error', (e) => {
    console.warn('Non-critical error handled:', e.message);
});

// Professional unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
    console.warn('Promise rejection handled:', e.reason);
    e.preventDefault();
});

// Initialize the application
const app = new PixelPerfectApp();

// Professional feature detection and graceful degradation
if ('serviceWorker' in navigator) {
    console.log('Service Worker supported - ready for PWA features');
}

// Professional performance monitoring
if ('PerformanceObserver' in window) {
    console.log('Performance Observer supported - ready for monitoring');
}

// Professional accessibility enhancements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Professional touch device detection
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouchDevice) {
    document.body.classList.add('touch-device');
}

// Professional reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
    
    const reducedMotionStyles = document.createElement('style');
    reducedMotionStyles.textContent = `
        .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(reducedMotionStyles);
}

console.log('PixelPerfect Graphix - Professional website loaded successfully! 🚀');