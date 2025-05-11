import { FormData } from "@/pages/Devis";
import { CheckCircle } from "lucide-react";

interface SummaryStepProps {
  formData: FormData;
}

const SummaryStep = ({ formData }: SummaryStepProps) => {
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
        
        {formData.projectType === "Graphisme" && (
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h4 className="font-medium mb-2">Détails graphisme</h4>
            <p>Prestation: {formData.serviceType}</p>
            <p className="mt-2 text-muted-foreground">{formData.description}</p>
          </div>
        )}
        
        {formData.projectType === "Site Web" && (
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h4 className="font-medium mb-2">Détails site web</h4>
            <p>Type: {formData.subType}</p>
            <p>Nom de domaine: {formData.hasDomain || "Non spécifié"}</p>
            <p>Charte graphique: {formData.hasBranding || "Non spécifié"}</p>
            <p className="mt-2 text-muted-foreground">{formData.description}</p>
          </div>
        )}
        
        {formData.projectType === "Application Mobile" && (
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h4 className="font-medium mb-2">Détails application</h4>
            <p>Plateforme: {formData.platform}</p>
            <p>Objectif: {formData.purpose}</p>
            <p className="mt-2 text-muted-foreground">{formData.description}</p>
          </div>
        )}
        
        {formData.projectType === "Caméra de Surveillance" && (
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h4 className="font-medium mb-2">Détails surveillance</h4>
            <p>Nombre de caméras: {formData.camerasCount || "Non spécifié"}</p>
            <p>Localisation: {formData.location}</p>
            <p>Enregistrement cloud: {formData.cloudRecording ? "Oui" : "Non"}</p>
            <p className="mt-2 text-muted-foreground">{formData.description}</p>
          </div>
        )}
        
        {["Maintenance", "Conseils", "Autre"].includes(formData.projectType) && (
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h4 className="font-medium mb-2">Description du besoin</h4>
            <p className="text-muted-foreground">{formData.description}</p>
          </div>
        )}
        
        {/* <div className="p-4 rounded-lg border border-white/10 bg-white/5">
          <h4 className="font-medium mb-2">Délai et Budget</h4>
          <p>Délai: {formData.timeline || "Non spécifié"}</p>
          <p>Budget: {formData.budget || "Non spécifié"}</p>
        </div> */}
        
        <div className="p-4 rounded-lg border border-white/10 bg-white/5">
          <h4 className="font-medium mb-2">Coordonnées</h4>
          <p>{formData.name}</p>
          {formData.company && <p>{formData.company}</p>}
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;