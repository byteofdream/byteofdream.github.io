(function () {
    'use strict';

    // ----- Scroll reveal for sections -----
    const revealSections = document.querySelectorAll('section.reveal, .reveal');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.12 };

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealSections.forEach(function (section) {
        revealObserver.observe(section);
    });

    // ----- Nav bar shrink on scroll -----
    const nav = document.querySelector('.nav');
    if (nav) {
        let lastScroll = 0;
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            if (scrollY > 60) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
            lastScroll = scrollY;
        }, { passive: true });
    }

    // ----- Smooth highlight for current page in nav -----
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(function (a) {
        const href = a.getAttribute('href') || '';
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
})();
