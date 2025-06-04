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
  if (formData.projectType === "Graphisme") {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Détails graphisme</h3>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">Type de prestation (sélection multiple possible)</label>
            <div className="grid grid-cols-2 gap-3">
              {["Logo", "Flyer", "Carte de visite", "Affiche", "Bannière", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleMultiSelect("serviceType", item)}
                  className={`p-4 rounded-md border transition-all flex items-center justify-between ${
                    formData.serviceType.includes(item)
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                  {formData.serviceType.includes(item) && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2">
              Description du besoin
            </label>
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
            <label className="block mb-2">Type de site (sélection multiple possible)</label>
            <div className="grid grid-cols-2 gap-3">
              {["Vitrine", "E-commerce", "Blog", "Portfolio", "Réseau social", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleMultiSelect("subType", item)}
                  className={`p-4 rounded-md border transition-all flex items-center justify-between ${
                    formData.subType.includes(item)
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                  {formData.subType.includes(item) && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Avez-vous déjà un nom de domaine ?</label>
              <div className="grid grid-cols-2 gap-3">
                {["Oui", "Non"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => updateFormData("hasDomain", item)}
                    className={`p-4 rounded-md border transition-all ${
                      formData.hasDomain === item
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
              <label className="block mb-2">Avez-vous une charte graphique ou un logo ?</label>
              <div className="grid grid-cols-2 gap-3">
                {["Oui", "Non"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => updateFormData("hasBranding", item)}
                    className={`p-4 rounded-md border transition-all ${
                      formData.hasBranding === item
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/20 hover:border-accent/50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2">
              Description du projet
            </label>
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
            <label className="block mb-2">Plateforme cible (sélection multiple possible)</label>
            <div className="grid grid-cols-3 gap-3">
              {["Android", "iOS", "Web", "Desktop", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleMultiSelect("platform", item)}
                  className={`p-4 rounded-md border transition-all flex items-center justify-between ${
                    formData.platform.includes(item)
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                  {formData.platform.includes(item) && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2">Objectif de l'application</label>
            <div className="grid grid-cols-2 gap-3">
              {["Usage public", "Usage interne (entreprise)", "Mixte", "Autre"].map((item) => (
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
            <label htmlFor="description" className="block mb-2">
              Détails du besoin
            </label>
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
            <label className="block mb-2">Localisation (sélection multiple possible)</label>
            <div className="grid grid-cols-2 gap-3">
              {["Intérieur", "Extérieur", "Entrepôt", "Parking", "Bureau", "Autre"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleMultiSelect("location", item)}
                  className={`p-4 rounded-md border transition-all flex items-center justify-between ${
                    formData.location.includes(item)
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-white/20 hover:border-accent/50"
                  }`}
                >
                  {item}
                  {formData.location.includes(item) && <Check size={16} />}
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
            <label htmlFor="description" className="block mb-2">
              Description du lieu/projet
            </label>
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

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Description du besoin</h3>
      <p className="text-muted-foreground">
        Décrivez brièvement le problème ou le besoin que vous souhaitez résoudre.
      </p>
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