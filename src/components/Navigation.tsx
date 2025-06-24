
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Ayesha</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white hover:text-rose-400 transition-colors duration-300"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-white hover:text-rose-400 transition-colors duration-300"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-white hover:text-rose-400 transition-colors duration-300"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="text-white hover:text-rose-400 transition-colors duration-300"
                >
                  Equipe
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-md transition-all duration-300"
                >
                  Contato
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-rose-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-white hover:text-rose-400 px-3 py-2 w-full text-left transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-white hover:text-rose-400 px-3 py-2 w-full text-left transition-colors duration-300"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-white hover:text-rose-400 px-3 py-2 w-full text-left transition-colors duration-300"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="block text-white hover:text-rose-400 px-3 py-2 w-full text-left transition-colors duration-300"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block bg-rose-600 hover:bg-rose-700 text-white px-3 py-2 rounded-md mx-3 mt-2 transition-all duration-300"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="hidden lg:flex fixed top-1/2 right-6 transform -translate-y-1/2 flex-col space-y-4 z-40">
        <div className="bg-black/80 backdrop-blur-md text-white p-3 rounded-lg text-sm">
          <div className="flex items-center space-x-2 mb-2">
            <Phone size={16} className="text-rose-400" />
            <span>(11) 99999-9999</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-rose-400" />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
