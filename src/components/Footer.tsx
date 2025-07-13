
import { Heart, Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Rosângela Rocha</h3>
            <p className="text-gray-300 mb-4">
              Salão de beleza especializado em transformar seu visual com carinho e profissionalismo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rosangelarochamakeup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cursos')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Equipe
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cortes e Escovas</li>
              <li>Coloração e Mechas</li>
              <li>Penteados</li>
              <li>Maquiagem</li>
              <li>Unhas</li>
              <li>Sobrancelhas</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span>(61) 98212-8746 </span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                <span>Taguatinga, DF</span>
              </div>
            </div>
             <div className="mt-4">
                    <a 
                      href="https://www.google.com/maps/place/Studio+Ros%C3%A2ngela+Rocha/@-15.8247409,-48.0897011,17z/data=!3m1!4b1!4m6!3m5!1s0x935bcdc9bd9bdf09:0x2b92ba03dc5d0d9f!8m2!3d-15.8247409!4d-48.0897011!16s%2Fg%2F11khbc_rhd?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-400 font-medium text-sm underline"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © 2025 Studio Rosangela Rocha. Feito com 
            <Heart className="mx-1 text-primary" size={25} /> 
            para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
