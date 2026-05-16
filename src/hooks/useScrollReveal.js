import { useEffect, useRef } from "react";

/**
 * @param {number} threshold - 0–1, how much of the element must be visible (default 0.15)
 * @param {string} rootMargin - offset before triggering (default "0px 0px -60px 0px")
 */

export default function useScrollReveal(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}