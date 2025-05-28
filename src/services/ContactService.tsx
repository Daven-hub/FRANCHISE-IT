import axios from 'axios';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    await axios.post('/api/contact', data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erreur lors de l'envoi du message.");
    } else {
      throw new Error("Une erreur inconnue est survenue.");
    }
  }
};
