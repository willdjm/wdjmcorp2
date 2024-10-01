"use client";

export const About = () => {
  return (

    <div id="about" className="relative w-full">
      <picture className="relative">
        {/* Imagem de desktop */}
        <img
          src="/about.png"
          className="md:w-full md:h-full h-screen object-cover"
          alt=""
        />

      </picture>


      <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-white z-40">
        <div className="flex flex-col w-full items-start md:justify-start text-2xl text-center px-5 md:px-32 md:py-20">

          <div className="md:py-20 pt-10">
            <picture className="relative ">

              <img
                src="/logo2.png"
                className="md:w-32 w-28 opacity-80"
                alt=""
              />

            </picture>

          </div>
          <div className="flex flex-col md:w-1/2 md:pt-16 pt-10 gap-10 ">
            <p className="text-justify md:text-2xl uppercase text-gray-500 font-medium">
              Sobre nós
            </p>
            <p className="md:text-justify text-left md:text-4xl">
              A WDJM Corp fornece serviços de marketing e publicidade digitais de grande escala. Ajudamos nossos clientes a ter sucesso através de estratégias inovadoras e eficazes.
            </p>

          </div>

        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

    </div>


  );
};
