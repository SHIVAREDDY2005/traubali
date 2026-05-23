import { useEffect } from "react";
import Lenis from "lenis";

// Starts a single Lenis animation loop and cleans it up when the app unmounts.
function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });

    let frameId = 0;

    // Advances Lenis on every browser frame to keep scrolling smooth.
    const raf = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}

export default useLenis;
