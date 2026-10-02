/**
 * MAIN JAVASCRIPT LOGIC & DYNAMIC INTERACTION ENGINE
 * Lakshana G S Portfolio
 * 
 * High-performance, vanilla JS interactions adhering to "Alive, but quiet".
 * Zero heavy libraries, pure CSS/JS coordination, accessible, respects reduced motion.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initHeaderScroll();
  initMobileMenu();
  initImageFallback();
  initScrollReveal();
  initHeroParallax();
  initCustomCursor();
  initMagneticButtons();
  initSkillsInteraction();
  initProtoSem();
  initContact();
  initBackToTop();
  initScrollSpy();
  initPageTransitions();
});

/**
 * 1. Minimal Hairline Scroll Progress Indicator
 */
function initScrollProgress() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  let ticking = false;
  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      progressBar.style.width = `${progress}%`;
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}

/**
 * 2. Header Subtle Sticky & Scrolled State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Accessible Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    if (navLinks.length > 0) {
      setTimeout(() => navLinks[0].focus(), 100);
    }
  };

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    toggleBtn.focus();
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeMenu();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeMenu();
    }
  });
}

/**
 * 4. Editorial Image Fallback Handler
 */
function initImageFallback() {
  // 1. Hero Portrait Fallback
  const portraitImg = document.querySelector('.portrait-image');
  const portraitFallback = document.querySelector('.portrait-fallback');

  if (portraitImg && portraitFallback) {
    const showPortrait = () => {
      portraitImg.style.display = 'block';
      portraitFallback.style.display = 'none';
    };

    const showFallback = () => {
      portraitImg.style.display = 'none';
      portraitFallback.style.display = 'flex';
    };

    if (portraitImg.complete && portraitImg.naturalWidth > 0) {
      showPortrait();
    } else {
      portraitImg.addEventListener('load', showPortrait);
      portraitImg.addEventListener('error', showFallback);
    }
  }

  // 2. Project Visual Frames Fallback
  const projectCards = document.querySelectorAll('.project-featured, .project-card, .project-secondary');
  projectCards.forEach(card => {
    const img = card.querySelector('.project-image');
    const fallback = card.querySelector('.project-fallback-canvas');
    if (!img || !fallback) return;

    if (img.complete && img.naturalWidth > 0) {
      img.style.display = 'block';
      fallback.style.display = 'none';
    } else {
      img.addEventListener('load', () => {
        img.style.display = 'block';
        fallback.style.display = 'none';
      });
      img.addEventListener('error', () => {
        img.style.display = 'none';
        fallback.style.display = 'flex';
      });
    }
  });
}

/**
 * 5. Reusable Scroll Reveal System (IntersectionObserver)
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * 6. Subtle Hero Mouse Parallax (Desktop Only, Max 4px movement)
 */
function initHeroParallax() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const heroSection = document.querySelector('.hero-section');
  const portraitParallax = document.querySelector('.hero-profile-parallax');
  if (!heroSection || !portraitParallax) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  let isMoving = false;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalised delta (-1 to 1) clamped to max 4px
    mouseX = ((e.clientX - centerX) / (rect.width / 2)) * 4;
    mouseY = ((e.clientY - centerY) / (rect.height / 2)) * 4;

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderParallax);
    }
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
  });

  function renderParallax() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    portraitParallax.style.setProperty('--parallax-x', `${currentX.toFixed(2)}px`);
    portraitParallax.style.setProperty('--parallax-y', `${currentY.toFixed(2)}px`);

    if (Math.abs(mouseX - currentX) > 0.05 || Math.abs(mouseY - currentY) > 0.05) {
      requestAnimationFrame(renderParallax);
    } else {
      isMoving = false;
    }
  }
}

/**
 * 7. Subtle Custom Cursor (Desktop Only)
 */
function initCustomCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let dot = document.querySelector('.custom-cursor-dot');
  let ring = document.querySelector('.custom-cursor-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
  }

  if (!ring) {
    ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring);
  }

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.body.classList.add('cursor-active');
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX.toFixed(2)}px`;
    ring.style.top = `${ringY.toFixed(2)}px`;
    requestAnimationFrame(animateRing);
  };
  requestAnimationFrame(animateRing);

  // Attach hover state to interactive targets
  const interactiveTargets = 'a, button, [role="button"], .interactive-card, .interactive-keyword, .week-tab-btn, .project-featured, .project-card, .recognition-item';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/**
 * 8. Magnetic Button Micro-Interactions (Max 5px offset)
 */
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const magneticBtns = document.querySelectorAll('.btn-magnetic, .btn-primary, .btn-secondary, .back-to-portfolio-link');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
      const clampedX = Math.max(-5, Math.min(5, x));
      const clampedY = Math.max(-5, Math.min(5, y));
      btn.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

/**
 * 9. ProtoSem 20-Week Interactive Journey Map & Destination Explorer
 */
function initProtoSem() {
  const desktopMapContainer = document.getElementById('desktop-journey-map-container');
  const mobileMapContainer = document.getElementById('mobile-journey-map-container');
  const detailContainer = document.getElementById('protosem-detail-container');

  if ((!desktopMapContainer && !mobileMapContainer) || !detailContainer || typeof protoSemWeeks === 'undefined') return;

  // 1. Populate Program Editorial Specifications from protoSemProgramData
  if (typeof protoSemProgramData !== 'undefined' && protoSemProgramData.programInfo) {
    const pInfo = protoSemProgramData.programInfo;
    const elProg = document.getElementById('spec-program');
    const elOrg = document.getElementById('spec-organization');
    const elDur = document.getElementById('spec-duration');
    const elFormat = document.getElementById('spec-format');
    const elFee = document.getElementById('spec-fee');
    if (elProg && pInfo.program) elProg.textContent = pInfo.program;
    if (elOrg && pInfo.organization) elOrg.textContent = pInfo.organization;
    if (elDur && pInfo.duration) elDur.textContent = pInfo.duration;
    if (elFormat && pInfo.format) elFormat.textContent = pInfo.format;
    if (elFee && pInfo.programFee) elFee.textContent = pInfo.programFee;
  }

  // 2. Node Coordinates Mapping for 21 Destinations across 4-Tier Serpentine Canvas (1160 x 640)
  const nodeCoordinates = [
    // Tier 1: Left to Right (y = 80)
    { week: 0, x: 110, y: 80, labelY: 118, tier: 1 },
    { week: 1, x: 290, y: 80, labelY: 118, tier: 1 },
    { week: 2, x: 470, y: 80, labelY: 118, tier: 1 },
    { week: 3, x: 650, y: 80, labelY: 118, tier: 1 },
    { week: 4, x: 830, y: 80, labelY: 118, tier: 1 },
    { week: 5, x: 1030, y: 80, labelY: 118, tier: 1 },

    // Tier 2: Right to Left (y = 240)
    { week: 6, x: 830, y: 240, labelY: 278, tier: 2 },
    { week: 7, x: 650, y: 240, labelY: 278, tier: 2 },
    { week: 8, x: 470, y: 240, labelY: 278, tier: 2 },
    { week: 9, x: 290, y: 240, labelY: 278, tier: 2 },
    { week: 10, x: 110, y: 240, labelY: 278, tier: 2 },

    // Tier 3: Left to Right (y = 400)
    { week: 11, x: 290, y: 400, labelY: 438, tier: 3 },
    { week: 12, x: 470, y: 400, labelY: 438, tier: 3 },
    { week: 13, x: 650, y: 400, labelY: 438, tier: 3 },
    { week: 14, x: 830, y: 400, labelY: 438, tier: 3 },
    { week: 15, x: 1030, y: 400, labelY: 438, tier: 3 },

    // Tier 4: Right to Left (y = 560)
    { week: 16, x: 830, y: 560, labelY: 598, tier: 4 },
    { week: 17, x: 650, y: 560, labelY: 598, tier: 4 },
    { week: 18, x: 470, y: 560, labelY: 598, tier: 4 },
    { week: 19, x: 290, y: 560, labelY: 598, tier: 4 },
    { week: 20, x: 110, y: 560, labelY: 598, tier: 4 }
  ];

  let currentActiveIndex = 0;

  // 3. Render Desktop SVG Journey Canvas
  if (desktopMapContainer) {
    const svgPathString = "M 110 80 L 1030 80 C 1130 80, 1130 240, 1030 240 L 110 240 C 10 240, 10 400, 110 400 L 1030 400 C 1130 400, 1130 560, 1030 560 L 110 560";

    let svgNodesHtml = '';
    nodeCoordinates.forEach(pos => {
      const weekData = protoSemWeeks.find(w => w.week === pos.week) || {
        week: pos.week,
        numberFormatted: String(pos.week).padStart(2, '0'),
        status: pos.week === 0 ? 'completed' : 'upcoming',
        title: `Week ${String(pos.week).padStart(2, '0')}`
      };

      const statusClass = weekData.status === 'completed' ? 'is-completed' : (weekData.status === 'current' ? 'is-current' : 'is-upcoming');
      const statusLabel = weekData.status === 'completed' ? 'COMPLETED' : (weekData.status === 'current' ? 'CURRENT' : 'UPCOMING');

      svgNodesHtml += `
        <g class="map-station-node ${statusClass}" data-week="${pos.week}" tabindex="0" role="button" aria-label="Destination Week ${weekData.numberFormatted}: ${weekData.title} (${statusLabel})">
          <!-- Hit Area -->
          <rect x="${pos.x - 38}" y="${pos.y - 25}" width="76" height="75" class="station-hit-area" />
          
          <!-- Station Markers -->
          <circle class="station-pin-outer" cx="${pos.x}" cy="${pos.y}" r="13" />
          <circle class="station-pin-inner" cx="${pos.x}" cy="${pos.y}" r="5" />
          
          <!-- Node Label -->
          <text class="station-label-num" x="${pos.x}" y="${pos.labelY}">WEEK ${weekData.numberFormatted}</text>
          <text class="station-badge-text" x="${pos.x}" y="${pos.labelY + 11}">${statusLabel}</text>
          <text class="station-explore-cue" x="${pos.x}" y="${pos.labelY + 22}">EXPLORE →</text>
        </g>
      `;
    });

    desktopMapContainer.innerHTML = `
      <svg class="journey-map-svg" viewBox="0 0 1160 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7C6EE6" />
            <stop offset="100%" stop-color="#A79CF8" />
          </linearGradient>
        </defs>

        <!-- Route Milestone Indicators -->
        <text class="route-milestone-marker" x="110" y="42">● START / ONBOARDING</text>
        <text class="route-milestone-marker" x="1030" y="200">MILESTONE SPRINT ↗</text>
        <text class="route-milestone-marker" x="110" y="360">↖ MID-FELLOWSHIP SPRINT</text>
        <text class="route-milestone-marker" x="110" y="618">● HORIZON / DEPLOYED PROTOTYPE</text>

        <!-- Background Journey Route Path -->
        <path class="route-path-bg" d="${svgPathString}" />
        
        <!-- Animated Active Journey Route Path -->
        <path class="route-path-flow" id="svg-flow-path" d="${svgPathString}" />

        <!-- Station Destination Nodes -->
        ${svgNodesHtml}
      </svg>
    `;
  }

  // 4. Render Mobile Vertical Journey Route (< 768px)
  if (mobileMapContainer) {
    let mobileHtml = '';
    protoSemWeeks.forEach(w => {
      const statusClass = w.status === 'completed' ? 'is-completed' : (w.status === 'current' ? 'is-current' : 'is-upcoming');
      const statusLabel = w.status === 'completed' ? 'COMPLETED' : (w.status === 'current' ? 'CURRENT' : 'UPCOMING');

      mobileHtml += `
        <button type="button" class="mobile-station-btn ${statusClass}" data-week="${w.week}" aria-label="Explore Week ${w.numberFormatted}: ${w.title}">
          <span class="mobile-station-dot"></span>
          <div class="mobile-station-info">
            <div class="mobile-station-top">
              <span class="mobile-station-num">WEEK ${w.numberFormatted}</span>
              <span class="mobile-station-badge">${statusLabel}</span>
            </div>
            <span class="mobile-station-title">${w.title || 'Upcoming ProtoSem Phase'}</span>
          </div>
          <span class="mobile-station-arrow" aria-hidden="true">→</span>
        </button>
      `;
    });
    mobileMapContainer.innerHTML = mobileHtml;
  }

  // 5. Week Detail Renderer Function
  const renderWeekDetail = (weekData, shouldScroll = false) => {
    currentActiveIndex = weekData.week;

    // Update active classes on desktop SVG map nodes
    const desktopNodes = document.querySelectorAll('.map-station-node');
    desktopNodes.forEach(node => {
      const w = parseInt(node.getAttribute('data-week'), 10);
      if (w === weekData.week) {
        node.classList.add('is-active');
      } else {
        node.classList.remove('is-active');
      }
    });

    // Update active classes on mobile station buttons
    const mobileNodes = document.querySelectorAll('.mobile-station-btn');
    mobileNodes.forEach(btn => {
      const w = parseInt(btn.getAttribute('data-week'), 10);
      if (w === weekData.week) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // Animate detail container transition
    detailContainer.style.opacity = '0';
    detailContainer.style.transform = 'translateY(8px)';

    setTimeout(() => {
      const totalWeeks = protoSemWeeks.length;
      const prevWeekIndex = (weekData.week - 1 + totalWeeks) % totalWeeks;
      const nextWeekIndex = (weekData.week + 1) % totalWeeks;
      const prevWeekNum = String(prevWeekIndex).padStart(2, '0');
      const nextWeekNum = String(nextWeekIndex).padStart(2, '0');

      const isConsolidated = Boolean((weekData.sections && weekData.sections.length > 0) || weekData.isConsolidated);
      const storyItems = weekData.sections || weekData.days || [];

      const renderMediaItem = (item, extraCardStyle = '') => {
        if (!item) return '';
        if (item.isPlaceholder) {
          return `
            <div class="editorial-photo-card fab-photo-placeholder-card" style="${extraCardStyle}">
              <div class="fab-placeholder-body">
                <div class="fab-placeholder-icon-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span class="fab-placeholder-tag">${item.tag || 'PHOTO TO ADD'}</span>
                </div>
                <h5 class="fab-placeholder-title">${item.title || 'Photograph Required'}</h5>
                ${item.description ? `<p class="fab-placeholder-desc">${item.description}</p>` : ''}
              </div>
              <div class="editorial-photo-caption placeholder-caption">
                <span class="caption-label">Caption:</span> ${item.caption || 'Suggested professional caption for this photograph.'}
              </div>
            </div>
          `;
        }
        const isVideo = item.isVideo || item.type === 'video' || (typeof item.src === 'string' && (item.src.endsWith('.mp4') || item.src.endsWith('.webm') || item.src.endsWith('.mov')));
        if (isVideo) {
          return `
            <div class="editorial-photo-card editorial-video-card" style="${extraCardStyle}">
              <div class="editorial-video-wrapper">
                <video src="${item.src}" autoplay loop muted playsinline controls preload="metadata" class="editorial-video-player" aria-label="${item.alt || 'Video Demonstration'}">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="editorial-photo-caption video-caption">${item.caption}</div>
            </div>
          `;
        }
        return `
          <div class="editorial-photo-card" style="${extraCardStyle}">
            <img src="${item.src}" alt="${item.alt || ''}" loading="lazy" />
            <div class="editorial-photo-caption">${item.caption || ''}</div>
          </div>
        `;
      };

      const render3DModelCard = (m3d, extraCardStyle = '') => {
        return `
          <div class="fab-3d-model-card" style="${extraCardStyle}">
            <div class="model-viewer-header">
              <div class="model-viewer-meta">
                <span class="model-viewer-badge">
                  <span class="status-pulse-dot"></span>
                  <span>${m3d.tag || 'INTERACTIVE 3D CAD MODEL'}</span>
                </span>
                <h4 class="model-viewer-title">${m3d.title || 'Interactive 3D Model'}</h4>
              </div>
              <div class="model-viewer-controls-hint">
                <span class="hint-icon">🔄</span>
                <span class="hint-text">${m3d.instruction || 'Drag to rotate • Scroll to zoom'}</span>
              </div>
            </div>

            <div class="model-viewer-stage">
              <model-viewer 
                src="${m3d.src}"
                alt="${m3d.alt || 'Interactive 3D Model'}"
                auto-rotate
                auto-rotate-delay="1000"
                rotation-per-second="25deg"
                camera-controls
                touch-action="pan-y"
                shadow-intensity="1.2"
                shadow-softness="0.8"
                exposure="1.05"
                camera-orbit="0deg 75deg 105%"
                min-camera-orbit="auto auto 40%"
                max-camera-orbit="auto auto 250%"
                interpolation-decay="200"
                interaction-prompt="none"
                loading="lazy"
                class="interactive-glb-viewer"
                aria-label="${m3d.alt || 'Interactive 3D Model — Drag to rotate, scroll to zoom'}">
                
                <!-- Loading State Slot -->
                <div slot="poster" class="model-loading-poster">
                  <div class="model-loading-spinner"></div>
                  <span class="model-loading-text">Loading 3D CAD Mesh...</span>
                </div>

                <!-- Progress Bar Slot -->
                <div slot="progress-bar" class="model-progress-bar">
                  <div class="model-progress-fill"></div>
                </div>
              </model-viewer>
            </div>

            <div class="model-viewer-footer">
              <span class="model-viewer-tip">💡 <strong>Interaction Guide:</strong> Left click &amp; drag (or 1 finger) to orbit · Right click &amp; drag (or 2 fingers) to pan · Scroll wheel (or pinch) to zoom.</span>
            </div>
          </div>
        `;
      };

      if (weekData.tabs && weekData.tabs.length > 0) {
        // Tabbed Story Experience (Week 06: Laser Cutting & 3D Printing)
        let tabPanelsHtml = '';
        weekData.tabs.forEach((tab, tabIdx) => {
          let panelContentHtml = '';

          // 1. Tab Overview / Intro Banner
          if (tab.intro || (tab.title && tab.educationalSections)) {
            panelContentHtml += `
              <div class="fab-tab-intro-card">
                <div class="fab-intro-header">
                  <span class="fab-intro-badge">${tab.badge || 'DIGITAL FABRICATION TRACK 01'}</span>
                  <h3 class="fab-intro-title">${tab.title || tab.label}</h3>
                </div>
                ${tab.intro ? `<p class="fab-intro-text">${tab.intro}</p>` : ''}
              </div>
            `;
          }

          // 2. Fab Academy-Style Educational Sections (01 — 10)
          if (tab.educationalSections && tab.educationalSections.length > 0) {
            tab.educationalSections.forEach(sec => {
              let secBodyHtml = '';

              // Text content
              if (sec.content) {
                secBodyHtml += `<p class="fab-sec-text">${sec.content}</p>`;
              }

              // Concept Flow (What is 3D Printing: Digital Model -> Slicing -> Layer-by-Layer -> Physical)
              if (sec.conceptFlow && sec.conceptFlow.length > 0) {
                secBodyHtml += `
                  <div class="fab-flow-wrapper">
                    <span class="fab-flow-label">CORE ADDITIVE MANUFACTURING CONCEPT</span>
                    <div class="fab-flow-chain">
                      ${sec.conceptFlow.map((cf, cfIdx) => `
                        <div class="fab-flow-node ${cfIdx === sec.conceptFlow.length - 1 ? 'is-final' : ''}">
                          <span class="fab-flow-step">${String(cfIdx + 1).padStart(2, '0')}</span>
                          <span class="fab-flow-name">${cf.label}</span>
                        </div>
                        ${cfIdx < sec.conceptFlow.length - 1 ? '<span class="fab-flow-arrow">→</span>' : ''}
                      `).join('')}
                    </div>
                  </div>
                `;
              }

              // Applications pills (Section 01)
              if (sec.applications && sec.applications.length > 0) {
                secBodyHtml += `
                  <div class="fab-apps-container">
                    <span class="fab-apps-label">COMMON FABRICATION APPLICATIONS</span>
                    <div class="fab-apps-grid">
                      ${sec.applications.map(app => `
                        <div class="fab-app-pill">
                          <span class="fab-pill-dot"></span>
                          <span>${app}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              }

              // Technical illustration placeholder (Section 01)
              if (sec.illustrationPlaceholder) {
                secBodyHtml += `
                  <div class="fab-technical-placeholder">
                    <div class="tech-placeholder-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div class="tech-placeholder-meta">
                      <span class="tech-placeholder-tag">TECHNICAL ILLUSTRATION</span>
                      <h4 class="tech-placeholder-title">${sec.illustrationPlaceholder.title}</h4>
                      <p class="tech-placeholder-sub">${sec.illustrationPlaceholder.subtitle}</p>
                    </div>
                  </div>
                `;
              }

              // Numbered Steps List (Section 02)
              if (sec.steps && sec.steps.length > 0) {
                secBodyHtml += `
                  <div class="fab-numbered-steps-list">
                    ${sec.steps.map((st, sIdx) => `
                      <div class="fab-step-list-item">
                        <span class="fab-step-list-num">${String(sIdx + 1).padStart(2, '0')}</span>
                        <p class="fab-step-list-text">${st}</p>
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Process Flow Visual (Section 02)
              if (sec.processFlow && sec.processFlow.length > 0) {
                secBodyHtml += `
                  <div class="fab-flow-wrapper">
                    <span class="fab-flow-label">WORKFLOW PROCESS FLOW</span>
                    <div class="fab-flow-chain">
                      ${sec.processFlow.map((pf, pfIdx) => `
                        <div class="fab-flow-node ${pfIdx === sec.processFlow.length - 1 ? 'is-final' : ''}">
                          <span class="fab-flow-step">${String(pfIdx + 1).padStart(2, '0')}</span>
                          <span class="fab-flow-name">${pf.label}</span>
                        </div>
                        ${pfIdx < sec.processFlow.length - 1 ? '<span class="fab-flow-arrow">↓</span>' : ''}
                      `).join('')}
                    </div>
                  </div>
                `;
              }

              // Stages of 3D Printing Grid (Section 03)
              if (sec.stages && sec.stages.length > 0) {
                secBodyHtml += `
                  <div class="fab-stages-grid">
                    ${sec.stages.map(st => `
                      <div class="fab-stage-card">
                        <div class="fab-stage-header">
                          <span class="fab-stage-num">${st.stageNumber}</span>
                          <h4 class="fab-stage-title">${st.title}</h4>
                        </div>
                        <p class="fab-stage-desc">${st.description}</p>
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Operations Comparison (Section 03 Laser Track)
              if (sec.operations && sec.operations.length > 0) {
                secBodyHtml += `
                  <div class="fab-ops-grid">
                    ${sec.operations.map(op => `
                      <div class="fab-op-card">
                        <div class="fab-op-header">
                          <span class="fab-op-tag">${op.tag}</span>
                          <h4 class="fab-op-title">${op.type}</h4>
                        </div>
                        <p class="fab-op-desc">${op.description}</p>
                        ${op.softwareNote ? `
                          <div class="fab-op-note">
                            <span class="fab-op-note-label">RDWorks Toolpath:</span>
                            <span>${op.softwareNote}</span>
                          </div>
                        ` : ''}
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Types Grid (Section 04 Technologies / Lasers)
              if (sec.types && sec.types.length > 0) {
                secBodyHtml += `
                  <div class="fab-types-grid">
                    ${sec.types.map(t => `
                      <div class="fab-type-card">
                        <div class="fab-type-header">
                          <span class="fab-type-tag">${t.tag}</span>
                          <h4 class="fab-type-title">${t.name}</h4>
                        </div>
                        <p class="fab-type-desc">${t.description}</p>
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Materials Cards Grid (Section 06 3D Printing Materials)
              if (sec.materialsCards && sec.materialsCards.length > 0) {
                secBodyHtml += `
                  <div class="fab-mat-cards-grid">
                    ${sec.materialsCards.map(mat => `
                      <div class="fab-mat-card">
                        <div class="fab-mat-header">
                          <span class="fab-mat-tag">${mat.type}</span>
                          <h4 class="fab-mat-title">${mat.name}</h4>
                        </div>
                        <p class="fab-mat-desc">${mat.description}</p>
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Common Materials Pills (Section 05 Laser Cutting Materials)
              if (sec.materials && sec.materials.length > 0) {
                secBodyHtml += `
                  <div class="fab-materials-wrapper">
                    <span class="fab-materials-label">COMMON LASER-CUTTING MATERIALS</span>
                    <div class="fab-materials-grid">
                      ${sec.materials.map(m => `
                        <div class="fab-material-pill">
                          <span class="material-dot"></span>
                          <span>${m}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              }

              if (sec.safetyNote) {
                secBodyHtml += `
                  <div class="fab-safety-alert">
                    <div class="fab-safety-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <div class="fab-safety-content">
                      <span class="fab-safety-title">MATERIAL & PROCESS OVERVIEW</span>
                      <p class="fab-safety-text">${sec.safetyNote}</p>
                    </div>
                  </div>
                `;
              }

              // Advantages & Limitations (Combined / Structured)
              if (sec.advantages || sec.limitations) {
                secBodyHtml += `
                  <div class="fab-pros-cons-grid">
                    ${sec.advantages && sec.advantages.length > 0 ? `
                      <div class="fab-pros-column">
                        <span class="fab-pros-label">✓ KEY ADVANTAGES</span>
                        <div class="fab-items-grid is-advantages">
                          ${sec.advantages.map(adv => `
                            <div class="fab-item-card">
                              <span class="fab-item-bullet">✓</span>
                              <span class="fab-item-text">${adv}</span>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    ` : ''}
                    ${sec.limitations && sec.limitations.length > 0 ? `
                      <div class="fab-cons-column">
                        <span class="fab-cons-label">— TECHNICAL LIMITATIONS</span>
                        <div class="fab-items-grid is-limitations">
                          ${sec.limitations.map(lim => `
                            <div class="fab-item-card">
                              <span class="fab-item-bullet">—</span>
                              <span class="fab-item-text">${lim}</span>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    ` : ''}
                  </div>
                `;
              } else if (sec.items && sec.items.length > 0) {
                const isLimitation = sec.heading.toLowerCase().includes('limitation');
                secBodyHtml += `
                  <div class="fab-items-grid ${isLimitation ? 'is-limitations' : 'is-advantages'}">
                    ${sec.items.map(item => `
                      <div class="fab-item-card">
                        <span class="fab-item-bullet">${isLimitation ? '—' : '✓'}</span>
                        <span class="fab-item-text">${item}</span>
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Workflow Sequence (Section 08 Laser Cutting Track)
              if (sec.workflowSequence && sec.workflowSequence.length > 0) {
                secBodyHtml += `
                  <div class="fab-sequence-wrapper">
                    <span class="fab-sequence-label">DIGITAL-TO-PHYSICAL SEQUENCE</span>
                    <div class="fab-sequence-chain">
                      ${sec.workflowSequence.map((ws, wsIdx) => `
                        <div class="fab-sequence-node ${wsIdx === sec.workflowSequence.length - 1 ? 'is-final' : ''}">
                          <span class="fab-sequence-num">${String(wsIdx + 1).padStart(2, '0')}</span>
                          <span class="fab-sequence-text">${ws.label}</span>
                        </div>
                        ${wsIdx < sec.workflowSequence.length - 1 ? '<span class="fab-sequence-arrow">→</span>' : ''}
                      `).join('')}
                    </div>
                  </div>
                `;
              }

              // Interactive 3D Model Viewer (if configured in educational sections)
              if (sec.model3d) {
                secBodyHtml += render3DModelCard(sec.model3d);
              }

              // Dedicated Media Image (Section 09 Printer & Section 10 Filament)
              if (sec.media) {
                secBodyHtml += `
                  <div class="step-media-container" style="margin-top: var(--space-4);">
                    ${renderMediaItem(sec.media, 'margin: 0;')}
                  </div>
                `;
              } else if (sec.images && sec.images.length > 0) {
                secBodyHtml += `
                  <div class="step-media-container" style="margin-top: var(--space-4);">
                    <div class="photo-split-grid">
                      ${sec.images.map(img => renderMediaItem(img, 'margin: 0;')).join('')}
                    </div>
                  </div>
                `;
              } else if (sec.mediaPlaceholder) {
                secBodyHtml += `
                  <div class="fab-technical-placeholder fab-hardware-placeholder">
                    <div class="tech-placeholder-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                    <div class="tech-placeholder-meta">
                      <span class="tech-placeholder-tag">${sec.mediaPlaceholder.tag || 'SPECIFICATION'}</span>
                      <h4 class="tech-placeholder-title">${sec.mediaPlaceholder.title}</h4>
                      <p class="tech-placeholder-sub">${sec.mediaPlaceholder.subtitle}</p>
                    </div>
                  </div>
                `;
              }

              // Specification Info Grid (Section 10 Filament)
              if (sec.specGrid && sec.specGrid.length > 0) {
                secBodyHtml += `
                  <div class="fab-spec-info-grid">
                    ${sec.specGrid.map(sg => `
                      <div class="fab-spec-info-item">
                        <span class="fab-spec-info-label">${sg.label}</span>
                        <span class="fab-spec-info-value">${sg.value}</span>
                      </div>
                    `).join('')}
                  </div>
                `;
              }

              // Key Characteristics Checklist (Section 10 Filament)
              if (sec.characteristics && sec.characteristics.length > 0) {
                secBodyHtml += `
                  <div class="fab-char-wrapper">
                    <span class="fab-char-label">KEY CHARACTERISTICS</span>
                    <div class="fab-char-grid">
                      ${sec.characteristics.map(ch => `
                        <div class="fab-char-item">
                          <span class="fab-char-dot">✓</span>
                          <span class="fab-char-text">${ch}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              }

              panelContentHtml += `
                <div class="fabrication-step-card fab-educational-card" id="fab-sec-${tab.id}-${sec.sectionNumber}">
                  <div class="step-card-header">
                    <span class="step-number-badge">${sec.sectionLabel || ('SECTION ' + sec.sectionNumber)}</span>
                    <h3 class="step-card-title">${sec.heading}</h3>
                    ${sec.subheading ? `<div class="step-card-subheading">${sec.subheading}</div>` : ''}
                  </div>
                  <div class="step-card-body">
                    ${secBodyHtml}
                  </div>
                </div>
              `;
            });
          }

          // 3. Student Practical Documentation (Steps)
          if (tab.practicalSection) {
            const ps = tab.practicalSection;
            panelContentHtml += `
              <div class="fab-practical-banner" id="fab-practical-${tab.id}">
                <div class="fab-practical-badge">
                  <span class="status-pulse-dot"></span>
                  <span>${ps.eyebrow || 'HANDS-ON WORKFLOW'}</span>
                </div>
                <h3 class="fab-practical-title">${ps.heading}</h3>
                <p class="fab-practical-intro">${ps.intro}</p>
              </div>
            `;

            if (ps.steps && ps.steps.length > 0) {
              ps.steps.forEach(s => {
                let mediaHtml = '';
                let allMediaItems = [];

                if (s.model3d) {
                  mediaHtml = `
                    <div class="step-media-container">
                      ${render3DModelCard(s.model3d, 'margin: 0;')}
                    </div>
                  `;
                } else {
                  if (s.media) {
                    if (Array.isArray(s.media)) {
                      allMediaItems.push(...s.media);
                    } else {
                      allMediaItems.push(s.media);
                    }
                  }
                  if (s.images && Array.isArray(s.images)) {
                    allMediaItems.push(...s.images);
                  }
                  if (s.placeholders && Array.isArray(s.placeholders)) {
                    allMediaItems.push(...s.placeholders);
                  }
                  if (s.placeholder) {
                    allMediaItems.push(s.placeholder);
                  }

                  if (allMediaItems.length > 1) {
                    mediaHtml = `
                      <div class="step-media-container">
                        <div class="photo-split-grid">
                          ${allMediaItems.map(item => renderMediaItem(item, 'margin: 0;')).join('')}
                        </div>
                      </div>
                    `;
                  } else if (allMediaItems.length === 1) {
                    mediaHtml = `
                      <div class="step-media-container">
                        ${renderMediaItem(allMediaItems[0], 'margin: 0;')}
                      </div>
                    `;
                  }
                }

                let extraBodyHtml = '';

                // Safety Topics Grid (Step 06)
                if (s.safetyTopics && s.safetyTopics.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-safety-topics-grid">
                      ${s.safetyTopics.map(st => `
                        <div class="fab-safety-topic-card">
                          <div class="fab-safety-topic-header">
                            <span class="fab-safety-topic-num">${st.num || ''}</span>
                            <h4 class="fab-safety-topic-title">${st.title}</h4>
                          </div>
                          ${st.bullets && st.bullets.length > 0 ? `
                            <ul class="fab-safety-topic-bullets">
                              ${st.bullets.map(b => `<li>${b}</li>`).join('')}
                            </ul>
                          ` : ''}
                          ${st.description ? `<p class="fab-safety-topic-desc">${st.description}</p>` : ''}
                        </div>
                      `).join('')}
                    </div>
                  `;
                }

                // Visual Checklist (Steps 06, 11)
                if (s.checklist && s.checklist.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-checklist-container">
                      <span class="fab-checklist-label">${s.checklistLabel || 'VERIFICATION CHECKLIST'}</span>
                      <div class="fab-checklist-grid">
                        ${s.checklist.map(item => `
                          <div class="fab-checklist-item">
                            <span class="fab-checklist-icon">✓</span>
                            <span class="fab-checklist-text">${item}</span>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }

                // Specification / Key-Value Table (Steps 07, 08)
                if (s.specTable && s.specTable.rows && s.specTable.rows.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-spec-table-container">
                      <table class="fab-spec-table">
                        ${s.specTable.columns ? `
                          <thead>
                            <tr>
                              ${s.specTable.columns.map(col => `<th>${col}</th>`).join('')}
                            </tr>
                          </thead>
                        ` : ''}
                        <tbody>
                          ${s.specTable.rows.map(row => `
                            <tr>
                              <td class="spec-param-col"><strong>${row[0]}</strong></td>
                              <td class="spec-value-col">${row[1]}</td>
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                    </div>
                  `;
                }

                // Design Intent Box (Step 09)
                if (s.designIntent) {
                  extraBodyHtml += `
                    <div class="fab-design-intent-box">
                      <div class="fab-intent-header">
                        <span class="fab-intent-tag">${s.designIntent.tag || 'DESIGN INTENT'}</span>
                        <h4 class="fab-intent-title">${s.designIntent.title || 'Fabrication Strategy & Objectives'}</h4>
                      </div>
                      ${s.designIntent.intro ? `<p class="fab-intent-intro">${s.designIntent.intro}</p>` : ''}
                      ${s.designIntent.items ? `
                        <div class="fab-intent-items-grid">
                          ${s.designIntent.items.map(it => `
                            <div class="fab-intent-item-card">
                              <span class="fab-intent-item-num">${it.num}</span>
                              <div class="fab-intent-item-content">
                                <strong class="fab-intent-item-title">${it.title}</strong>
                                <p class="fab-intent-item-desc">${it.desc}</p>
                              </div>
                            </div>
                          `).join('')}
                        </div>
                      ` : ''}
                      ${s.designIntent.note ? `<p class="fab-intent-note">${s.designIntent.note}</p>` : ''}
                    </div>
                  `;
                }

                // Numbered Process Steps (Step 10)
                if (s.processSteps && s.processSteps.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-process-steps-container">
                      <span class="fab-process-steps-label">STEP-BY-STEP CONVERSION WORKFLOW</span>
                      <div class="fab-numbered-steps-list">
                        ${s.processSteps.map((pst, pIdx) => `
                          <div class="fab-step-list-item">
                            <span class="fab-step-list-num">${String(pIdx + 1).padStart(2, '0')}</span>
                            <p class="fab-step-list-text">${pst}</p>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }

                // Conversion Tool Badge (Step 10)
                if (s.conversionTool) {
                  extraBodyHtml += `
                    <div class="fab-tool-badge-box">
                      <span class="fab-tool-badge-label">CONVERSION TOOL / SOFTWARE:</span>
                      <span class="fab-tool-badge-val">${s.conversionTool}</span>
                    </div>
                  `;
                }

                // Technical Note Callout (Steps 10, 13)
                if (s.techNote) {
                  extraBodyHtml += `
                    <div class="fab-tech-note-box">
                      <div class="fab-tech-note-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      <p class="fab-tech-note-text">${s.techNote}</p>
                    </div>
                  `;
                }

                // File Preparation Checklist Cards (Step 11)
                if (s.checklistCards && s.checklistCards.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-prep-cards-grid">
                      ${s.checklistCards.map(cc => `
                        <div class="fab-prep-card">
                          <span class="fab-prep-tag">${cc.title}</span>
                          <p class="fab-prep-desc">${cc.desc}</p>
                        </div>
                      `).join('')}
                    </div>
                  `;
                }

                // RDWorks Nesting Topics (Step 12)
                if (s.layoutTopics && s.layoutTopics.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-layout-topics-grid">
                      ${s.layoutTopics.map(lt => `
                        <div class="fab-layout-topic-card">
                          <span class="fab-layout-topic-tag">${lt.label}</span>
                          <p class="fab-layout-topic-text">${lt.text}</p>
                        </div>
                      `).join('')}
                    </div>
                  `;
                }

                // Layer Legend (Step 12)
                if (s.layerLegend) {
                  extraBodyHtml += `
                    <div class="fab-layer-legend-box">
                      <span class="fab-layer-legend-title">${s.layerLegend.title || 'LAYER CONFIGURATION LEGEND'}</span>
                      <div class="fab-layer-legend-grid">
                        ${s.layerLegend.items.map(ll => `
                          <div class="fab-layer-legend-item">
                            <span class="fab-layer-badge">${ll.colorName}</span>
                            <div class="fab-layer-meta">
                              <strong class="fab-layer-mode">${ll.mode}</strong>
                              <span class="fab-layer-desc">${ll.desc}</span>
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }

                // Machine Settings Parameter Table (Step 13)
                if (s.settingsTable && s.settingsTable.rows && s.settingsTable.rows.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-settings-table-container">
                      <table class="fab-settings-table">
                        <thead>
                          <tr>
                            ${s.settingsTable.columns.map(col => `<th>${col}</th>`).join('')}
                          </tr>
                        </thead>
                        <tbody>
                          ${s.settingsTable.rows.map(row => `
                            <tr>
                              ${row.map((cell, cIdx) => `
                                <td class="${cIdx === 2 ? 'is-operation-cell' : (cIdx >= 3 ? 'is-param-num' : '')}">${cell}</td>
                              `).join('')}
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                    </div>
                  `;
                }

                if (s.note) {
                  extraBodyHtml += `
                    <div class="fab-tech-note-box" style="margin-top: var(--space-4);">
                      <div class="fab-tech-note-icon">📌</div>
                      <p class="fab-tech-note-text">${s.note}</p>
                    </div>
                  `;
                }

                // Chronological Process Sequence Cards (Step 14)
                if (s.processSequence && s.processSequence.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-process-seq-grid">
                      ${s.processSequence.map(psq => `
                        <div class="fab-process-seq-card">
                          <div class="fab-process-seq-header">
                            <span class="fab-process-seq-num">${psq.step}</span>
                            <h4 class="fab-process-seq-title">${psq.title}</h4>
                          </div>
                          <p class="fab-process-seq-desc">${psq.desc}</p>
                        </div>
                      `).join('')}
                    </div>
                  `;
                }

                // Final Output Observations (Step 15)
                if (s.observations && s.observations.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-observations-box">
                      <span class="fab-obs-label">FINAL OUTPUT OBSERVATION</span>
                      <div class="fab-obs-grid">
                        ${s.observations.map(obs => `
                          <div class="fab-obs-item">
                            <span class="fab-obs-dot">•</span>
                            <span class="fab-obs-text">${obs}</span>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }

                // Troubleshooting Table (Step 16)
                if (s.troubleTable && s.troubleTable.rows && s.troubleTable.rows.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-trouble-table-container">
                      <table class="fab-trouble-table">
                        <thead>
                          <tr>
                            ${s.troubleTable.columns.map(col => `<th>${col}</th>`).join('')}
                          </tr>
                        </thead>
                        <tbody>
                          ${s.troubleTable.rows.map(row => `
                            <tr>
                              <td class="trouble-problem-col"><strong>${row[0]}</strong></td>
                              <td class="trouble-cause-col">${row[1]}</td>
                              <td class="trouble-solution-col">${row[2]}</td>
                              <td class="trouble-outcome-col">${row[3]}</td>
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                    </div>
                  `;
                }

                // Structured Reflection Subsections (Step 17)
                if (s.reflectionSections && s.reflectionSections.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-structured-reflection-grid">
                      ${s.reflectionSections.map(rs => `
                        <div class="fab-reflection-section-card">
                          <div class="fab-reflection-section-header">
                            <span class="fab-reflection-tag">${rs.title}</span>
                          </div>
                          ${rs.content ? `<p class="fab-reflection-text">${rs.content}</p>` : ''}
                          ${rs.items && rs.items.length > 0 ? `
                            <ul class="fab-reflection-bullet-list">
                              ${rs.items.map(it => `<li><span class="ref-check">✓</span><span>${it}</span></li>`).join('')}
                            </ul>
                          ` : ''}
                        </div>
                      `).join('')}
                    </div>
                  `;
                }

                // Source Files Download Grid (Step 18)
                if (s.sourceFiles && s.sourceFiles.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-source-files-grid">
                      ${s.sourceFiles.map(sf => `
                        <div class="fab-source-file-card">
                          <div class="fab-source-file-header">
                            <div class="fab-file-icon-box">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                <polyline points="13 2 13 9 20 9"></polyline>
                              </svg>
                            </div>
                            <div class="fab-file-meta">
                              <span class="fab-file-ext">${sf.format}</span>
                              <h4 class="fab-file-title">${sf.name}</h4>
                            </div>
                          </div>
                          <p class="fab-file-desc">${sf.description}</p>
                          <div class="fab-file-footer">
                            <span class="fab-file-status-badge ${sf.url ? 'is-available' : 'is-pending'}">
                              <span class="status-dot"></span>
                              <span>${sf.status || (sf.url ? 'Available for Download' : 'Source file to be uploaded')}</span>
                            </span>
                            ${sf.url ? `
                              <a href="${sf.url}" download="${sf.filename || ''}" class="btn btn-secondary btn-magnetic fab-download-btn">
                                <span>Download ${sf.format}</span>
                                <span class="btn-arrow">↓</span>
                              </a>
                            ` : `
                              <button class="btn btn-secondary fab-download-btn is-disabled" disabled aria-disabled="true">
                                <span>Download ${sf.format}</span>
                                <span class="btn-arrow">⏳</span>
                              </button>
                            `}
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  `;
                }

                // Additional Links (Step 18)
                if (s.additionalLinks && s.additionalLinks.length > 0) {
                  extraBodyHtml += `
                    <div class="fab-additional-links-box">
                      <span class="fab-add-links-label">VERIFIED ASSETS & PROJECT DOCUMENTATION</span>
                      <div class="fab-add-links-grid">
                        ${s.additionalLinks.map(al => `
                          <a href="${al.url}" target="_blank" rel="noopener noreferrer" class="fab-add-link-item">
                            <span class="fab-add-link-icon">${al.isExternal ? '↗' : '📄'}</span>
                            <span class="fab-add-link-text">${al.label}</span>
                          </a>
                        `).join('')}
                      </div>
                    </div>
                  `;
                }

                let linkHtml = '';
                if (s.driveLink || s.link) {
                  const targetLink = s.driveLink || s.link;
                  const label = s.driveLinkLabel || s.linkLabel || 'View Outcome on Google Drive';
                  linkHtml = `
                    <div class="step-action-container" style="margin-top: var(--space-5);">
                      <a href="${targetLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-magnetic fab-drive-link-btn" aria-label="${label}">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>${label}</span>
                        <span class="btn-arrow">↗</span>
                      </a>
                    </div>
                  `;
                }

                panelContentHtml += `
                  <div class="fabrication-step-card ${s.isFinal ? 'is-final-output' : ''}" id="step-${tab.id}-${s.stepNumber}">
                    <div class="step-card-header">
                      <span class="step-number-badge">${s.stepLabel || ('STEP ' + s.stepNumber)}</span>
                      <h3 class="step-card-title">${s.title}</h3>
                      ${s.subheading ? `<div class="step-card-subheading">${s.subheading}</div>` : ''}
                    </div>
                    ${mediaHtml}
                    <div class="step-card-body">
                      ${s.description ? `<p class="step-card-desc">${s.description}</p>` : ''}
                      ${extraBodyHtml}
                      ${linkHtml}
                    </div>
                  </div>
                `;
              });
            }
          } else if (tab.steps && tab.steps.length > 0) {
            // Fallback for flat step tabs
            tab.steps.forEach((s) => {
              let mediaHtml = '';
              if (s.model3d) {
                mediaHtml = `
                  <div class="step-media-container">
                    ${render3DModelCard(s.model3d, 'margin: 0;')}
                  </div>
                `;
              } else if (s.images && s.images.length > 1) {
                mediaHtml = `
                  <div class="step-media-container">
                    <div class="photo-split-grid">
                      ${s.images.map(img => renderMediaItem(img, 'margin: 0;')).join('')}
                    </div>
                  </div>
                `;
              } else if (s.images && s.images.length === 1) {
                mediaHtml = `
                  <div class="step-media-container">
                    ${renderMediaItem(s.images[0], 'margin: 0;')}
                  </div>
                `;
              } else if (s.media) {
                if (Array.isArray(s.media) && s.media.length > 1) {
                  mediaHtml = `
                    <div class="step-media-container">
                      <div class="photo-split-grid">
                        ${s.media.map(img => renderMediaItem(img, 'margin: 0;')).join('')}
                      </div>
                    </div>
                  `;
                } else {
                  const singleMedia = Array.isArray(s.media) ? s.media[0] : s.media;
                  mediaHtml = `
                    <div class="step-media-container">
                      ${renderMediaItem(singleMedia, 'margin: 0;')}
                    </div>
                  `;
                }
              }

              let linkHtml = '';
              if (s.driveLink || s.link) {
                const targetLink = s.driveLink || s.link;
                const label = s.driveLinkLabel || s.linkLabel || 'View Outcome on Google Drive';
                linkHtml = `
                  <div class="step-action-container" style="margin-top: var(--space-5);">
                    <a href="${targetLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-magnetic fab-drive-link-btn" aria-label="${label}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>${label}</span>
                      <span class="btn-arrow">↗</span>
                    </a>
                  </div>
                `;
              }

              panelContentHtml += `
                <div class="fabrication-step-card ${s.isFinal ? 'is-final-output' : ''}" id="step-${tab.id}-${s.stepNumber}">
                  <div class="step-card-header">
                    <span class="step-number-badge">${s.stepLabel || ('STEP ' + s.stepNumber)}</span>
                    <h3 class="step-card-title">${s.title}</h3>
                  </div>
                  ${mediaHtml}
                  <div class="step-card-body">
                    <p class="step-card-desc">${s.description}</p>
                    ${linkHtml}
                  </div>
                </div>
              `;
            });
          }

          // 4. Learning & Reflection Card
          if (tab.learningReflection) {
            const lr = tab.learningReflection;
            let takeawaysHtml = '';
            if (lr.takeaways && lr.takeaways.length > 0) {
              takeawaysHtml = `
                <div class="fab-learning-takeaways">
                  <span class="fab-learning-takeaways-label">CORE LEARNING TAKEAWAYS</span>
                  <div class="fab-learning-takeaways-list">
                    ${lr.takeaways.map(t => `
                      <div class="fab-learning-takeaway-item">
                        <span class="fab-takeaway-check">✓</span>
                        <span class="fab-takeaway-text">${t}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }

            panelContentHtml += `
              <div class="fab-learning-card" id="fab-reflection-${tab.id}">
                <div class="fab-learning-header">
                  <span class="fab-learning-badge">${lr.badge || 'SYNTHESIS & REFLECTION'}</span>
                  <h3 class="fab-learning-title">${lr.heading}</h3>
                </div>
                <div class="fab-learning-body">
                  <p class="fab-learning-text">${lr.narrative}</p>
                  ${takeawaysHtml}
                </div>
              </div>
            `;
          }

          tabPanelsHtml += `
            <div class="fabrication-tab-panel ${tabIdx === 0 ? 'is-active' : ''}" 
                 id="tabpanel-${tab.id}" 
                 data-tab-id="${tab.id}" 
                 role="tabpanel" 
                 aria-labelledby="tab-${tab.id}" 
                 ${tabIdx !== 0 ? 'style="display: none;"' : ''}>
              ${panelContentHtml}
            </div>
          `;
        });

        // Final Takeaways Section
        let takeawaysHtml = '';
        if (weekData.finalTakeaways) {
          const ft = weekData.finalTakeaways;

          let progressionHtml = '';
          if (ft.progression && ft.progression.length > 0) {
            const progLabel = ft.progressionLabel || `${ft.progression.length}-STAGE FABRICATION CONTINUUM`;
            progressionHtml = `
              <div class="progression-chain-wrapper">
                <span class="progression-chain-label">${progLabel}</span>
                <div class="progression-chain">
                  ${ft.progression.map((p, idx) => `
                    <div class="progression-node ${idx === ft.progression.length - 1 ? 'is-final' : ''}">
                      <span class="progression-step">${p.step}</span>
                      <span class="progression-name">${p.label}</span>
                    </div>
                    ${idx < ft.progression.length - 1 ? '<span class="progression-arrow">→</span>' : ''}
                  `).join('')}
                </div>
              </div>
            `;
          }

          let cardsHtml = '';
          if (ft.cards && ft.cards.length > 0) {
            cardsHtml = `
              <div class="takeaways-5-grid">
                ${ft.cards.map(c => `
                  <div class="takeaway-card">
                    <span class="takeaway-card-num">${c.number}</span>
                    <h4 class="takeaway-card-title">${c.title}</h4>
                    <p class="takeaway-card-desc">${c.description}</p>
                  </div>
                `).join('')}
              </div>
            `;
          }

          takeawaysHtml = `
            <div class="week-takeaways-section" id="story-block-takeaways" data-stage-id="takeaways">
              <div class="week-takeaways-header">
                <span class="week-takeaways-eyebrow">WEEK ${weekData.numberFormatted} SYNTHESIS</span>
                <h3 class="week-takeaways-title">${ft.heading}</h3>
              </div>

              ${progressionHtml}
              ${cardsHtml}

              <div class="final-statement-banner">
                <p>"${ft.statement}"</p>
              </div>
            </div>
          `;
        }

        detailContainer.innerHTML = `
          <!-- Top Navigation Header -->
          <div class="destination-nav-bar">
            <button type="button" class="btn-back-to-map" id="btn-back-map" aria-label="Return to 20-Week Journey Map">
              <span>←</span>
              <span>Back to Journey Map</span>
            </button>
            <span class="destination-breadcrumbs">JOURNEY MAP / DESTINATION · WEEK ${weekData.numberFormatted}</span>
            <div class="destination-step-controls">
              <button type="button" class="btn-step-nav" data-target-week="${prevWeekIndex}" aria-label="Navigate to Week ${prevWeekNum}">
                ← Week ${prevWeekNum}
              </button>
              <button type="button" class="btn-step-nav" data-target-week="${nextWeekIndex}" aria-label="Navigate to Week ${nextWeekNum}">
                Week ${nextWeekNum} →
              </button>
            </div>
          </div>

          <!-- Destination Header -->
          <div class="destination-header">
            <div class="destination-status-badge">
              <span class="status-pulse-dot"></span>
              <span>WEEK ${weekData.numberFormatted} · ${weekData.status === 'completed' ? 'COMPLETED DESTINATION' : 'DESTINATION'}</span>
            </div>
            <h2 class="destination-title">${weekData.title}</h2>
            <div class="destination-date">${weekData.date}</div>
            <p class="destination-summary">${weekData.summary}</p>
          </div>

          <!-- Dual Selectable Fabrication Tabs -->
          <div class="fabrication-tabs-container">
            <div class="fabrication-tabs-nav" role="tablist" aria-label="Digital Fabrication Track Selector">
              ${weekData.tabs.map((tab, idx) => `
                <button type="button" 
                        class="fabrication-tab-btn ${idx === 0 ? 'is-active' : ''}" 
                        role="tab" 
                        id="tab-${tab.id}" 
                        aria-controls="tabpanel-${tab.id}" 
                        aria-selected="${idx === 0 ? 'true' : 'false'}" 
                        data-tab-target="${tab.id}">
                  <span>${tab.label.toUpperCase()}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Tab Content Panels -->
          <div class="fabrication-content-container">
            ${tabPanelsHtml}
            ${takeawaysHtml}
          </div>

          <!-- Footer Actions -->
          <div class="destination-footer-actions">
            <button type="button" class="btn-back-to-map" id="btn-back-map-bottom">
              <span>←</span>
              <span>Back to 20-Week Journey Map</span>
            </button>
            <button type="button" class="btn btn-secondary btn-magnetic" id="btn-next-destination" data-target-week="${nextWeekIndex}">
              <span>NEXT DESTINATION (WEEK ${nextWeekNum})</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        `;

        // Wire Tab Switcher
        const tabButtons = detailContainer.querySelectorAll('.fabrication-tab-btn');
        const tabPanels = detailContainer.querySelectorAll('.fabrication-tab-panel');
        tabButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            tabButtons.forEach(b => {
              b.classList.remove('is-active');
              b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('is-active');
            btn.setAttribute('aria-selected', 'true');

            const targetId = btn.getAttribute('data-tab-target');
            tabPanels.forEach(panel => {
              if (panel.getAttribute('data-tab-id') === targetId) {
                panel.style.display = 'flex';
                panel.classList.add('is-active');
              } else {
                panel.style.display = 'none';
                panel.classList.remove('is-active');
              }
            });
          });
        });

      } else if (storyItems && storyItems.length > 0) {
        // Full Story Experience (Supports both Day-by-Day Weeks 0–4 and Consolidated Experience Week 05+)
        let daysHtml = '';
        storyItems.forEach((d, idx) => {
          let dayActivitiesHtml = '';
          if (d.activities && d.activities.length > 0) {
            dayActivitiesHtml = `
              <div class="day-activities-grid">
                ${d.activities.map(act => `
                  <div class="day-activity-item">
                    <span class="day-activity-name">${act.name}</span>
                    <p class="day-activity-desc">${act.description}</p>
                  </div>
                `).join('')}
              </div>
            `;
          }

          let dayImagesHtml = '';
          if (d.images && d.images.length === 1) {
            dayImagesHtml = renderMediaItem(d.images[0]);
          } else if (d.images && d.images.length > 1) {
            dayImagesHtml = `
              <div class="photo-split-grid">
                ${d.images.map(img => renderMediaItem(img, 'margin: 0;')).join('')}
              </div>
            `;
          }

          let dayLeadDescHtml = '';
          if (d.description) {
            dayLeadDescHtml = `
              <div class="day-story-lead-desc" style="font-family: var(--font-body); font-size: 1.0625rem; line-height: var(--line-height-relaxed); color: #383834; margin: var(--space-4) 0 var(--space-5);">
                <p>${d.description}</p>
              </div>
            `;
          }

          let dayReflectionHtml = '';
          if (d.reflection) {
            dayReflectionHtml = `
              <div class="day-reflection-box">
                <span class="day-reflection-label">${isConsolidated ? 'SECTION REFLECTION' : 'DAILY REFLECTION'}</span>
                <p>"${d.reflection}"</p>
              </div>
            `;
          }

          let dayTakeawayHtml = '';
          if (d.keyTakeaway) {
            dayTakeawayHtml = `
              <div class="day-takeaway-pill">
                <span>⚡</span>
                <span>${d.keyTakeaway}</span>
              </div>
            `;
          } else if (d.teamInsight) {
            dayTakeawayHtml = `
              <div class="day-takeaway-pill" style="color: #6A1B9A; background-color: #F3E5F5; border-color: #E1BEE7;">
                <span>💡</span>
                <span>${d.teamInsight}</span>
              </div>
            `;
          }

          const badgeText = d.dayNumber || d.sectionBadge || `SECTION ${String(idx + 1).padStart(2, '0')}`;
          const focusBadgeHtml = d.focus ? `<span class="day-focus-badge">FOCUS: ${d.focus}</span>` : '';

          daysHtml += `
            <div class="day-story-block" id="story-block-${d.id}" data-stage-id="${d.id}">
              <div class="day-story-header">
                <div>
                  <div class="day-story-eyebrow-group">
                    <span class="day-number-badge">${badgeText}</span>
                    ${focusBadgeHtml}
                  </div>
                  <h3 class="day-story-title">${d.title}</h3>
                </div>
              </div>

              ${dayLeadDescHtml}
              ${dayActivitiesHtml}
              ${dayImagesHtml}
              ${dayReflectionHtml}
              ${dayTakeawayHtml}
            </div>
          `;
        });

        // Final Takeaways Section
        let takeawaysHtml = '';
        if (weekData.finalTakeaways) {
          const ft = weekData.finalTakeaways;

          let progressionHtml = '';
          if (ft.progression && ft.progression.length > 0) {
            const progLabel = ft.progressionLabel || `${storyItems.length}-STAGE ${isConsolidated ? 'LEARNING PROCESS' : 'COHORT EVOLUTION'}`;
            progressionHtml = `
              <div class="progression-chain-wrapper">
                <span class="progression-chain-label">${progLabel}</span>
                <div class="progression-chain">
                  ${ft.progression.map((p, idx) => `
                    <div class="progression-node ${idx === ft.progression.length - 1 ? 'is-final' : ''}">
                      <span class="progression-step">${p.step}</span>
                      <span class="progression-name">${p.label}</span>
                    </div>
                    ${idx < ft.progression.length - 1 ? '<span class="progression-arrow">→</span>' : ''}
                  `).join('')}
                </div>
              </div>
            `;
          }

          let presentationImgHtml = '';
          if (ft.presentationImage) {
            presentationImgHtml = `
              <div class="editorial-photo-card" style="margin: var(--space-6) 0;">
                <img src="${ft.presentationImage.src}" alt="${ft.presentationImage.alt}" loading="lazy" />
                <div class="editorial-photo-caption">${ft.presentationImage.caption}</div>
              </div>
            `;
          }

          let cardsHtml = '';
          if (ft.cards && ft.cards.length > 0) {
            cardsHtml = `
              <div class="takeaways-5-grid">
                ${ft.cards.map(c => `
                  <div class="takeaway-card">
                    <span class="takeaway-card-num">${c.number}</span>
                    <h4 class="takeaway-card-title">${c.title}</h4>
                    <p class="takeaway-card-desc">${c.description}</p>
                  </div>
                `).join('')}
              </div>
            `;
          }

          takeawaysHtml = `
            <div class="week-takeaways-section" id="story-block-takeaways" data-stage-id="takeaways">
              <div class="week-takeaways-header">
                <span class="week-takeaways-eyebrow">WEEK ${weekData.numberFormatted} SYNTHESIS</span>
                <h3 class="week-takeaways-title">${ft.heading}</h3>
              </div>

              ${progressionHtml}
              ${presentationImgHtml}
              ${cardsHtml}

              <div class="final-statement-banner">
                <p>"${ft.statement}"</p>
              </div>
            </div>
          `;
        }

        const filterAllLabel = isConsolidated ? 'ALL SECTIONS' : 'ALL DAYS';
        const filterNavItems = storyItems.map(s => {
          const navLabel = s.navLabel || s.dayNumber || s.sectionBadge || s.title;
          return `<button type="button" class="story-stage-btn" data-stage="${s.id}">${navLabel.toUpperCase()}</button>`;
        }).join('');
        const filterSummaryLabel = isConsolidated ? 'SUMMARY' : 'TAKEAWAYS';

        detailContainer.innerHTML = `
          <!-- Top Navigation Header -->
          <div class="destination-nav-bar">
            <button type="button" class="btn-back-to-map" id="btn-back-map" aria-label="Return to 20-Week Journey Map">
              <span>←</span>
              <span>Back to Journey Map</span>
            </button>
            <span class="destination-breadcrumbs">JOURNEY MAP / DESTINATION · WEEK ${weekData.numberFormatted}</span>
            <div class="destination-step-controls">
              <button type="button" class="btn-step-nav" data-target-week="${prevWeekIndex}" aria-label="Navigate to Week ${prevWeekNum}">
                ← Week ${prevWeekNum}
              </button>
              <button type="button" class="btn-step-nav" data-target-week="${nextWeekIndex}" aria-label="Navigate to Week ${nextWeekNum}">
                Week ${nextWeekNum} →
              </button>
            </div>
          </div>

          <!-- Destination Header -->
          <div class="destination-header">
            <div class="destination-status-badge">
              <span class="status-pulse-dot"></span>
              <span>WEEK ${weekData.numberFormatted} · ${weekData.status === 'completed' ? 'COMPLETED DESTINATION' : 'DESTINATION'}</span>
            </div>
            <h2 class="destination-title">${weekData.title}</h2>
            <div class="destination-date">${weekData.date}</div>
            <p class="destination-summary">${weekData.summary}</p>
          </div>

          <!-- Interactive Stage Timeline Filter Bar -->
          <div class="week-story-timeline-nav" role="tablist" aria-label="Week ${weekData.numberFormatted} Stage Filter">
            <button type="button" class="story-stage-btn is-active" data-stage="all">${filterAllLabel}</button>
            ${filterNavItems}
            ${weekData.finalTakeaways ? `<button type="button" class="story-stage-btn" data-stage="takeaways">${filterSummaryLabel}</button>` : ''}
          </div>

          <!-- Chronological Story Blocks -->
          <div class="week-story-content-container">
            ${daysHtml}
            ${takeawaysHtml}
          </div>

          <!-- Footer Actions -->
          <div class="destination-footer-actions">
            <button type="button" class="btn-back-to-map" id="btn-back-map-bottom">
              <span>←</span>
              <span>Back to 20-Week Journey Map</span>
            </button>
            <button type="button" class="btn btn-secondary btn-magnetic" id="btn-next-destination" data-target-week="${nextWeekIndex}">
              <span>NEXT DESTINATION (WEEK ${nextWeekNum})</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        `;

        // Wire Stage Timeline Filter buttons
        const stageButtons = detailContainer.querySelectorAll('.story-stage-btn');
        stageButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            stageButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            const stageId = btn.getAttribute('data-stage');
            const allBlocks = detailContainer.querySelectorAll('.day-story-block, .week-takeaways-section');

            if (stageId === 'all') {
              allBlocks.forEach(b => b.style.display = 'block');
            } else {
              allBlocks.forEach(b => {
                if (b.getAttribute('data-stage-id') === stageId) {
                  b.style.display = 'block';
                  b.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  b.style.display = 'none';
                }
              });
            }
          });
        });

      } else if (weekData.status === 'completed') {
        // Generic completed layout if future completed weeks are added
        let activitiesHtml = '';
        if (weekData.activities && weekData.activities.length > 0) {
          activitiesHtml = `
            <div>
              <span class="destination-block-title">WHAT HAPPENED &amp; KEY ACTIVITIES</span>
              <ul class="destination-activities-list">
                ${weekData.activities.map(act => `<li>${act}</li>`).join('')}
              </ul>
            </div>
          `;
        }

        let techHtml = '';
        if (weekData.technologies && weekData.technologies.length > 0) {
          techHtml = `
            <div style="margin-top: var(--space-6);">
              <span class="destination-block-title">FOCUS CAPABILITIES &amp; METHODS</span>
              <div class="destination-tech-list">
                ${weekData.technologies.map(t => `<span class="destination-tech-badge">${t}</span>`).join('')}
              </div>
            </div>
          `;
        }

        let insightsHtml = '';
        if (weekData.learning || weekData.outcome) {
          insightsHtml = `
            <div class="destination-insights-group">
              ${weekData.learning ? `
                <div class="insight-editorial-card">
                  <span class="destination-block-title" style="margin-bottom: var(--space-1);">WHAT I LEARNED</span>
                  <p>${weekData.learning}</p>
                </div>
              ` : ''}
              ${weekData.outcome ? `
                <div class="insight-editorial-card">
                  <span class="destination-block-title" style="margin-bottom: var(--space-1);">KEY OUTCOME</span>
                  <p>${weekData.outcome}</p>
                </div>
              ` : ''}
            </div>
          `;
        }

        detailContainer.innerHTML = `
          <div class="destination-nav-bar">
            <button type="button" class="btn-back-to-map" id="btn-back-map">
              <span>←</span>
              <span>Back to Journey Map</span>
            </button>
            <span class="destination-breadcrumbs">JOURNEY MAP / DESTINATION · WEEK ${weekData.numberFormatted}</span>
            <div class="destination-step-controls">
              <button type="button" class="btn-step-nav" data-target-week="${prevWeekIndex}">← Week ${prevWeekNum}</button>
              <button type="button" class="btn-step-nav" data-target-week="${nextWeekIndex}">Week ${nextWeekNum} →</button>
            </div>
          </div>

          <div class="destination-header">
            <div class="destination-status-badge">
              <span class="status-pulse-dot"></span>
              <span>WEEK ${weekData.numberFormatted} · COMPLETED DESTINATION</span>
            </div>
            <h2 class="destination-title">${weekData.title}</h2>
            <div class="destination-date">${weekData.date}</div>
            <p class="destination-summary">${weekData.summary}</p>
          </div>

          <div class="destination-divider"></div>

          <div class="destination-blocks-grid">
            <div>${activitiesHtml}${techHtml}</div>
            <div>${insightsHtml}</div>
          </div>

          <div class="destination-footer-actions">
            <button type="button" class="btn-back-to-map" id="btn-back-map-bottom">
              <span>←</span>
              <span>Back to 20-Week Journey Map</span>
            </button>
            <button type="button" class="btn btn-secondary btn-magnetic" id="btn-next-destination" data-target-week="${nextWeekIndex}">
              <span>NEXT DESTINATION (WEEK ${nextWeekNum})</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        `;
      } else {
        // Upcoming Week State (Clean, dignified, non-fabricated)
        detailContainer.innerHTML = `
          <!-- Top Navigation Header -->
          <div class="destination-nav-bar">
            <button type="button" class="btn-back-to-map" id="btn-back-map" aria-label="Return to 20-Week Journey Map">
              <span>←</span>
              <span>Back to Journey Map</span>
            </button>
            <span class="destination-breadcrumbs">JOURNEY MAP / DESTINATION · WEEK ${weekData.numberFormatted}</span>
            <div class="destination-step-controls">
              <button type="button" class="btn-step-nav" data-target-week="${prevWeekIndex}" aria-label="Navigate to Week ${prevWeekNum}">
                ← Week ${prevWeekNum}
              </button>
              <button type="button" class="btn-step-nav" data-target-week="${nextWeekIndex}" aria-label="Navigate to Week ${nextWeekNum}">
                Week ${nextWeekNum} →
              </button>
            </div>
          </div>

          <!-- Upcoming Destination Body -->
          <div class="upcoming-destination-view">
            <div class="upcoming-destination-icon">DESTINATION ${weekData.numberFormatted} · UPCOMING PHASE</div>
            <h2 class="upcoming-destination-title">Week ${weekData.numberFormatted}</h2>
            <p class="upcoming-destination-message">
              This week will be updated as the ProtoSem journey progresses. Prototype activities, technical validations, and milestone logs will be documented here.
            </p>
            <div style="margin-top: var(--space-6);">
              <button type="button" class="btn btn-secondary btn-magnetic" id="btn-back-map-upcoming">
                <span>← BACK TO JOURNEY MAP</span>
              </button>
            </div>
          </div>
        `;
      }

      // Wire back buttons
      const backBtns = detailContainer.querySelectorAll('#btn-back-map, #btn-back-map-bottom, #btn-back-map-upcoming');
      backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const mapSection = document.getElementById('journey-map');
          if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Wire step navigation buttons
      const stepBtns = detailContainer.querySelectorAll('.btn-step-nav, #btn-next-destination');
      stepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetIndex = parseInt(btn.getAttribute('data-target-week'), 10);
          const targetData = protoSemWeeks.find(w => w.week === targetIndex) || protoSemWeeks[0];
          renderWeekDetail(targetData, true);
        });
      });

      detailContainer.style.opacity = '1';
      detailContainer.style.transform = 'translateY(0)';
      initMagneticButtons();

      if (shouldScroll) {
        const detailSection = document.getElementById('week-detail-section');
        if (detailSection) {
          detailSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 140);
  };

  // 6. Attach Click & Keyboard Listeners to Desktop SVG Nodes
  const desktopNodes = document.querySelectorAll('.map-station-node');
  desktopNodes.forEach(node => {
    const handleNodeSelect = () => {
      const weekIndex = parseInt(node.getAttribute('data-week'), 10);
      const weekData = protoSemWeeks.find(w => w.week === weekIndex) || protoSemWeeks[0];
      renderWeekDetail(weekData, true);
    };

    node.addEventListener('click', handleNodeSelect);
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNodeSelect();
      }
    });
  });

  // 7. Attach Click Listeners to Mobile Station Buttons
  const mobileButtons = document.querySelectorAll('.mobile-station-btn');
  mobileButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const weekIndex = parseInt(btn.getAttribute('data-week'), 10);
      const weekData = protoSemWeeks.find(w => w.week === weekIndex) || protoSemWeeks[0];
      renderWeekDetail(weekData, true);
    });
  });

  // 8. Handle Deep-Linking via URL Hash (#week-00 to #week-20)
  const handleHashRouting = () => {
    const hash = window.location.hash;
    const match = hash.match(/#week-(\d+)/i);
    if (match) {
      const weekNum = parseInt(match[1], 10);
      const weekData = protoSemWeeks.find(w => w.week === weekNum);
      if (weekData) {
        renderWeekDetail(weekData, false);
        return;
      }
    }
    renderWeekDetail(protoSemWeeks[0], false);
  };

  window.addEventListener('hashchange', handleHashRouting);
  handleHashRouting();

  // 9. Subtly Reveal Journey Path on Viewport Scroll
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const flowPath = document.getElementById('svg-flow-path');
    if (flowPath && 'IntersectionObserver' in window) {
      const pathLength = flowPath.getTotalLength ? flowPath.getTotalLength() : 3800;
      flowPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      flowPath.style.strokeDashoffset = `${pathLength}`;

      const mapObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            flowPath.style.strokeDashoffset = '0';
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      const mapCard = document.querySelector('.journey-map-card');
      if (mapCard) mapObserver.observe(mapCard);
    }
  }
}

/**
 * 10. Stage G — Contact & Connectivity Initializer
 */
function initContact() {
  const emailContainer = document.getElementById('contact-email-container');
  const linksContainer = document.getElementById('contact-links-container');

  if (emailContainer && typeof contactData !== 'undefined') {
    if (contactData.email) {
      const displayText = contactData.emailDisplay || contactData.email;
      emailContainer.innerHTML = `
        <a href="mailto:${contactData.email}" class="contact-email-link btn-magnetic" aria-label="Send email to ${displayText} (${contactData.email})">
          <span class="email-text">${displayText}</span>
          <span class="contact-arrow" aria-hidden="true">↗</span>
        </a>
      `;
    } else {
      emailContainer.innerHTML = `
        <a href="mailto:" class="contact-email-link is-placeholder" aria-label="Direct Email Contact (Ready for email address)">
          <span class="email-text">Get in Touch</span>
          <span class="contact-arrow" aria-hidden="true">↗</span>
        </a>
      `;
    }
  }

  if (linksContainer && typeof contactData !== 'undefined') {
    let html = '';
    if (contactData.resume && contactData.resume.url) {
      html += `
        <a href="${contactData.resume.url}" target="_blank" rel="noopener noreferrer" class="contact-pill-link" aria-label="View Resume PDF">
          <span>${contactData.resume.label || 'View Resume'}</span>
          <span class="link-arrow">↗</span>
        </a>
      `;
    }
    if (Array.isArray(contactData.socials)) {
      contactData.socials.filter(s => s.isAvailable && s.url).forEach(item => {
        html += `
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="contact-pill-link" aria-label="${item.name} Profile">
            <span>${item.name}</span>
            <span class="link-arrow">↗</span>
          </a>
        `;
      });
    }
    if (html) {
      linksContainer.innerHTML = html;
    }
  }
}

/**
 * 11. Smooth Back to Top Scroll
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  });
}

/**
 * 12. Active Navigation ScrollSpy Observer
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link:not([target="_blank"])');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * 13. Interactive Technical Identity (Skills Filtering & Real-World Context Ribbon)
 */
function initSkillsInteraction() {
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-group-card');
  const skillChips = document.querySelectorAll('.skill-chip');
  const contextText = document.getElementById('skills-context-text');

  if (!skillCards.length) return;

  const defaultContext = "Hover or focus any technology chip above to see its real-world implementation across my projects & fellowships.";

  // 1. Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-dimmed');
        } else {
          card.classList.add('is-dimmed');
        }
      });
    });
  });

  // 2. Real-World Context Banner Hover Feedback
  if (contextText) {
    skillChips.forEach(chip => {
      const context = chip.getAttribute('data-context');
      if (!context) return;

      const handleEnter = () => {
        contextText.textContent = context;
        contextText.classList.add('is-highlighted');
      };

      const handleLeave = () => {
        contextText.textContent = defaultContext;
        contextText.classList.remove('is-highlighted');
      };

      chip.addEventListener('mouseenter', handleEnter);
      chip.addEventListener('mouseleave', handleLeave);
      chip.addEventListener('focus', handleEnter);
      chip.addEventListener('blur', handleLeave);
    });
  }
}

/**
 * 14. Smooth Seamless Page Transitions (Between Main & ProtoSem)
 */
function initPageTransitions() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const pageLinks = document.querySelectorAll('a[href="protosem.html"], a[href="index.html"], a[href="./"], a[href="/"]');
  pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || link.target === '_blank') return;
      const targetUrl = link.getAttribute('href');
      if (!targetUrl || targetUrl.startsWith('#')) return;

      e.preventDefault();
      document.body.style.transition = 'opacity 0.22s ease-out';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 200);
    });
  });
}
