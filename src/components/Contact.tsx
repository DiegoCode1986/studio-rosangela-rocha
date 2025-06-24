
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento enviado!",
      description: "Entraremos em contato em breve para confirmar seu horário.",
    });
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AGENDE SUA VISITA
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco e agende seu horário. Estamos prontos para cuidar da sua beleza!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-rose-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p>(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p>Rua das Flores, 123 - Centro<br />São Paulo, SP</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p>Segunda a Sexta: 9h às 19h<br />Sábado: 8h às 17h</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p>contato@ayeshahair.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-rose-500">
                <p className="font-semibold mb-4">Nos siga nas redes sociais:</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulário de Agendamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">Serviço desejado</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="corte">Corte e Escova</option>
                    <option value="quimica">Química/Coloração</option>
                    <option value="mechas">Mechas</option>
                    <option value="penteado">Penteado</option>
                    <option value="maquiagem">Maquiagem</option>
                    <option value="unhas">Unhas</option>
                    <option value="sobrancelhas">Sobrancelhas</option>
                    <option value="noiva">Pacote Noiva</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1"
                    placeholder="Deixe uma mensagem ou observação..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 transition-all duration-300"
                >
                  AGENDAR HORÁRIO
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
