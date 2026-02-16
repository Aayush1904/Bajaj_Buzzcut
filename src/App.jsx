import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Samarth's images
import samarthImg1 from './assets/WhatsApp Image 2026-02-16 at 13.27.39.jpeg';
import samarthImg2 from './assets/WhatsApp Image 2026-02-16 at 13.27.41.jpeg';
import samarthImg3 from './assets/WhatsApp Image 2026-02-16 at 13.27.42.jpeg';
import samarthImg4 from './assets/WhatsApp Image 2026-02-16 at 13.28.45.jpeg';
import samarthImg5 from './assets/WhatsApp Image 2026-02-16 at 13.29.01.jpeg';
import samarthImg6 from './assets/WhatsApp Image 2026-02-16 at 13.29.02.jpeg';
import samarthImg7 from './assets/WhatsApp Image 2026-02-16 at 13.29.29.jpeg';
import Trimmer from './assets/Trimmer.jpeg';

// Import Omkar Joshi's image
import joshiImg from './assets/Joshi.jpeg';

const ClipperSticker = () => (
  <div className="absolute -top-12 -right-10 w-[140px] z-10 pointer-events-none animate-float">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <rect x="30" y="20" width="40" height="60" rx="10" fill="#333" stroke="#000" strokeWidth="2" />
      <rect x="35" y="15" width="30" height="10" rx="2" fill="#999" stroke="#000" strokeWidth="2" />
      <line x1="38" y1="12" x2="38" y2="18" stroke="#000" strokeWidth="2" />
      <line x1="44" y1="12" x2="44" y2="18" stroke="#000" strokeWidth="2" />
      <line x1="50" y1="12" x2="50" y2="18" stroke="#000" strokeWidth="2" />
      <line x1="56" y1="12" x2="56" y2="18" stroke="#000" strokeWidth="2" />
      <line x1="62" y1="12" x2="62" y2="18" stroke="#000" strokeWidth="2" />
      <circle cx="50" cy="70" r="5" fill="#f00" />
      <text x="50" y="55" fontSize="8" fill="white" textAnchor="middle" fontFamily="sans-serif">BUZZ</text>
    </svg>
  </div>
);

const TrophySticker = () => (
  <div className="absolute -bottom-10 -left-10 w-[120px] z-10 pointer-events-none" style={{ transform: 'rotate(-15deg)' }}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M30,30 L70,30 L70,50 C70,65 50,75 50,75 C50,75 30,65 30,50 Z" fill="#FFD700" stroke="#B8860B" strokeWidth="3" />
      <path d="M30,35 L20,35 L20,45 C20,50 30,50 30,50" fill="none" stroke="#B8860B" strokeWidth="3" />
      <path d="M70,35 L80,35 L80,45 C80,50 70,50 70,50" fill="none" stroke="#B8860B" strokeWidth="3" />
      <rect x="40" y="75" width="20" height="10" fill="#B8860B" />
      <rect x="35" y="85" width="30" height="5" fill="#8B4513" />
      <text x="50" y="50" fontSize="12" fill="#B8860B" textAnchor="middle" fontWeight="bold">GPA</text>
    </svg>
  </div>
);

const Polaroid = ({ icon, caption, rotation, subcaption }) => {
  const [hovered, setHovered] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(rotation);

  const handleMouseEnter = () => {
    setHovered(true);
    const randomRotation = (Math.random() * 6) - 3;
    setCurrentRotation(randomRotation);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCurrentRotation(rotation);
  };

  const baseStyle = {
    transform: hovered
      ? `scale(1.08) rotate(${currentRotation}deg)`
      : `rotate(${rotation}deg)`,
    transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: hovered ? '15px 15px 0px rgba(0,0,0,0.1)' : '6px 6px 0px rgba(0,0,0,0.15)'
  };

  return (
    <div
      className="bg-white p-4 pb-14 border-[3px] border-[#181818] cursor-pointer text-center relative z-0 transition-all duration-300"
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#f0f0f0] h-[180px] w-full border-2 border-[#181818] mb-4 flex flex-col items-center justify-center overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
        {icon}
      </div>
      <div className="font-['Sue_Ellen_Francisco'] text-3xl text-[#181818] mb-1">{caption}</div>
      {subcaption && <div className="font-['Indie_Flower'] text-sm text-red-500 font-bold uppercase">{subcaption}</div>}
    </div>
  );
};

const SidePolaroid = ({ rotation, side, emoji, text, top, image }) => (
  <div
    className={`absolute ${side === 'left' ? 'lg:left-[-140px] xl:left-[-180px]' : 'lg:right-[-160px] xl:right-[-200px]'} hidden lg:block w-[160px] xl:w-[180px] bg-white p-3 pb-8 border-[2.5px] border-[#181818] shadow-2xl transition-all duration-500 hover:scale-110 hover:z-50 cursor-pointer group`}
    style={{
      top: top,
      transform: `rotate(${rotation}deg)`,
      zIndex: 40
    }}
  >
    {/* Tape Effect */}
    <div
      className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#FCEFA6]/60 border border-[#181818]/10 backdrop-blur-sm z-20"
      style={{ transform: `rotate(${(Math.random() * 20) - 10}deg)` }}
    />

    <div className="bg-[#f0f0f0] h-[150px] w-full border-[1.5px] border-[#181818] mb-3 flex items-center justify-center overflow-hidden group-hover:bg-yellow-50 transition-colors">
      {image ? (
        <img src={image} alt={text} className="w-full h-full object-cover" />
      ) : (
        <div className="text-6xl">{emoji}</div>
      )}
    </div>
    <div className="font-['Sue_Ellen_Francisco'] text-2xl text-center leading-tight">
      {text}
    </div>
  </div>
);

const HomePage = () => {
  const [styleSuggestion, setStyleSuggestion] = useState('');
  const [encouragement, setEncouragement] = useState('');
  const [buttonText, setButtonText] = useState("VOTE FOR THE BALDNESS");

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (styleSuggestion) {
      setButtonText('VOTE RECORDED! (Justice served)');
    } else {
      setButtonText('PICK A STYLE FIRST!');
      setTimeout(() => setButtonText("VOTE FOR THE BALDNESS"), 2000);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-16 px-8 box-border relative"
      style={{
        backgroundColor: '#f9fafb',
        perspective: '1200px',
        backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }}
    >
      <div className="relative w-full md:max-w-[400px] lg:max-w-[1200px] flex justify-center">
        {/* Side Decorative Polaroids - Left */}
        <SidePolaroid side="left" top="10%" rotation={-8} image={samarthImg2} text="Before the Fall" />
        <SidePolaroid side="left" top="42%" rotation={12} image={samarthImg3} text="Blissfully Unaware" />
        <SidePolaroid side="left" top="75%" rotation={-5} image={samarthImg4} text="The Good Days" />

        {/* Side Decorative Polaroids - Right */}
        <SidePolaroid side="right" top="8%" rotation={10} image={samarthImg5} text="Living His Best Life" />
        <SidePolaroid side="right" top="40%" rotation={-15} image={samarthImg6} text="Last Moments of Glory" />
        <SidePolaroid side="right" top="72%" rotation={7} image={samarthImg7} text="Pre-Buzz Era" />

        <div
          className="bg-[#FFFCF5] w-full max-w-[900px] min-h-[700px] relative p-12 md:p-20 box-border border-[4px] border-[#181818] shadow-[20px_20px_0px_#181818] z-10"
          style={{
            borderRadius: '4px 255px 5px 25px / 255px 10px 225px 8px',
            transform: 'rotate(-0.5deg)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'rotate(-0.5deg)';
          }}
        >
          <ClipperSticker />
          <TrophySticker />

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-2 font-['Gloria_Hallelujah'] text-2xl border-[3px] border-[#181818] -rotate-1 shadow-lg z-20">
            OFFICIAL NOTICE
          </div>

          <h1
            className="font-['Gloria_Hallelujah'] text-[4rem] md:text-[5.5rem] leading-[0.9] m-0 mb-10 text-center text-[#181818]"
            style={{ transform: 'rotate(-1deg)' }}
          >
            The <span className="inline-block relative z-[1] after:content-[''] after:absolute after:bottom-[10px] after:-left-[10px] after:w-[110%] after:h-[30px] after:bg-[#FFD700] after:-z-[1] after:rounded after:opacity-80" style={{ transform: 'skew(-5deg)' }}>Bajaj Buzzcut</span>
          </h1>

          <div className="flex flex-col gap-6 font-['Indie_Flower'] text-2xl leading-[1.6] text-gray-800">
            <p className="bg-yellow-100 p-4 border-l-8 border-yellow-400 italic">
              "It was the best of GPAs, it was the worst of GPAs..."
            </p>

            <p>
              The stakes were set in stone. Two friends, one semester, and a digital score that would change a man's hairline forever.
              <strong> Omkar Joshi</strong> and <strong>Samarth Bajaj</strong> entered a pact that only the brave (or the overly confident) would dare.
            </p>

            <div className="bg-[#181818] text-white p-8 my-4 rounded-lg transform rotate-1 shadow-xl">
              <h3 className="font-['Gloria_Hallelujah'] text-3xl mb-4 text-center text-yellow-400 line-through decoration-red-500 underline">THE BET:</h3>
              <p className="text-center text-3xl mb-2">Higher GPA = Eternal Glory</p>
              <p className="text-center text-3xl text-red-400 font-bold">LOWER GPA = THE BUZZCUT CEREMONY AND ₹2K</p>
            </div>

            <p>
              The results are in. The math doesn't lie. <strong>Omkar "The G.O.A.T" Joshi</strong> has emerged victorious, leaving
              <strong> Samarth "Soon-to-be-Chrome-Dome" Bajaj</strong> with a date with destiny... and a pair of Wahl lithium-ion clippers.
            </p>
          </div>

          <h2
            className="font-['Gloria_Hallelujah'] text-3xl mt-16 border-b-4 border-[#181818] inline-block pb-2 mb-10"
          >
            HALL OF FAME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <Polaroid
              rotation={3}
              caption="The Champion"
              subcaption="Omkar Joshi"
              icon={
                <img src={joshiImg} alt="Omkar Joshi" className="w-full h-full object-cover" />
              }
            />
            <Polaroid
              rotation={-2}
              caption="The Victim"
              subcaption="Samarth Bajaj"
              icon={
                <img src={samarthImg1} alt="Samarth Bajaj" className="w-full h-full object-cover" />
              }
            />
            <Polaroid
              rotation={4}
              caption="The Clippers"
              subcaption="Model #420"
              icon={
                <img src={Trimmer} alt="Trimmer" className="w-full h-full object-cover" />
              }
            />
          </div>

          <div
            className="border-[4px] border-[#181818] p-8 bg-white rounded-lg mt-12 relative shadow-2xl"
            style={{ transform: 'rotate(0.5deg)' }}
          >
            <div
              className="absolute -top-[20px] left-10 bg-[#181818] text-white px-6 py-1 font-['Gloria_Hallelujah'] font-bold text-xl"
            >
              THE SENTENCING
            </div>
            <p className="mt-4 font-['Indie_Flower'] text-3xl leading-[1.6] mb-8 text-center font-bold">
              Justice is served. Choose the level of Buzz:
            </p>

            <div className="space-y-6">
              <div className="group">
                <label className="font-['Gloria_Hallelujah'] text-lg text-gray-500 uppercase">Buzzcut Style</label>
                <select
                  className="w-full bg-transparent border-b-4 border-dashed border-[#181818] font-['Indie_Flower'] text-2xl p-2 outline-none focus:border-solid transition-all"
                  value={styleSuggestion}
                  onChange={(e) => setStyleSuggestion(e.target.value)}
                >
                  <option value="">-- Select Sentence --</option>
                  <option value="military">The Full Military (Level 0)</option>
                  <option value="inverted">The Inverted Mohawk</option>
                  <option value="patches">The "Forgotten Patches" Special</option>
                  <option value="egg">Smooth Like An Egg</option>
                </select>
              </div>

              <div className="group">
                <label className="font-['Gloria_Hallelujah'] text-lg text-gray-500 uppercase">Final Words for Samarth</label>
                <textarea
                  className="w-full bg-transparent border-b-4 border-dashed border-[#181818] font-['Indie_Flower'] text-2xl p-2 h-24 outline-none focus:border-solid focus:bg-yellow-50 transition-all resize-none"
                  placeholder="Write your prayers/roasts here..."
                  value={encouragement}
                  onChange={(e) => setEncouragement(e.target.value)}
                />
              </div>
            </div>

            <button
              className="inline-block bg-[#181818] text-white font-['Gloria_Hallelujah'] text-2xl py-6 px-12 cursor-pointer no-underline relative mt-12 w-full text-center box-border hover:bg-red-600 active:scale-95 transition-all duration-200 uppercase tracking-widest shadow-[8px_8px_0px_#ccc]"
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>

          <div className="mt-16 text-center font-['Indie_Flower'] text-xl text-gray-400 italic">
            * Photos of the cranial devastation will be uploaded post-ceremony. Stay tuned.
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Indie+Flower&family=Sue+Ellen+Francisco&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px) rotate(-5deg); }
        50% { transform: translateY(-15px) rotate(5deg); }
        100% { transform: translateY(0px) rotate(-5deg); }
      }
      .animate-float {
        animation: float 5s ease-in-out infinite;
      }
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: #f9fafb;
      }
      ::selection {
        background: #FFD700;
        color: #181818;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

