
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Scissors, Palette, Sparkles, Crown } from 'lucide-react';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "CORTES E ESCOVAS",
      description: "Cortes modernos e escovas que realçam sua beleza natural",
      icon: Scissors,
      image: "/lovable-uploads/galeria/corteescova.jpeg"
    },
    {
      title: "MAQUIAGEM",
      description: "Maquiagem profissional para todos os momentos especiais",
      icon: Palette,
      image: "/lovable-uploads/galeria/maquiagem.jpeg"
    },
   
    {
      title: "PENTEADOS ESPECIAIS",
      description: "Penteados exclusivos para noivas, madrinhas e debutantes",
      icon: Crown,
      image:  "/lovable-uploads/galeria/penteado.jpeg"
    },
     {
      title: "QUÍMICAS E MECHAS",
      description: "Coloração e mechas com técnicas avançadas e produtos de qualidade",
      icon: Sparkles,
      image: "/lovable-uploads/galeria/mechas.jpeg"
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza com profissionais 
            especializados e produtos de alta qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-74 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-gray-50 rounded-lg p-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Unhas</h4>
              <p className="text-gray-600">Manicure e pedicure com esmaltação em Gel e Nail Design profissional</p>
              
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sobrancelhas</h4>
              <p className="text-gray-600">Design e modelagem para realçar seu olhar</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Tratamentos</h4>
              <p className="text-gray-600">Hidratação e reconstrução capilar e ozônio terapia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
