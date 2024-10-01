export function Footer() {
    return (
      <footer className="bg-black flex justify-center items-center py-10 px-2 lg:px-0 relative">
        <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full'>
          <div className='flex items-center justify-center'>
            <span className="lg:text-base text-white text-center">Copyright © - 2024 - WDJM Corp - Todos os direitos reservados.</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
      </footer>
    );
  }
  