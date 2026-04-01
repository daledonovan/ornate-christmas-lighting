/* ============================================
   ORNATE CHRISTMAS LIGHTING — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV SCROLL BEHAVIOR ---------- */
  const nav = document.querySelector('.nav');
  const scrollTopBtn = document.querySelector('.scroll-top');

  function onScroll() {
    if (window.scrollY > 60) {
      nav?.classList.add('nav--scrolled');
      scrollTopBtn?.classList.add('visible');
    } else {
      nav?.classList.remove('nav--scrolled');
      scrollTopBtn?.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- MOBILE NAV ---------- */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  const mobileClose = document.querySelector('.nav__mobile-close');

  hamburger?.addEventListener('click', () => {
    mobileNav?.classList.add('open');
    mobileNav.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  function closeMobileNav() {
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (mobileNav && !mobileNav.classList.contains('open')) {
        mobileNav.style.display = 'none';
      }
    }, 300);
  }

  mobileClose?.addEventListener('click', closeMobileNav);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

  /* ---------- PROMO BANNER ---------- */
  const promoClose = document.querySelector('.promo-banner__close');
  const promoBanner = document.querySelector('.promo-banner');

  promoClose?.addEventListener('click', () => {
    promoBanner?.remove();
    sessionStorage.setItem('promoDismissed', '1');
  });

  if (sessionStorage.getItem('promoDismissed')) {
    promoBanner?.remove();
  }

  /* ---------- FAQ ACCORDION ---------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq-item__answer');
        if (a) a.style.maxHeight = '0';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- GSAP ANIMATIONS ---------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const heroTl = gsap.timeline({ delay: 0.3 });
    heroTl
      .to('.hero__content .section-label', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to('.hero__headline', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('.hero__sub', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
      .to('.hero__actions', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3');

    // Set initial states
    gsap.set(['.hero__content .section-label', '.hero__headline', '.hero__sub', '.hero__actions'], {
      y: 30
    });

    // Hero parallax
    gsap.to('.hero__bg', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Generic scroll-in for sections
    gsap.utils.toArray('.service-card, .process-step, .why-feature, .gallery-item, .faq-item').forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: (i % 3) * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Section headers
    gsap.utils.toArray('.section-label, h2').forEach(el => {
      if (el.closest('.hero')) return;
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Trust bar items
    gsap.from('.trust-item', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.trust-bar',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Testimonial
    gsap.from('.testimonial__quote', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.testimonial',
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // Final CTA
    gsap.from('.final-cta h2, .final-cta__slogan, .final-cta__actions', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  /* ---------- GALLERY LIGHTBOX ---------- */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox__img');
  const lightboxClose = document.querySelector('.lightbox__close');

  document.querySelectorAll('.gallery-item, .gallery-masonry-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeMobileNav();
    }
  });

  /* ---------- ACTIVE NAV LINK ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--gold)';
    }
  });

});
