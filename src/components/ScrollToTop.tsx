"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-40 inline-flex items-center justify-center rounded-full border border-violet-400/40 bg-violet-950/80 p-3 text-violet-200 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-900 hover:text-violet-100 md:bottom-12 md:right-12"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} />
        </button>
      )}
    </>
  );
}
