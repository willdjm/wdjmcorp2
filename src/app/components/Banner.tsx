"use client";

import { MdOutlineFingerprint } from "react-icons/md";
import { Navbar } from "./Navbar";



export const Banner = () => {
    return (
            <div className="relative w-full">
                {/* Vídeo de fundo */}
                <video
                    className="w-full md:h-full h-screen object-center object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videobanner.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                </video>

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full z-50">
                    <Navbar />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-40 bg-black/70 py-14 md:py-14">
                    <div className="flex flex-col w-full max-w-5xl items-center pt-14 md:pt-0 justify-center md:text-9xl text-5xl text-center px-4 md:px-0">
<h1>
    Soluções em Tecnologia
</h1>
<MdOutlineFingerprint className="pt-4 text-7xl" />

                    </div>
                </div>
            </div>
    );
};
