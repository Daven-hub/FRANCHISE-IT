import axios from 'axios';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData): Promise<void> => {
  const { name, email, phone, message } = data;

  if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
    
    throw new Error("Tous les champs sont obligatoires.");
  }

  try {
    const response = await axios.post('https://franchise-it-tech.com/api/mail_contact.php', data);
    if (response.data.status === 'success') {
      return response.data;
    } else {
      throw new Error("Échec de l'envoi du message.");
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erreur lors de l'envoi du message.");
    } else {
      throw new Error("Une erreur inconnue est survenue.");
    }
  }
};
