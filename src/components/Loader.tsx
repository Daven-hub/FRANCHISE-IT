
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initialisation");
  
  useEffect(() => {
    const loadingTexts = [
      "Initialisation",
      "Préparation des données",
      "Finalisation"
    ];
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 2;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Change text based on progress
         else if (newProgress > 95) {
          setLoadingText(loadingTexts[2]);
        } else if (newProgress > 30) {
          setLoadingText(loadingTexts[1]);
        }
        
        return newProgress;
      });
    }, 38);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed px-[6%] top-0 left-0 inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative w-full md:w-[20%] mb-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold w-full flex px-8 py-6 justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          {/* Franchise<span className="ml-1">IT</span> */}
          <div className="aspect-[26/4] w-full">
            <img src="/logo.png" className="h-full w-full" alt="" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute -top-0 -right-0 w-10 h-10 border-t-2 border-r-2 border-primary"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-0 -left-0 w-10 h-10 border-b-2 border-l-2 border-primary"
        />
      </div>
      
      <div className="w-full md:w-[20%] mt-1.5 h-2 bg-secondary rounded-full overflow-hidden mb-3">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      
      <div className="flex items-center">
        <div className="text-sm text-muted-foreground mr-2">{loadingText}</div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex space-x-1"
        >
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          <span className="w-1 h-1 rounded-full bg-primary"></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
