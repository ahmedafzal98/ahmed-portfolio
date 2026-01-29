"use client";

import { useState, useEffect } from "react";
import PageLoader from "./PageLoader";

export default function GlobalPageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading case study...");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Only set up event listeners on client side
    if (typeof window === 'undefined') return;

    // Listen for show loader event
    const handleShowLoader = (event: CustomEvent) => {
      setIsLoading(true);
      setLoadingMessage(event.detail?.message || "Loading case study...");
    };

    // Listen for hide loader event
    const handleHideLoader = () => {
      setIsLoading(false);
    };

    window.addEventListener('showPageLoader', handleShowLoader as EventListener);
    window.addEventListener('hidePageLoader', handleHideLoader);

    return () => {
      window.removeEventListener('showPageLoader', handleShowLoader as EventListener);
      window.removeEventListener('hidePageLoader', handleHideLoader);
    };
  }, []);

  // Don't render until mounted (client-side only)
  if (!isMounted) {
    return null;
  }

  return <PageLoader isLoading={isLoading} message={loadingMessage} />;
}

