import axios from "axios";

export type DevisFormData = {
  projectType: string;
  serviceDetails: string[];
  description: string;
  budget: string;
  currency: string;
  timeline: string;
  customTimeline?: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
  metadata: {
    devis_date: string;
  };
};

export const sendDevisForm = async (data: DevisFormData): Promise<void> => {
  try {
    const transformedData = {
      ...data,
      serviceDetails: data.serviceDetails.join(', '),
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
