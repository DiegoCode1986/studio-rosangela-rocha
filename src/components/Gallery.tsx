
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/galeria/1.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/noiva2.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/noiva3.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/penteado1.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/noiva5.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/penteado2.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/noiva6.jpeg",
      alt: "",
      category: ""
    },
    {
      src: "/lovable-uploads/galeria/penteado4.jpeg",
      alt: "",
      category: ""
    },
      {
      src: "/lovable-uploads/galeria/penteado5.jpeg",
      alt: "",
      category: ""
    },
      {
      src: "/lovable-uploads/galeria/penteado6.jpeg",
      alt: "",
      category: ""
    },
      {
      src: "/lovable-uploads/galeria/penteado7.jpeg",
      alt: "",
      category: ""
    },
      {
      src: "/lovable-uploads/galeria/penteado8.jpeg",
      alt: "",
      category: ""
    },
      {
      src: "/lovable-uploads/galeria/penteado9.jpeg",
      alt: "",
      category: ""
    },
      {
      src: "/lovable-uploads/galeria/penteado10.jpeg",
      alt: "",
      category: ""
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
      <section id="galeria" className="py-20 bg-gray-900">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GALERIA DE TRABALHOS
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos e se inspire para sua próxima transformação
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-pink-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-pink-600 border-pink-600 hover:bg-pink-700 text-white" />
              <CarouselNext className="right-4 bg-pink-600 border-pink-600 hover:bg-pink-700 text-white" />
            </Carousel>
          </div>

          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {galleryImages.slice(0, 4).map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                />
                <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
