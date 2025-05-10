
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, User, AtSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send the data to a server here
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-accent" />,
      title: "Téléphone",
      value: "+237 695 432 799 / +1 (450) 933-3335"
    },
    {
      icon: <Mail size={24} className="text-accent" />,
      title: "Email",
      value: "contact@franchise-it.com"
    },
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: "Adresse",
      value: "Santa babara,Bonamoussadi - Cameroun"
    }
  ];

  return (
    <section id="contact" className="section-padding px-[7%] relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop" 
          alt="Technology background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -left-[20%] top-[30%] w-[500px] h-[500px] rounded-full bg-accent/30 blur-[120px]"></div>
        <div className="absolute -right-[10%] bottom-[20%] w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px]"></div>
      </div>
      
      <div className="w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-4 w-full mb-10"
        >
          <div className="inline-block px-6 py-2 bg-white/5 text-primary rounded-full text-sm font-medium border border-white/10">
          Contact
          </div>
          <h2 className="heading-lg font-title text-white">Nous Contactez</h2>
          <p className="text-[1rem] w-3/2 text-white/70">
          Prêt à transformer votre entreprise avec nos solutions IT ? Contactez-nous dès aujourd'hui.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-effect border-white/10 p-8 card-hover rounded-xl overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Send size={22} className="mr-3 text-accent" /> 
                Envoyez-nous un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center">
                    <User size={16} className="mr-2 text-accent/80" /> Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="glass-effect border-white/20 bg-white/5 focus:border-accent/50 focus:accent-glow"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center">
                      <AtSign size={16} className="mr-2 text-accent/80" /> Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="glass-effect border-white/20 bg-white/5 focus:border-accent/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 flex items-center">
                      <Phone size={16} className="mr-2 text-accent/80" /> Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro"
                      className="glass-effect border-white/20 bg-white/5 focus:border-accent/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center">
                    <Mail size={16} className="mr-2 text-accent/80" /> Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="glass-effect border-white/20 bg-white/5 min-h-[150px] focus:border-accent/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 transition-all border border-white/20 hover:bg-accent/20 hover:accent-glow"
                >
                  Envoyer le message
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </Card>
          
          <div className="space-y-4">
            <Card className="glass-effect border-white/10 p-8 card-hover rounded-xl relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-5">Informations de contact</h3>
                <div className="space-y-1.5">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center group hover-scale">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 glass-effect group-hover:accent-glow transition-all">
                        {info.icon}
                      </div>
                      <div>
                        {/* <h4 className="font-medium text-lg">{info.title}</h4> */}
                        <p className="text-muted-foreground group-hover:text-white transition-colors">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="glass-effect border-white/10 p-8 h-[250px] card-hover relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 opacity-70">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8318530645074!2d9.782703874615393!3d4.054689846919875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d200f44d801%3A0x25997d06703d165c!2sFRANCHISE%20IT!5e0!3m2!1sfr!2scm!4v1746799556273!5m2!1sfr!2scm" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
              {/* <div className="absolute inset-0 glass-effect pointer-events-none"></div>
              <div className="relative z-10 text-center p-4 bg-black/50 backdrop-blur-sm rounded-lg w-fit mx-auto mt-4">
                <p className="text-lg font-medium text-white">Notre localisation</p>
                <p className="text-muted-foreground">Bonamoussadi, Cameroun</p>
              </div> */}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
