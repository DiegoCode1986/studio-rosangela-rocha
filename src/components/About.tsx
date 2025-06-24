
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Users, Heart, Star } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img 
              src="\lovable-uploads\cadeiras.jpg"
              alt="Interior do salão"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              BEM-VINDAS AO<br />
              <span className="text-rose-600">STUDIO ROSANGÊLA ROCHA</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Salão de beleza especializado no atendimento a noivas, madrinhas, debutantes e muitos mais. 
              Aqui você pode contar com excelentes profissionais treinados e capacitados em cortes, 
              escovas, químicas, mechas, unhas, sobrancelhas, maquiagens e penteados.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fazemos o melhor para sua beleza em um local agradável e com total conforto para você cliente, 
              sempre com os melhores preços e produtos. Faça-nos uma visita!
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-rose-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Qualidade</h4>
                <p className="text-sm text-gray-600">Produtos premium</p>
              </div>
              
              <div className="text-center">
                <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-rose-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Experiência</h4>
                <p className="text-sm text-gray-600">Profissionais capacitados</p>
              </div>
              
              <div className="text-center">
                <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-rose-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Cuidado</h4>
                <p className="text-sm text-gray-600">Atendimento personalizado</p>
              </div>
              
              <div className="text-center">
                <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-rose-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Excelência</h4>
                <p className="text-sm text-gray-600">Resultados únicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
