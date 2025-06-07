import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/pages/Devis";
import { Check } from "lucide-react";

interface ProjectDetailsStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleMultiSelect: (field: keyof FormData, value: string) => void;
}

const ProjectDetailsStep = ({
  formData,
  updateFormData,
  handleChange,
  handleMultiSelect,
}: ProjectDetailsStepProps) => {
  const getServiceOptions = () => {
    switch (formData.projectType) {
      case "Graphisme":
        return ["Logo", "Flyer", "Carte de visite", "Affiche", "Bannière", "Autre"];
      case "Site Web":
        return ["Vitrine", "E-commerce", "Blog", "Portfolio", "Réseau social", "Autre"];
      case "Application Mobile":
        return ["Android", "iOS", "Web", "Desktop", "Autre"];
      case "Caméra de Surveillance":
        return ["Mur", "Plafond", "Poteau", "Angle", "Discret", "Autre"];
      default:
        return [];
    }
  };

  const getStepTitle = () => {
    switch (formData.projectType) {
      case "Graphisme": return "Détails graphisme";
      case "Site Web": return "Détails site web";
      case "Application Mobile": return "Détails application mobile";
      case "Caméra de Surveillance": return "Détails surveillance";
      default: return "Description du besoin";
    }
  };

  const serviceOptions = getServiceOptions();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">{getStepTitle()}</h3>

      <div className="space-y-4">
        {serviceOptions.length > 0 && (
          <div>
            <label className="block mb-2">
              {formData.projectType === "Caméra de Surveillance" 
                ? "Type de montage" 
                : formData.projectType === "Application Mobile"
                ? "Plateforme cible"
                : formData.projectType === "Site Web"
                ? "Type de site"
                : "Type de prestation"} (sélection multiple possible)
            </label>
            <div className={`grid ${formData.projectType === "Application Mobile" ? "grid-cols-3" : "grid-cols-2"} gap-3`}>
              {serviceOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleMultiSelect("serviceDetails", item)}
                  className={`p-4 rounded-md border transition-all flex items-center justify-between ${
                    formData.serviceDetails.includes(item)
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                  {formData.serviceDetails.includes(item) && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label htmlFor="description" className="block mb-2">
            {formData.projectType === "Caméra de Surveillance"
              ? "Description du lieu/projet"
              : formData.projectType === "Application Mobile"
              ? "Détails du besoin"
              : formData.projectType === "Site Web"
              ? "Description du projet"
              : "Description du besoin"}
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder={
              formData.projectType === "Caméra de Surveillance"
                ? "Décrivez l'emplacement et vos besoins spécifiques..."
                : formData.projectType === "Application Mobile"
                ? "Décrivez brièvement ce que vous attendez de l'application..."
                : formData.projectType === "Site Web"
                ? "Décrivez le contenu ou les fonctionnalités souhaitées..."
                : "Décrivez brièvement ce que vous souhaitez concevoir..."
            }
            className="min-h-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsStep;