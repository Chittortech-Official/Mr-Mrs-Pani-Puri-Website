'use client';

import React, { useEffect } from 'react';

export default function ScrollParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Smooth Scroll Reveal Observer
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((el) => observer.observe(el));

    // RequestAnimationFrame Parallax Driver
    let ticking = false;
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          parallaxElements.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.15;
            const parent = el.parentElement;
            if (!parent) return;

            const rect = parent.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const offset = rect.top * speed;
              el.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}

