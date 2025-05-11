import { Input } from "@/components/ui/input";
import { FormData } from "@/pages/Devis";
import { User, Mail, Phone, Building } from "lucide-react";

interface ContactStepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ContactStep = ({ formData, handleChange }: ContactStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Vos coordonnées</h3>
      <p className="text-muted-foreground">Nous utiliserons ces informations pour vous contacter avec votre devis.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label htmlFor="name" className="block mb-2">Nom complet</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="relative">
          <label htmlFor="company" className="block mb-2">Entreprise (optionnel)</label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="relative">
          <label htmlFor="email" className="block mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="relative">
          <label htmlFor="phone" className="block mb-2">Téléphone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre numéro"
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStep;