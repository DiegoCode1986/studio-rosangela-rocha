
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const SpaceGallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const spaceImages = [
    {
      src: "/lovable-uploads/espaco.jpeg",
      alt: "Interior principal do salão",
      category: "Ambiente Principal"
    },
    {
      src: "/lovable-uploads/cadeiras.jpg",
      alt: "Área de atendimento com poltronas",
      category: "Área de Atendimento"
    },
    {
      src: "/lovable-uploads/fotoo.jpg",
      alt: "Vista geral do salão",
      category: "Vista Geral"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="espaco" className="py-20 bg-white">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              NOSSO ESPAÇO
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nosso ambiente acolhedor e moderno, pensado especialmente para seu conforto e bem-estar
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {spaceImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-primary px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </span>
                  <h4 className="font-semibold text-lg">{image.alt}</h4>
                </div>
                
                <button
                  onClick={() => openLightbox(image.src)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                >
                  <ZoomIn size={18} className="text-white" />
                </button>
              </div>
            ))}
          </div>

          {/* Grid adicional com imagens menores */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {spaceImages.map((image, index) => (
              <div key={`small-${index}`} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                    onClick={() => openLightbox(image.src)}
                  />
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada do espaço"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SpaceGallery;
