import { FormData } from "@/pages/Devis";
import { useState, useEffect, useMemo } from 'react';

interface TimelineBudgetStepProps {
    formData: FormData;
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
}

const SUPPORTED_CURRENCIES = [
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
];

const TimelineBudgetStep = ({ formData, handleChange }: TimelineBudgetStepProps) => {
    const [rawBudget, setRawBudget] = useState(formData.budget || '');

    useEffect(() => {
        setRawBudget(formData.budget || '');
    }, [formData.budget]);

    const timelineOptions = useMemo(() => [
        { key: 'short_term', label: '(1 mois)', value: "1 month" },
        { key: 'long_term', label: '(+3 mois)', value: "+3 months" },
        { key: 'custom', label: 'Autre (spécifier)', value: "custom" },
    ], []);

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

    const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // autorise uniquement les chiffres
        setRawBudget(value);

        handleChange({
            ...e,
            target: {
                ...e.target,
                name: 'budget',
                value
            }
        });
    };

    const currencySymbol = useMemo(() => {
        const curr = SUPPORTED_CURRENCIES.find(c => c.code === formData.currency);
        return curr?.symbol || formData.currency;
    }, [formData.currency]);

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold">Délais et budget</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Délai */}
                <div className="space-y-2">
                    <label className="block">Quel est votre délai souhaité ?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {timelineOptions.map((option) => (
                            <label
                                key={option.key}
                                className={`p-3 rounded-md border cursor-pointer transition ${
                                    formData.timeline === option.value
                                        ? "border-accent bg-accent/10 text-accent"
                                        : "border-white/20 hover:border-accent/50"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="timeline"
                                    value={option.value}
                                    checked={formData.timeline === option.value}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>

                    {formData.timeline === "custom" && (
                        <input
                            type="text"
                            name="customTimeline"
                            placeholder="Ex: 6 semaines ou date spécifique"
                            value={formData.customTimeline || ''}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-white/20 focus:border-accent focus:outline-none bg-transparent"
                        />
                    )}

                    <p className="text-sm text-muted-foreground">
                        Sélectionnez le délai qui vous convient le mieux ou entrez un délai personnalisé.
                    </p>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="block" htmlFor="budget">
                            Budget estimé
                        </label>
                        <div className="relative w-32">
                            <select
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md border border-white/20 focus:border-accent focus:outline-none bg-white text-black dark:bg-gray-800 dark:text-white appearance-none pr-7"
                            >
                                {SUPPORTED_CURRENCIES.map((curr) => (
                                    <option key={curr.code} value={curr.code}>
                                        {curr.code} - {curr.symbol}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-2 top-2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="budget"
                            id="budget"
                            placeholder="Ex: 500 000"
                            value={rawBudget}
                            onChange={handleBudgetChange}
                            className="w-full p-3 rounded-md border border-white/20 focus:border-accent focus:outline-none bg-transparent pl-3 pr-10"
                        />
                        <span className="absolute right-3 top-3 text-muted-foreground">
                            {currencySymbol}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Indiquez une estimation de votre budget pour ce projet.
                    </p>
                    {rawBudget && (
                        <p className="text-xs text-muted-foreground italic">
                            ≈ {formatCurrency(rawBudget)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineBudgetStep;
