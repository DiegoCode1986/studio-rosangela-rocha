
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      image: "/lovable-uploads/ae3c6606-e558-46b2-af2f-836aa233c0b7.png",
      alt: "Avaliação do Google - Maria Silva"
    },
    {
      image: "/lovable-uploads/ae3c6606-e558-46b2-af2f-836aa233c0b7.png", 
      alt: "Avaliação do Google - Fernanda Costa"
    },
    {
      image: "/lovable-uploads/ae3c6606-e558-46b2-af2f-836aa233c0b7.png",
      alt: "Avaliação do Google - Juliana Santos"
    }
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O QUE NOSSAS CLIENTES DIZEM
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de clientes que confiaram em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
