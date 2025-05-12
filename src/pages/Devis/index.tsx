import { useState } from "react"; 
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import ProjectTypeStep from "@/components/Devis/ProjectTypeStep";
import ProjectDetailsStep from "@/components/Devis/ProjectDetailsStep";
import TimelineBudgetStep from "@/components/Devis/TimelineBudgetStep";
import ContactStep from "@/components/Devis/ContactStep";
import SummaryStep from "@/components/Devis/SummaryStep";
import Stepper from "@/components/Devis/Stepper";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export type FormData = {
  projectType: string;
  subType: string;
  serviceType: string;
  platform: string;
  purpose: string;
  description: string;
  camerasCount: string;
  location: string;
  cloudRecording: boolean;
  hasDomain: string;
  hasBranding: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  company: string;
};

const Devis = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    subType: "",
    serviceType: "",
    platform: "",
    purpose: "",
    description: "",
    camerasCount: "",
    location: "",
    cloudRecording: false,
    hasDomain: "",
    hasBranding: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Devis soumis:', formData);

    toast({
      title: "Demande de devis envoyée",
      description: "Nous vous contacterons avec une proposition sous 48h.",
    });

    setStep(1);
    setFormData({
      projectType: "",
      subType: "",
      serviceType: "",
      platform: "",
      purpose: "",
      description: "",
      camerasCount: "",
      location: "",
      cloudRecording: false,
      hasDomain: "",
      hasBranding: "",
      timeline: "",
      budget: "",
      name: "",
      email: "",
      phone: "",
      company: ""
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProjectTypeStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} handleChange={handleChange} />;
      case 3:
        return <TimelineBudgetStep formData={formData} handleChange={handleChange} />;
      case  4:
        return <ContactStep formData={formData} handleChange={handleChange} />;
      case 5:
        return <SummaryStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section id="devis" className="section-padding relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
          <img 
            src="/devis.jpg" 
            alt="Technology background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
              >
                <h2 className="heading-lg font-title">Demande de devis</h2>
                <p className="text-muted-foreground mt-2">
                  Remplissez ce formulaire pour recevoir une estimation personnalisée
                </p>
              </motion.div>

              <Stepper currentStep={step} />

              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {renderStep()}

                  <div className="flex justify-between pt-6">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-accent/50 hover:bg-accent/10 transition-all"
                      >
                        <ChevronLeft size={18} /> Précédent
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {step < 6 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white ml-auto transition-all"
                        disabled={step === 1 && !formData.projectType}
                      >
                        Suivant <ChevronRight size={18} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white ml-auto transition-all"
                      >
                        Envoyer la demande <Send size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Devis;
