/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

/**
 * Initializes native IntersectionObserver to trigger smooth, calm entrance
 * reveals as elements enter the viewport (15–20% visibility).
 * Automatically unobserves elements once revealed for optimal performance.
 */
export function initScrollReveal(): () => void {
  // Check browser support and accessibility preference
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback: immediately reveal all elements if IntersectionObserver is unsupported
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('is-revealed');
    });
    return () => {};
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('is-revealed');
    });
    return () => {};
  }

  const observerOptions: IntersectionObserverInit = {
    root: null, // viewport
    rootMargin: '0px 0px -50px 0px', // trigger slightly before bottom edge
    threshold: 0.15, // 15% visibility triggers reveal
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;

        // Apply delay if specified via data-delay attribute
        const delay = target.dataset.delay;
        if (delay) {
          target.style.transitionDelay = `${delay}ms`;
        }

        // Add active reveal class
        target.classList.add('is-revealed');

        // Unobserve immediately after trigger to free up resources
        obs.unobserve(target);
      }
    });
  }, observerOptions);

  // Observe all elements with .reveal-on-scroll
  const elements = document.querySelectorAll('.reveal-on-scroll');
  elements.forEach((el) => observer.observe(el));

  // Also handle dynamic DOM additions via MutationObserver if components lazy load
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          if (node.classList.contains('reveal-on-scroll') && !node.classList.contains('is-revealed')) {
            observer.observe(node);
          }
          node.querySelectorAll?.('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
            observer.observe(el);
          });
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}

/**
 * React hook to attach scroll-driven entrance animations
 */
export function useScrollReveal() {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);
}
