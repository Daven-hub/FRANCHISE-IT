// ScrollToTop.tsx
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { Loader } from "../pages/Layouts";
// import $ from "jquery"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // $(".mobiles").removeClass("absolute");
    // $(".navsbar").removeClass("active");
    // $(".openm").removeClass("unshow");
    // $(".closem").removeClass("show");
    // $(".openm").addClass("show");
    // $(".closem").addClass("unshow");
    setIsLoading(true); // reset loader à chaque changement de page
    const timeout = setTimeout(() => setIsLoading(false), 2100); // ou moins, genre 1000ms
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // ou "auto" si tu veux direct
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return null;
};

export default ScrollToTop;
