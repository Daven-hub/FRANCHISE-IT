import axios from "axios";

export type DevisFormData = {
  projectType: string;
  subType: string[];
  serviceType: string[];
  platform: string[];
  purpose: string;
  description: string;
  camerasCount: string;
  location: string[];
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
    const transformedData = {
      ...data,
      subType: data.subType.join(', '),
      serviceType: data.serviceType.join(', '),
      platform: data.platform.join(', '),
      location: data.location.join(', ')
    };

    const response = await axios.post(
      'https://franchise-it-tech.com/api/mail_devis.php',
      transformedData
    );

    if (response.data.status === 'success') {
      return response.data
    }
    
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erreur lors de l'envoi du message.");
    } else {
      throw new Error("Une erreur inconnue est survenue.");
    }
  }
};
