import { FormData } from "@/pages/Devis";

interface ProjectTypeStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  nextStep: () => void;
}

const ProjectTypeStep = ({ formData, updateFormData, nextStep }: ProjectTypeStepProps) => {
  const projectTypes = [
    "Site Web", 
    "Application Mobile", 
    "Graphisme", 
    "Caméra de Surveillance", 
    "Maintenance", 
    "Conseils", 
    "Autre"
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Type de projet</h3>
      <p className="text-muted-foreground">De quel type de projet avez-vous besoin ?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              updateFormData("projectType", type);
              nextStep();
            }}
            className={`p-6 rounded-lg border transition-all flex items-center justify-center min-h-[100px] ${
              formData.projectType === type 
                ? "border-accent bg-accent/10 text-accent" 
                : "border-white/20 hover:border-accent/50 hover:bg-accent/5"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeStep;