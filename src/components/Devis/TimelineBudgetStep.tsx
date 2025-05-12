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

    const optionsBudget = [
        "Moins de 100 000 XAF",
        "150 000 XAF - 200 000 XAF",
        "250 000 XAF - 400 000",
        "À discuter",
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

                {/* Budget estimé */}
                <div className="space-y-2">
                    <label className="block">Budget estimé</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {optionsBudget.map((option) => (
                            <label
                                key={option}
                                className={`p-3 rounded-md border cursor-pointer transition ${formData.budget === option
                                    ? "border-accent bg-accent/10 text-accent"
                                    : "border-white/20 hover:border-accent/50"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="budget"
                                    value={option}
                                    checked={formData.budget === option}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Cela nous aide à proposer la meilleure solution
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimelineBudgetStep;
