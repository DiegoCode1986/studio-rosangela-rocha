
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 lg:pt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/lovable-uploads/banner_preto3.jpg")`
        }}
      />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
              Studio<br />
              <span className="text-rose-400">Rosangêla Rocha</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200 max-w-md">
              Transforme seu visual com nossos especialistas. Cortes, escovas, químicas, 
              mechas, unhas, sobrancelhas, maquiagem e penteados.
            </p>
            <Button 
              onClick={() => scrollToSection('servicos')}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg rounded-md transition-all duration-300 transform hover:scale-105"
            >
              NOSSOS SERVIÇOS
            </Button>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <img 
                src="\lovable-uploads\rosagela.jpeg"
                alt="Modelo com cabelo elegante"
                className="rounded-lg shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-rose-600 text-white p-4 md:p-6 rounded-lg shadow-xl">
                <h3 className="text-lg md:text-xl font-bold mb-2">Especialistas</h3>
                <p className="text-sm">Em noivas e debutantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
