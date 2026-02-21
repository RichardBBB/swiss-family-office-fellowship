/* ============================================================
   SWISS FAMILY OFFICE FELLOWSHIP — APP.JS
   Navigation, animations, accordions, form handling
   ============================================================ */

(function () {
  'use strict';

  /* ── Page Router ── */
  const pages = {
    home:           document.getElementById('page-home'),
    fellowship:     document.getElementById('page-fellowship'),
    curation:       document.getElementById('page-curation'),
    switzerland:    document.getElementById('page-switzerland'),
    'family-offices': document.getElementById('page-family-offices'),
    partners:       document.getElementById('page-partners'),
    invitation:     document.getElementById('page-invitation'),
    faq:            document.getElementById('page-faq'),
    contact:        document.getElementById('page-contact'),
  };

  const navLinks = document.querySelectorAll('[data-page]');
  const mainNav  = document.getElementById('mainNav');
  const navLinksContainer = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  function showPage(pageId) {
    // Hide all
    Object.values(pages).forEach(p => { if (p) p.classList.remove('active'); });

    // Show target
    const target = pages[pageId];
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update active nav link
      document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
        a.classList.toggle('active', a.dataset.page === pageId);
      });

      // Re-trigger animations
      setTimeout(() => observeAnimations(), 100);

      // Close mobile menu
      navLinksContainer.classList.remove('open');
    }
  }

  // Attach click handlers to all [data-page] links
  function attachPageLinks() {
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        if (pageId && pages[pageId]) showPage(pageId);
      });
    });
  }
  attachPageLinks();

  /* ── Sticky Nav + Progress Bar ── */
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
    // Progress bar
    if (progressBar) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }
  });

  /* ── Mobile Hamburger ── */
  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });

  /* ── Hero background zoom ── */
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }

  /* ── Intersection Observer for fade animations ── */
  function observeAnimations() {
    const elements = document.querySelectorAll('.page.active .fade-up, .page.active .fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }
  observeAnimations();

  /* ── Day Accordion ── */
  document.addEventListener('click', function (e) {
    const header = e.target.closest('.day-header');
    if (!header) return;
    const item = header.closest('.day-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.day-item.open').forEach(i => i.classList.remove('open'));

    // Open clicked (if it wasn't open)
    if (!isOpen) item.classList.add('open');
  });

  /* ── FAQ Accordion ── */
  document.addEventListener('click', function (e) {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

    // Open clicked (if it wasn't open)
    if (!isOpen) item.classList.add('open');
  });

  /* ── Form Handling (Formspree) ── */
  const invForm = document.getElementById('invForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = invForm ? invForm.querySelector('button[type="submit"]') : null;

  // Formspree endpoint — submissions go to richardblaese@icloud.com
  // Note: On first submission Formspree will send a confirmation email to activate the form
  const FORMSPREE_ENDPOINT = 'https://formspree.io/richardblaese@icloud.com';

  if (invForm) {
    invForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const acknowledge = document.getElementById('acknowledge').checked;

      if (!fullName) {
        document.getElementById('fullName').focus();
        document.getElementById('fullName').style.borderColor = 'var(--c-gold)';
        return;
      }
      if (!acknowledge) {
        document.getElementById('acknowledge').parentElement.style.opacity = '0.5';
        setTimeout(() => {
          document.getElementById('acknowledge').parentElement.style.opacity = '1';
        }, 600);
        return;
      }

      // Show loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      // Collect all form data
      const formData = new FormData(invForm);

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          // Animate out form, show success
          invForm.style.transition = 'opacity 400ms ease, transform 400ms ease';
          invForm.style.opacity = '0';
          invForm.style.transform = 'translateY(12px)';

          setTimeout(() => {
            invForm.style.display = 'none';
            formSuccess.style.display = 'block';
            formSuccess.style.opacity = '0';
            formSuccess.style.transition = 'opacity 500ms ease';
            setTimeout(() => { formSuccess.style.opacity = '1'; }, 50);
          }, 400);
        } else {
          const data = await response.json();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Request invitation';
          }
          // Show inline error
          let errMsg = 'Something went wrong. Please try again.';
          if (data && data.errors) errMsg = data.errors.map(e => e.message).join(', ');
          alert(errMsg);
        }
      } catch (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request invitation';
        }
        alert('Network error. Please check your connection and try again.');
      }
    });

    // Remove error styling on input
    document.getElementById('fullName').addEventListener('input', function () {
      this.style.borderColor = '';
    });
  }

  /* ── Responsive split grid ── */
  function handleResponsive() {
    const splitResponsives = document.querySelectorAll('.split-responsive');
    splitResponsives.forEach(el => {
      if (window.innerWidth <= 900) {
        el.style.gridTemplateColumns = '1fr';
        el.style.gap = 'var(--s-7)';
      } else {
        el.style.gridTemplateColumns = '1fr 1fr';
        el.style.gap = 'var(--s-10)';
      }
    });
  }
  handleResponsive();
  window.addEventListener('resize', handleResponsive);

  /* ── Subtle parallax on hero image ── */
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.page.active .hero-bg');
    if (!hero) return;
    const scrolled = window.scrollY;
    hero.style.transform = `scale(1) translateY(${scrolled * 0.15}px)`;
  });

  /* ── Number counter animation for facts ── */
  function animateCounters() {
    const factValues = document.querySelectorAll('.page.active .fact-value');
    factValues.forEach(el => {
      const text = el.textContent.trim();
      const num = parseFloat(text);
      if (isNaN(num)) return;
      const suffix = text.replace(String(num), '');
      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (num - start) * eased);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  // Trigger counter when fact-grid enters view
  const factObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        factObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  function observeFacts() {
    const grid = document.querySelector('.page.active .fact-grid');
    if (grid) factObserver.observe(grid);
  }
  observeFacts();

  /* ── Gold line animation on scroll ── */
  const style = document.createElement('style');
  style.textContent = `
    .conf-list li::before {
      transition: height 600ms ease;
    }
    .conf-list.visible li::before {
      height: 20px;
    }
  `;
  document.head.appendChild(style);

  /* ── Cursor glow effect (subtle) ── */
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(180,154,90,0.06) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: left 0.6s ease, top 0.6s ease;
    z-index: 0;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  /* ── Initial page load ── */
  showPage('home');

})();
