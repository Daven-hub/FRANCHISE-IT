import { FormData } from "@/pages/Devis";

interface TimelineBudgetStepProps {
    formData: FormData;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
}

const TimelineBudgetStep = ({ formData, handleChange }: TimelineBudgetStepProps) => {
    const optionsTimeline = [
        "Urgent (1-2 semaines)",
        "Court terme (1 mois)",
        "Moyen terme (2-3 mois)",
        "Long terme (+3 mois)",
        "Non déterminé",
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold">Délai et Budget</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Délai souhaité */}
                <div className="space-y-2">
                    <label className="block">Délai souhaité</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {optionsTimeline.map((option) => (
                            <label
                                key={option}
                                className={`p-3 rounded-md border cursor-pointer transition ${formData.timeline === option
                                    ? "border-accent bg-accent/10 text-accent"
                                    : "border-white/20 hover:border-accent/50"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="timeline"
                                    value={option}
                                    checked={formData.timeline === option}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Nous adapterons notre planning en fonction
                    </p>
                </div>

                {/* Budget manuel */}
                <div className="space-y-2">
                    <label className="block" htmlFor="budget">Budget estimé (en XAF)</label>
                    <input
                        type="text"
                        name="budget"
                        id="budget"
                        placeholder="Ex: 250000"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-white/20 focus:border-accent focus:outline-none bg-transparent"
                    />
                    <p className="text-sm text-muted-foreground">
                        Entrez le budget que vous souhaitez consacrer à ce projet
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimelineBudgetStep;
