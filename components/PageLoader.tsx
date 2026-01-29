"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading: boolean;
  message?: string;
}

export default function PageLoader({ isLoading, message = "Loading case study..." }: PageLoaderProps) {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    setShowLoader(isLoading);
  }, [isLoading]);

  useEffect(() => {
    const handleHideLoader = () => {
      setShowLoader(false);
    };

    // Listen for custom event to hide loader
    window.addEventListener('hidePageLoader', handleHideLoader);
    
    // Also hide loader when page becomes visible (navigation completed)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          setShowLoader(false);
        }, 200);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('hidePageLoader', handleHideLoader);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          data-page-loader
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] bg-white/95 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated Icon */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-500 to-teal-500 flex items-center justify-center shadow-lg"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-4 border-electric-500"
              />
            </div>

            {/* Loading Text */}
            <div className="text-center space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl font-semibold text-charcoal-900"
              >
                {message}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <Loader2 className="w-5 h-5 text-electric-600 animate-spin" />
                <span className="text-sm text-slate-600">Preparing your case study...</span>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/3 bg-gradient-to-r from-electric-500 to-teal-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

