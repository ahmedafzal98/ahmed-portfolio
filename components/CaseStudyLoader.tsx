"use client";

import { useEffect } from "react";

export default function CaseStudyLoader() {
  useEffect(() => {
    // Hide loader when case study page has loaded
    // Use requestAnimationFrame to ensure DOM is ready
    const hideLoader = () => {
      window.dispatchEvent(new CustomEvent('hidePageLoader'));
    };
    
    // Hide immediately if page is already loaded
    if (document.readyState === 'complete') {
      requestAnimationFrame(hideLoader);
    } else {
      // Wait for page to load
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, []);

  return null;
}

