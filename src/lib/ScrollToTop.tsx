// ScrollToTop.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (isLoading) {
    return ;
  }

  return null;
};

export default ScrollToTop;
