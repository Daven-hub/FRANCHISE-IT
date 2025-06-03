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
import devis from '../../../public/dev.png';
import { sendDevisForm } from "@/services/DevisService";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendDevisForm(formData);

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
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi du devis.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProjectTypeStep formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} handleChange={handleChange} />;
      case 3:
        return <TimelineBudgetStep formData={formData} handleChange={handleChange} />;
      case 4:
        return <ContactStep formData={formData} handleChange={handleChange} />;
      case 5:
        return <SummaryStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <section id="devis" className="section-padding relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop"
          alt="Technology background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-4 sm:p-6 lg:p-8">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6 sm:mb-10"
            >
              <div className="inline-block px-6 py-2 bg-white/5 text-primary rounded-full text-sm font-medium border border-white/10">
                Devis
              </div>
              <h2 className="heading-lg font-title">Demande de devis</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Remplissez ce formulaire pour recevoir une estimation personnalisée
              </p>
            </motion.div>

            <Stepper currentStep={step} />

            <form onSubmit={handleSubmit}>
              <div className="space-y-6 sm:space-y-8">
                {renderStep()}

                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/20 hover:border-accent/50 hover:bg-accent/10 transition-all w-full sm:w-auto"
                      disabled={isSubmitting} // Désactive pendant la soumission
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
                      className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-accent hover:bg-accent/90 text-white transition-all w-full sm:w-auto sm:ml-auto"
                      disabled={(step === 1 && !formData.projectType) || isSubmitting} // Désactive pendant la soumission
                    >
                      Suivant <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-accent hover:bg-accent/90 text-white transition-all w-full sm:w-auto sm:ml-auto"
                      disabled={isSubmitting} // Désactive pendant la soumission
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer la demande <Send size={18} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Devis;