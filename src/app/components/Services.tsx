"use client";

export const Services = () => {
  return (
    <div id="services" className="relative w-full flex items-center justify-center bg-white py-20 px-4">
      <div className="flex flex-col items-center justify-center max-w-6xl w-full">
        <div className="flex items-start justify-center w-full pb-20">
          <p className="text-center text-3xl text-black font-semibold">
            Nossos serviços
          </p>
        </div>
        <div className="w-full items-center justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="relative overflow-hidden rounded-lg shadow-lg shadow-white/20">
              <picture>
                <img src="/img1.png" alt="Card 1" className="w-full object-cover" />
              </picture>
              <div className="flex items-end justify-end h-full w-full absolute md:top-72 top-56">
                <div className="absolute inset-0 flex flex-col justify-start items-start text-white px-5 h-40">
                  <h2 className="text-2xl font-bold">Visualização de dados</h2>
                  <p className="text-lg pt-2">Organizo os dados que você precisa para tomar decisões cruciais.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg shadow-white/20">
              <picture>
                <img src="/img2.png" alt="Card 2" className="w-full object-cover" />
              </picture>
              <div className="flex items-end justify-end h-full w-full absolute md:top-72 top-56">
                <div className="absolute inset-0 flex flex-col justify-start items-start text-white px-5 h-40">
                  <h2 className="text-2xl font-bold">Consultorias</h2>
                  <p className="text-lg pt-2">Deixe-me apontar o seu negócio na direção certa, usando uma mistura de previsão e insight.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg shadow-white/20">
              <picture>
                <img src="/img3.png" alt="Card 3" className="w-full object-cover" />
              </picture>
              <div className="flex items-end justify-end h-full w-full absolute md:top-72 top-56">
                <div className="absolute inset-0 flex flex-col justify-start items-start text-white px-5 h-40">
                  <h2 className="text-2xl font-bold">Palestras</h2>
                  <p className="text-lg pt-2">Use meus anos de experiência para ser palestrante em seu próximo seminário ou conferência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
    </div>
  );
};



