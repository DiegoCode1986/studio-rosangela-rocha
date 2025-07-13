
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-20 bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ENTRE EM CONTATO
          </h2>
          <div className="w-24 h-1  bg-primary-foreground mx-auto mb-10"></div>
          <p className="text-white/90 font-bold max-w-53xl mx-auto">
            Entre em contato conosco e agende seu horário. Estamos prontos para cuidar da sua beleza!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-primary-foreground rounded-lg p-8 text-primary">
              <h3 className="text-2xl font-bold mb-6 text-center">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center">
                  <Phone className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className=" font-semibold">Telefone</p>
                    <p className=" font-bold ">(61) 98212-8746 </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className=" font-bold ">Endereço</p>
                    <p className=" font-bold ">St. L Norte QNL 22 via 29 lote 42 loja 01 - Taguatinga, Brasília - DF, 72161-204<br />Taguatinga -DF</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className=" font-bold ">Segunda a Sexta: 9h às 19h<br />Sábado: 8h às 17h</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className=" font-bold ">contato@rosangelarocha.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/20 text-center">
                <p className="font-semibold mb-4">Nos siga nas redes sociais:</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.instagram.com/rosangelarochamakeup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
