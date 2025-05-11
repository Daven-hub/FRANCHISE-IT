import { FormData } from "@/pages/Devis";

interface TimelineBudgetStepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const TimelineBudgetStep = ({ formData, handleChange }: TimelineBudgetStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Délai et Budget</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="timeline" className="block">Délai souhaité</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white/20 bg-transparent"
          >
            <option value="">Sélectionner</option>
            <option value="Urgent (1-2 semaines)">Urgent (1-2 semaines)</option>
            <option value="Court terme (1 mois)">Court terme (1 mois)</option>
            <option value="Moyen terme (2-3 mois)">Moyen terme (2-3 mois)</option>
            <option value="Long terme (+3 mois)">Long terme (+3 mois)</option>
            <option value="Non déterminé">Non déterminé</option>
          </select>
          <p className="text-sm text-muted-foreground">Nous adapterons notre planning en fonction</p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="budget" className="block">Budget estimé</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white/20 bg-transparent"
          >
            <option value="">Sélectionner</option>
            <option value="Moins de 500€">Moins de 500€</option>
            <option value="500€ - 2000€">500€ - 2000€</option>
            <option value="2000€ - 5000€">2000€ - 5000€</option>
            <option value="5000€ - 10000€">5000€ - 10000€</option>
            <option value="Plus de 10000€">Plus de 10000€</option>
            <option value="À discuter">À discuter</option>
          </select>
          <p className="text-sm text-muted-foreground">Cela nous aide à proposer la meilleure solution</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineBudgetStep;