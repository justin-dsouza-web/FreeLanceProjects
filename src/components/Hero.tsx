import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSpecials = () => {
    document.getElementById('menu-highlights')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('menu-highlights')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-6 py-2 bg-amber-600 text-white text-sm font-semibold tracking-wider rounded-full mb-4">
            SINCE 1982
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Pioneer Restaurant
        </h1>

        <p className="text-2xl md:text-3xl text-amber-100 mb-4 font-light">
          Arlington's Classic Diner Since 1982
        </p>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
          Just Good Food — Breakfast All Day & Daily Specials
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToSpecials}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            See Today's Specials
          </button>
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            View Menu
          </button>
          <a
            href="tel:8176334433"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Call Now
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white mx-auto opacity-75" />
        </div>
      </div>
    </div>
  );
}
