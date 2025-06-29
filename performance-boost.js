// تحسين الأداء وتسريع التحميل
(function() {
    'use strict';
    
    // تحسين تحميل CSS غير الحرج
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = function() { this.media = 'all'; };
        document.head.appendChild(link);
    }
    
    // تحسين الصور الكسولة
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            }, { rootMargin: '50px' });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    // تحسين الحركات
    function optimizeAnimations() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        }
    }
    
    // ضغط DOM
    function optimizeDOM() {
        // إزالة العقد النصية الفارغة
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            node => node.nodeValue.trim() === '' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        );
        
        const emptyNodes = [];
        let node;
        while (node = walker.nextNode()) {
            emptyNodes.push(node);
        }
        emptyNodes.forEach(n => n.remove());
    }
    
    // تحسين الخطوط
    function optimizeFonts() {
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                document.body.classList.add('fonts-loaded');
            });
        }
    }
    
    // تحسين التمرير
    function optimizeScroll() {
        let ticking = false;
        function updateScrollElements() {
            // تحديث العناصر المرتبطة بالتمرير
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollElements);
                ticking = true;
            }
        }, { passive: true });
    }
    
    // تحسين الأحداث
    function optimizeEvents() {
        // استخدام passive listeners للأحداث التي لا تحتاج preventDefault
        const passiveEvents = ['scroll', 'wheel', 'touchstart', 'touchmove'];
        passiveEvents.forEach(event => {
            document.addEventListener(event, () => {}, { passive: true });
        });
    }
    
    // تنفيذ التحسينات عند تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        optimizeAnimations();
        optimizeFonts();
        optimizeScroll();
        optimizeEvents();
        
        // تأخير التحسينات غير الحرجة
        setTimeout(() => {
            lazyLoadImages();
            optimizeDOM();
        }, 100);
    }
    
    // تحسين الذاكرة
    window.addEventListener('beforeunload', () => {
        // تنظيف المراجع
        document.querySelectorAll('*').forEach(el => {
            if (el._listeners) {
                delete el._listeners;
            }
        });
    });
})();