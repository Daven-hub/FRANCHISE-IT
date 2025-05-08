// components/AnimateOnScroll.jsx
import { useEffect, useRef, useState } from "react";

const AnimateOnScroll = ({ children, animation = "animate__fadeInUp" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`animate__animated ${isVisible ? animation : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
