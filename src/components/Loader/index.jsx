import { useEffect, useState } from "react";
import logo from "../../assets/franchise_it.png";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#e0f2ff] via-white to-[#f0f8ff] transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <img
          src={logo}
          alt="FRANCHISE IT"
          className="w-64 md:w-72 animate-logoMotion drop-shadow-2xl"
        />

        <div className="absolute inset-0 rounded-full animate-rotateShine bg-gradient-to-tr from-transparent via-blue-200/30 to-transparent blur-2xl" />
      </div>
    </div>
  );
};

export default Loader;
