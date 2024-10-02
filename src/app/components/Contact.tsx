"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';

export const Contact: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Verifica se todos os campos estão preenchidos
    const isFormValid = nome.trim() !== '' && email.trim() !== '' && mensagem.trim() !== '';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verifica se o formulário é válido antes de enviar
        if (!isFormValid) {
            toast.warn('Por favor, preencha todos os campos obrigatórios!');
            console.log('sss');
            return;
        }

        setLoading(true); // Ativa o loading

        const templateParams = {
            from_name: nome,
            from_email: email,
            message: mensagem,
        };

        emailjs.send('service_e2n7rwe', 'template_ce6ttz4', templateParams, 'pOINiBmviTKEAASavaaaa')
            .then((response) => {
                toast.success('Enviado com sucesso!');
                console.log('Mensagem enviada com sucesso!', response.status, response.text);
                // Limpar os campos após o envio
                setNome('');
                setEmail('');
                setMensagem('');
            })
            .catch((error) => {
                toast.error('Houve um erro em sua tentativa, tente novamente mais tarde!');
                console.error('Erro ao enviar a mensagem:', error);
            })
            .finally(() => {
                // Aguarda 5 segundos antes de limpar os campos
                setTimeout(() => {
                    setLoading(false); // Desativa o loading
                }, 5000);
            });
    };

    return (
        <div id="contato" className="relative w-full">
            <div className="flex flex-col items-center justify-center md:justify-start bg-black/95 text-white z-40">
                <div className="flex justify-center items-center">
                    <div className="w-1/2 items-center justify-center hidden lg:flex">
                        <picture className="p-20">
                            <img src="/contact.png" alt="Imagem de Contato" />
                        </picture>
                    </div>
                    <div className="lg:p-30 md:p-42 sm:p-20 p-8 w-full lg:w-1/2">
                        <div className="flex flex-col md:gap-10 gap-5">
                            <h1 className="md:text-5xl text-4xl mb-4 max-w-sm">Deixe sua marca no mundo digital.</h1>
                            <h1 className="text-2xl mb-4">Fale Conosco!</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="nome" className="block text-white md:text-base text-sm">Nome <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:border-indigo-600"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white md:text-base text-sm">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:border-indigo-600"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mensagem" className="block text-white md:text-base text-sm">Mensagem <span className="text-red-500">*</span></label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-black focus:outline-none focus:border-indigo-600"
                                    rows={4}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={`bg-purple-500 disabled:bg-opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-md py-2 px-4 w-full z-50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isFormValid || loading} // Desativa o botão se o formulário não for válido ou se estiver carregando
                            >
                                {loading ? (
                                    <>
                                        <FaSpinner className="animate-spin inline mr-2" /> Enviando...
                                    </>
                                ) : (
                                    'Enviar'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-40" />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    );
};
