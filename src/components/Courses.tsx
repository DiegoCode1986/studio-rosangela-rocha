
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Users, Clock, Award } from 'lucide-react';

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation();

  const courses = [
    {
      title: "Curso de Maquiagem Profissional",
      description: "Aprenda técnicas avançadas de maquiagem para diferentes ocasiões",
      duration: "2 Dias de curso",
      students: "carga horária: 16hrs",
      image: "/lovable-uploads/cursomaquiagem.jpeg",
      highlights: ["Maquiagem social", "Maquiagem para noivas", "Técnicas de contorno","Pele", "E muito Mais..."]
    },
    {
      title: "Curso de Penteado Profissional",
      description: "Domine a arte de pentear com excelência e torne-se um (a) grande penteadista. ",
      duration: "2 Dias de curso",
      students: "carga horária: 16hrs",
      image: "/lovable-uploads/cursopenteado2.jpeg",
      highlights: ["Preparação","Introdução de Técnicas Russa em alguns penteados","semi preso","Onda de Glamur","Penteados Clássicos", "Espojados", "Diferentes Técnicas de ondas e Cachos", "Tranças" ,"Coques","Dicas de Produtos e ferramentas", "e muitos mais..."]
    },
   
  ];

  return (
    <section id="cursos" className="py-20 bg-gradient-to-br from-secondary to-rose-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NOSSOS CURSOS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Capacite-se com nossos cursos profissionalizantes e transforme sua paixão por beleza em uma carreira de sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 object-contain">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-58">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Novo
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1 text-primary" />
                      <span>Máx. {course.students}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award size={16} className="mr-2 text-primary" />
                      O que você vai aprender:
                    </h4>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certificação Profissional
            </h3>
            <p className="text-gray-600 mb-6">
              Todos os nossos cursos oferecem certificado de conclusão reconhecido no mercado de trabalho
            </p>
           <a href="https://api.whatsapp.com/send/?phone=556182128746&text=Ol%C3%A1%21+Gostaria+de+agendar+um+hor%C3%A1rio+no+Ayesha+Hair+Salon.&type=phone_number&app_absent=0"> <button  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Entre em Contato para Mais Informações
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
