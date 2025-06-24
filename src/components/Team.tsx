
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Instagram, Facebook } from 'lucide-react';

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();

  const team = [
    {
      name: "Ana Martins",
      role: "Especialista em Noivas",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      description: "10 anos de experiência em penteados e maquiagem para noivas"
    },
    {
      name: "Beatriz Silva",
      role: "Colorista Especialista",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Especialista em coloração e técnicas de mechas modernas"
    },
    {
      name: "Carla Rodrigues",
      role: "Cabeleireira Senior",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      description: "Cortes modernos e tratamentos capilares avançados"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOSSA EQUIPE
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Profissionais especializados e apaixonados por beleza, 
            prontos para transformar seu visual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-rose-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-rose-600 transition-colors duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rose-600 transition-colors duration-300">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
