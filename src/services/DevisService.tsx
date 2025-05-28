import axios from "axios";

export type DevisFormData = {
    projectType: string;
    subType: string;
    serviceType: string;
    platform: string;
    purpose: string;
    description: string;
    camerasCount: string;
    location: string;
    cloudRecording: boolean;
    hasDomain: string;
    hasBranding: string;
    timeline: string;
    budget: string;
    name: string;
    email: string;
    phone: string;
    company: string;
};

export const sendDevisForm = async (data: DevisFormData): Promise<void> => {
    try {
        await axios.post('/api/devis', data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Erreur lors de l'envoi du message.");
        } else {
            throw new Error("Une erreur inconnue est survenue.");
        }
    }
};