
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Cursos', id: 'cursos' },
    { name: 'Galeria', id: 'galeria' },
    { name: 'Equipe', id: 'equipe' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
               <img
            src="/lovable-uploads/so_logo.jpeg"
            alt="Logo Studio Rosangêla"
            className="h-10 w-30"
          />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('cursos')}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  Cursos
                </button>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  Galeria
                </button>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  Equipe
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition-all duration-300"
                >
                  Contato
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-pink-400 z-[70] relative"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Full Screen Mobile Menu with slide from right animation */}
        <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-700 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 backdrop-blur-lg">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="text-center mb-8">
                <img
                  src="/lovable-uploads/so_logo.jpeg"
                  alt="Logo Studio Rosangêla"
                  className="h-20 w-auto mx-auto mb-4 opacity-80"
                />
              </div>
              
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-white hover:text-pink-200 text-2xl font-light transition-all duration-300 transform hover:scale-105 ${
                      isOpen ? 'animate-fade-in-left' : ''
                    }`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              
              <div className={`mt-12 text-center space-y-4 ${
                isOpen ? 'animate-fade-in-left' : ''
              }`} style={{ animationDelay: '800ms' }}>
                <div className="flex items-center justify-center space-x-2 text-pink-200">
                  <Phone size={18} />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-pink-200">
                  <MapPin size={18} />
                  <span>Taguatinga, DF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact info sidebar for desktop */}
      <div className="hidden lg:flex fixed top-1/2 right-6 transform -translate-y-1/2 flex-col space-y-4 z-40">
        <div className="bg-black/80 backdrop-blur-md text-white p-3 rounded-lg text-sm">
          <div className="flex items-center space-x-2 mb-2">
            <Phone size={16} className="text-pink-400" />
            <span>(11) 99999-9999</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-pink-400" />
            <span>Taguatinga, DF</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
