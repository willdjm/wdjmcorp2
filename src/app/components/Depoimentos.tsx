"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Autoplay, Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function Depoimentos() {
  // Inicialize com um valor padrão (por exemplo, 1024)
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    // Função para atualizar a largura da janela
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Adiciona o listener de resize
    window.addEventListener("resize", handleResize);

    // Atualiza a largura inicial da janela
    handleResize();

    // Remove o listener de resize ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Array de objetos com os dados das imagens
  const images = [
    { src: "./comentario1.jpg", alt: "Criacao 1" },
    { src: "./comentario2.jpg", alt: "Criacao 2" },
    { src: "./comentario3.jpg", alt: "Criacao 3" },
    { src: "./comentario4.jpg", alt: "Criacao 4" },
    { src: "./comentario5.jpg", alt: "Criacao 5" },
    { src: "./comentario6.jpg", alt: "Criacao 6" },
    { src: "./comentario7.jpg", alt: "Criacao 7" },
    { src: "./comentario8.jpg", alt: "Criacao 8" },
  ];

  // Ajusta o número de imagens visíveis com base na largura da janela
  const slidesPerView = windowWidth < 768 ? 1 : 3;

  return (
    <section
      id="CustomerReviews"
      className="flex justify-center items-center md:py-32 py-10 px-4 bg-black text-white relative"
    >
      
      <div className="flex flex-col items-center justify-center md:max-w-6xl w-full">
      <h3 className="text-white text-2xl md:text-4xl">
          Depoimentos
        </h3>

        {/* Renderização do Swiper */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30} // Ajustado para mais espaço entre os slides            
            slidesPerView={slidesPerView} // Ajusta o número de slides visíveis com base na largura da tela
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 5000, // Define o intervalo de autoplay para 2 segundos
              disableOnInteraction: false, // Permite que o autoplay continue após interação do usuário
            }}
            grabCursor            
            loop
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <picture>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[35rem]"
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Botões de navegação personalizados */}
          <button
            type="button"
            className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 md:-left-16 z-10 bg-transparent border-none cursor-pointer text-Pink-500"
          >
            <BsChevronLeft size={40} />
          </button>
          <button
            type="button"
            className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 md:-right-16 z-10 bg-transparent border-none cursor-pointer text-Pink-500 font-normal"
          >
            <BsChevronRight size={40} />
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
    </section>
    
  );
}
