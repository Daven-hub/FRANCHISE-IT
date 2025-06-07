import { FormData } from "@/pages/Devis";
import { CheckCircle } from "lucide-react";

interface SummaryStepProps {
  formData: FormData;
}

const SummaryStep = ({ formData }: SummaryStepProps) => {
  const formatCurrency = (value: string) => {
    if (!value) return '';
    const numberValue = Number(value);
    if (isNaN(numberValue)) return value;

    if (formData.currency === 'XAF') {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: formData.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(numberValue);
    }

    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: formData.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numberValue);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-accent mb-4" />
        <h3 className="text-xl font-bold">Récapitulatif</h3>
        <p className="text-muted-foreground">Vérifiez les informations avant envoi</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
          <h4 className="font-medium mb-2">Type de projet</h4>
          <p>{formData.projectType}</p>
        </div>

        {formData.serviceDetails.length > 0 && (
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h4 className="font-medium mb-2">Détails du projet</h4>
            <p>Services: {formData.serviceDetails.join(", ") || "Non spécifié"}</p>
            <p className="mt-2 text-muted-foreground">{formData.description}</p>
          </div>
        )}

        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
          <h4 className="font-medium mb-2">Délai et Budget</h4>
          <p>Délai: {formData.timeline === "custom" ? formData.customTimeline : formData.timeline}</p>
          <p>Budget: {formData.budget ? formatCurrency(formData.budget) : "Non spécifié"}</p>
        </div>

        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
          <h4 className="font-medium mb-2">Coordonnées</h4>
          <p>Nom: {formData.contact.name}</p>
          {formData.contact.company && <p>Entreprise: {formData.contact.company}</p>}
          <p>Email: {formData.contact.email}</p>
          <p>Téléphone: {formData.contact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;