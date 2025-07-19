
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Instagram, Facebook } from 'lucide-react';

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();

  const team = [
    {
      name: "Rosângela Rocha",
      role: "Cabeleireira e Empresária",
      image: "/lovable-uploads/galeria/rosangela.jpeg",
      description: "37 anos de carreira,proprietária do Salão Rosangêla Rocha; especialista no atendimento a Noivas debutantes; desde 2005 tornou-se uma profissional renomada com um currículo bem completo em sua área"
    
    },
    {
      name: "Yulle",
      role: "Manicure",
      image: "/lovable-uploads/galeria/manicure.jpeg",
      description: "Manicure com experiência de mais de 20 anos, e com especialidade em SPA dos pés"
    },
    
   
  ];

  return (
    <section id="equipe" className="py-20 bg-primary">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOSSA EQUIPE
          </h2>
          <div className="w-24 h-1 bg-primary-foreground mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Profissionais especializados e apaixonados por beleza, 
            prontos para transformar seu visual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  
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
