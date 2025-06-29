document.addEventListener('DOMContentLoaded', function() {
    
    // --- الجزء الأول: تفعيل القائمة الجانبية (مع التحديث الجديد) ---
    const menuBar = document.querySelector('.menu-bar');
    const mobileMenu = document.querySelector('.mobile-menu');
    // **جديد**: نحدد كل الروابط الموجودة داخل القائمة الجانبية
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    // **جديد**: دالة مخصصة لإغلاق القائمة
    function closeMobileMenu() {
        menuBar.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
    }

    if (menuBar && mobileMenu && mobileMenuLinks) {
        // عند الضغط على زر الهامبرغر، يتم فتح/إغلاق القائمة
        menuBar.addEventListener('click', function() {
            menuBar.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open');
        });

        // **جديد**: نضيف مستمع حدث لكل رابط داخل القائمة
        mobileMenuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // عند الضغط على أي رابط، قم بإغلاق القائمة
                closeMobileMenu();
            });
        });
    }

    // --- الجزء الثاني: تفعيل الهيدر الثابت عند النزول (يبقى كما هو) ---
    const header = document.querySelector('.header-area');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        });
   }

});





 // تهيئة تأثيرات الجسيمات
        document.addEventListener('DOMContentLoaded', function() {
            if (document.getElementById('particles-js-contact')) {
                particlesJS('particles-js-contact', {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#3a7bd5"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#3a7bd5",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                });
            }










// زر الوضع الليلي والنهاري








         // ==== كود زر الوضع الليلي والنهاري (النسخة المحدثة) ====
        const themeControllerButton = document.querySelector('.theme-controller');
        const htmlElement = document.documentElement;

        // دالة لتطبيق الثيم على عنصر <html>
        function applyTheme(theme) {
            if (theme === 'dark') {
                htmlElement.classList.add('dark');
            } else {
                htmlElement.classList.remove('dark');
            }
        }

        // عند تحميل الصفحة، تحقق من الثيم المحفوظ أو تفضيل النظام
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);

        // إضافة مستمع الحدث لزر التحكم
        if (themeControllerButton) {
            themeControllerButton.addEventListener('click', () => {
                const isDarkMode = htmlElement.classList.contains('dark');
                const newTheme = isDarkMode ? 'light' : 'dark';
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
        
        // باقي أكواد JavaScript الخاصة بك
        // new WOW().init();

        // تهيئة AOS
        AOS.init({
            duration: 1000,
            once: true
        });

            // تأثيرات النموذج
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // عرض رسالة النجاح
                    const successMessage = document.getElementById('successMessage');
                    if (successMessage) {
                        successMessage.classList.remove('hidden');
                        successMessage.classList.add('show');
                        
                        // إعادة تعيين النموذج
                        contactForm.reset();
                        
                        // إخفاء الرسالة بعد 5 ثواني
                        setTimeout(() => {
                            successMessage.classList.remove('show');
                            successMessage.classList.add('hidden');
                        }, 5000);
                    }
                });
            }

            // تأثيرات التمرير السلس للروابط
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // تأثيرات العناصر عند التمرير
            const fadeElements = document.querySelectorAll('.fade-in-up');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            fadeElements.forEach(element => {
                observer.observe(element);
            });

            // تأثيرات 3D للبطاقات
            const cards = document.querySelectorAll('.contact-card, .contact-info-card, .faq-item');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const angleX = (y - centerY) / 20;
                    const angleY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
                    card.style.boxShadow = `${angleY * 2}px ${angleX * 2}px 20px rgba(0,0,0,0.2)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                    card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                });
            });

            // تأثيرات الأزرار
            const buttons = document.querySelectorAll('.btn-primary, .special-btn');
            buttons.forEach(button => {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    button.style.setProperty('--mouse-x', `${x}px`);
                    button.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // تأثيرات النص الكتابي
            const typewriterElements = document.querySelectorAll('.typewriter');
            typewriterElements.forEach(element => {
                const text = element.textContent;
                element.textContent = '';
                
                let i = 0;
                const typing = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typing);
                    }
                }, 100);
            });
        });
        









        document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    
    if (form) {
        // Initialize form validation
        const inputs = form.querySelectorAll('.form-input');
        inputs.forEach(input => {
            const errorElement = document.getElementById(`${input.id}-error`);
            
            // Real-time validation
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            // Blur validation
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            function validateField(field) {
                const errorElement = document.getElementById(`${field.id}-error`);
                
                if (field.validity.valid) {
                    field.classList.remove('invalid');
                    field.classList.add('valid');
                    if (errorElement) errorElement.style.display = 'none';
                } else {
                    field.classList.remove('valid');
                    field.classList.add('invalid');
                    if (errorElement) {
                        errorElement.textContent = getErrorMessage(field);
                        errorElement.style.display = 'block';
                    }
                }
            }
            
            function getErrorMessage(field) {
                if (field.validity.valueMissing) {
                    return 'هذا الحقل مطلوب';
                }
                
                if (field.validity.typeMismatch) {
                    if (field.type === 'email') return 'البريد الإلكتروني غير صحيح';
                }
                
                if (field.validity.patternMismatch) {
                    if (field.id === 'phone') return 'رقم الهاتف يجب أن يكون 11 رقم';
                }
                
                if (field.validity.tooShort) {
                    return `يجب أن يحتوي على الأقل ${field.minLength} حروف`;
                }
                
                return 'القيمة المدخلة غير صالحة';
            }
        });
        
        // Form submission
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validate all fields before submission
            let isValid = true;
            inputs.forEach(input => {
                if (!input.validity.valid) {
                    isValid = false;
                    input.classList.add('invalid');
                    const errorElement = document.getElementById(`${input.id}-error`);
                    if (errorElement) {
                        errorElement.textContent = getErrorMessage(input);
                        errorElement.style.display = 'block';
                    }
                }
            });
            
            if (!isValid) {
                showMessage('error', 'الرجاء تصحيح الأخطاء في النموذج');
                return;
            }
            
            // reCAPTCHA validation (if enabled)
            if (typeof grecaptcha !== 'undefined') {
                const response = grecaptcha.getResponse();
                if (response.length === 0) {
                    document.getElementById('recaptcha-error').textContent = 'الرجاء التحقق من أنك لست روبوت';
                    document.getElementById('recaptcha-error').style.display = 'block';
                    return;
                }
            }
            
            const submitButton = form.querySelector('.submit-btn');
            const btnText = submitButton.querySelector('.btn-text');
            const btnIcon = submitButton.querySelector('.btn-icon');
            const btnLoading = submitButton.querySelector('.btn-loading');
            
            // Show loading state
            submitButton.classList.add('loading');
            
            try {
                const formData = new FormData(form);
                
                // Add reCAPTCHA response if available
                if (typeof grecaptcha !== 'undefined') {
                    formData.append('g-recaptcha-response', grecaptcha.getResponse());
                }
                
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showMessage('success', 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
                    form.reset();
                    
                    // Reset floating labels
                    inputs.forEach(input => {
                        input.classList.remove('valid', 'invalid');
                        const errorElement = document.getElementById(`${input.id}-error`);
                        if (errorElement) errorElement.style.display = 'none';
                    });
                    
                    // Reset reCAPTCHA if enabled
                    if (typeof grecaptcha !== 'undefined') {
                        grecaptcha.reset();
                    }
                } else {
                    const data = await response.json();
                    const errorMsg = data.error || 'حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.';
                    showMessage('error', errorMsg);
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showMessage('error', 'حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.');
            } finally {
                submitButton.classList.remove('loading');
            }
        });
        
        function showMessage(type, message) {
            if (messageDiv) {
                messageDiv.textContent = message;
                messageDiv.className = type;
                messageDiv.style.display = 'block';
                
                // Auto-hide after 5 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            }
        }
    }
    
    // 3D hover effect for contact cards
    const contactCards = document.querySelectorAll('.contact-info-card');
    contactCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)';
        });
    });
    
    // Initialize animations on scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});










document.addEventListener('DOMContentLoaded', function() {
    
    const menuBar = document.querySelector('.menu-bar');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuBar && mobileMenu) {
        menuBar.addEventListener('click', function() {
            // عند الضغط، قم بتبديل كلاس 'is-open' على العنصرين
            menuBar.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open');
        });
    }

});








document.addEventListener('DOMContentLoaded', function() {
    
    // --- الجزء الأول: تفعيل القائمة الجانبية ---
    const menuBar = document.querySelector('.menu-bar');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuBar && mobileMenu) {
        menuBar.addEventListener('click', function() {
            menuBar.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open');
        });
    }

    // --- الجزء الثاني: تفعيل الهيدر الثابت عند النزول ---
    const header = document.querySelector('.header-area');
    
    if (header) {
        window.addEventListener('scroll', function() {
            // window.scrollY هو عدد البكسلات التي تم النزول بها
            if (window.scrollY > 50) { // عندما ينزل المستخدم أكثر من 50 بكسل
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        });
    }

});



  