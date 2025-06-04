import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollHah() {
  const { hash,pathname } = useLocation();
//   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

export default ScrollHah;