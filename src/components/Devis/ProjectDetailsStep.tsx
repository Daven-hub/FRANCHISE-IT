import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/pages/Devis";

interface ProjectDetailsStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ProjectDetailsStep = ({ formData, updateFormData, handleChange }: ProjectDetailsStepProps) => {
  if (formData.projectType === "Graphisme") {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Détails graphisme</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Type de prestation</label>
            <div className="grid grid-cols-2 gap-3">
              {["Logo", "Flyer", "Carte de visite", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateFormData("serviceType", item)}
                  className={`p-4 rounded-md border transition-all ${
                    formData.serviceType === item 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2">Description du besoin</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez brièvement ce que vous souhaitez concevoir..."
              className="min-h-[120px]"
            />
          </div>
        </div>
      </div>
    );
  }

  if (formData.projectType === "Site Web") {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Détails site web</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Type de site</label>
            <div className="grid grid-cols-2 gap-3">
              {["Vitrine", "E-commerce", "Blog / Média", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateFormData("subType", item)}
                  className={`p-4 rounded-md border transition-all ${
                    formData.subType === item 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hasDomain" className="block mb-2">Avez-vous déjà un nom de domaine ?</label>
              <select
                id="hasDomain"
                name="hasDomain"
                value={formData.hasDomain}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-white/20 bg-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="hasBranding" className="block mb-2">Avez-vous une charte graphique ou un logo ?</label>
              <select
                id="hasBranding"
                name="hasBranding"
                value={formData.hasBranding}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-white/20 bg-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2">Description du projet</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez le contenu ou les fonctionnalités souhaitées..."
              className="min-h-[120px]"
            />
          </div>
        </div>
      </div>
    );
  }

  if (formData.projectType === "Application Mobile") {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Détails application mobile</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Plateforme cible</label>
            <div className="grid grid-cols-3 gap-3">
              {["Android", "iOS", "Les deux"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateFormData("platform", item)}
                  className={`p-4 rounded-md border transition-all ${
                    formData.platform === item 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block mb-2">Objectif de l'application</label>
            <div className="grid grid-cols-2 gap-3">
              {["Usage public", "Usage interne (entreprise)"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateFormData("purpose", item)}
                  className={`p-4 rounded-md border transition-all ${
                    formData.purpose === item 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2">Détails du besoin</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez brièvement ce que vous attendez de l'application..."
              className="min-h-[120px]"
            />
          </div>
        </div>
      </div>
    );
  }

  if (formData.projectType === "Caméra de Surveillance") {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Détails surveillance</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="camerasCount" className="block mb-2">Nombre de caméras estimé</label>
            <Input
              type="number"
              id="camerasCount"
              name="camerasCount"
              value={formData.camerasCount}
              onChange={handleChange}
              placeholder="Ex: 4"
            />
          </div>
          
          <div>
            <label className="block mb-2">Localisation</label>
            <div className="grid grid-cols-2 gap-3">
              {["Intérieur", "Extérieur", "Les deux"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateFormData("location", item)}
                  className={`p-4 rounded-md border transition-all ${
                    formData.location === item 
                      ? "border-accent bg-accent/10 text-accent" 
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="cloudRecording"
              name="cloudRecording"
              checked={formData.cloudRecording as boolean}
              onChange={handleChange}
              className="h-4 w-4 accent-accent"
            />
            <label htmlFor="cloudRecording">Souhaitez-vous un enregistrement cloud ?</label>
          </div>
          
          <div>
            <label htmlFor="description" className="block mb-2">Description du lieu/projet</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez l'emplacement et vos besoins spécifiques..."
              className="min-h-[120px]"
            />
          </div>
        </div>
      </div>
    );
  }

  // Maintenance, Conseils, Autre
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Description du besoin</h3>
      <p className="text-muted-foreground">Décrivez brièvement le problème ou le besoin que vous souhaitez résoudre.</p>
      
      <Textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Expliquez en détail votre demande..."
        className="min-h-[200px]"
      />
    </div>
  );
};

export default ProjectDetailsStep;