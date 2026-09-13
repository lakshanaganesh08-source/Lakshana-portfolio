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

      if (weekData.days && weekData.days.length > 0) {
        // Full Chronological Day-by-Day Story Experience (Week 0, Week 1, etc.)
        let daysHtml = '';
        weekData.days.forEach(d => {
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

          const renderMediaItem = (item, extraCardStyle = '') => {
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
                <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                <div class="editorial-photo-caption">${item.caption}</div>
              </div>
            `;
          };

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

          let dayReflectionHtml = '';
          if (d.reflection) {
            dayReflectionHtml = `
              <div class="day-reflection-box">
                <span class="day-reflection-label">DAILY REFLECTION</span>
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

          daysHtml += `
            <div class="day-story-block" id="story-block-${d.id}" data-stage-id="${d.id}">
              <div class="day-story-header">
                <div>
                  <div class="day-story-eyebrow-group">
                    <span class="day-number-badge">${d.dayNumber}</span>
                    <span class="day-focus-badge">FOCUS: ${d.focus}</span>
                  </div>
                  <h3 class="day-story-title">${d.title}</h3>
                </div>
              </div>

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
            progressionHtml = `
              <div class="progression-chain-wrapper">
                <span class="progression-chain-label">${weekData.days.length}-STAGE COHORT EVOLUTION</span>
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
          <div class="week-story-timeline-nav" role="tablist" aria-label="Week ${weekData.numberFormatted} Day Filter">
            <button type="button" class="story-stage-btn is-active" data-stage="all">ALL DAYS</button>
            ${weekData.days.map(d => `
              <button type="button" class="story-stage-btn" data-stage="${d.id}">${d.dayNumber.toUpperCase()}</button>
            `).join('')}
            ${weekData.finalTakeaways ? '<button type="button" class="story-stage-btn" data-stage="takeaways">TAKEAWAYS</button>' : ''}
          </div>

          <!-- Day-by-Day Chronological Story Blocks -->
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
