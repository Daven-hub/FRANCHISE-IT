import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
}

const Stepper = ({ currentStep }: StepperProps) => {
  return (
    <div className="flex justify-between items-center mb-8 relative">
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -z-10"></div>
      
      {[1, 2, 3, 4, 5].map((stepNumber) => (
        <div key={stepNumber} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentStep >= stepNumber ? "bg-accent text-white" : "bg-white/5 border border-white/10"}`}>
            {currentStep > stepNumber ? <Check size={18} /> : stepNumber}
          </div>
          <span className={`text-xs mt-2 ${currentStep >= stepNumber ? "text-white" : "text-muted-foreground"}`}>
            Étape {stepNumber}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;