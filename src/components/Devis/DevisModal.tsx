import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

type DevisModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function DevisModal({ isOpen, onClose, children }: DevisModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Contenu de la modale */}
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                bounce: 0.2
              }}
              className="relative w-full max-w-2xl h-full bg-background shadow-xl overflow-y-auto"
            >
              {/* Bouton fermer */}
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-muted-foreground hover:text-white" />
              </motion.button>
              
              {/* Contenu */}
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}