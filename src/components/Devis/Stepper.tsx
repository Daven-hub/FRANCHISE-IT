import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
  steps?: number[];
}

const Stepper = ({ currentStep, steps = [1, 2, 3, 4, 5] }: StepperProps) => {
  return (
    <div className="relative w-full mb-8">
      {/* Conteneur des étapes avec espacement égal */}
      <div className="flex justify-between relative z-10">
        {steps.map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            {/* Cercle de l'étape */}
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center
              transition-all duration-300
              ${currentStep >= stepNumber ? "bg-accent text-white" : "bg-background border border-muted"}
            `}>
              {currentStep > stepNumber ? <Check size={18} /> : stepNumber}
            </div>
            {/* Label */}
            <span className={`text-xs mt-2 ${currentStep >= stepNumber ? "text-foreground" : "text-muted-foreground"}`}>
              Étape {stepNumber}
            </span>
          </div>
        ))}
      </div>

      {/* Barre de progression arrière */}
      <div 
        className="absolute top-5 left-0 right-0 h-[2px] bg-muted -z-10"
        style={{
          left: 'calc(5% + 20px)',  // Ajustement précis
          right: 'calc(5% + 20px)',   // Ajustement précis
          transform: 'translateY(-50%)'
        }}
      ></div>

      {/* Barre de progression active (optionnel) */}
      <div 
        className="absolute top-5 h-[2px] bg-accent -z-10 transition-all duration-500"
        style={{
          left: 'calc(5% + 20px)',
          width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          transform: 'translateY(-50%)'
        }}
      ></div>
    </div>
  );
};

export default Stepper;