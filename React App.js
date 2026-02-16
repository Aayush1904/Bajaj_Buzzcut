import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LemonStickerTopLeft = () => (
  <div className="absolute -top-10 -left-10 w-[120px] z-10 pointer-events-none animate-float">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path 
        className="fill-[#FCEFA6] stroke-[#181818]"
        style={{ strokeWidth: '3px', strokeLinecap: 'round', strokeLinejoin: 'round' }}
        d="M15,50 Q10,20 40,15 Q70,10 85,35 Q100,60 70,80 Q40,100 20,75 Q5,60 15,50 Z"
      />
      <path 
        className="fill-none stroke-[#181818]"
        style={{ strokeWidth: '2px', strokeLinecap: 'round' }}
        d="M25,30 Q35,25 45,35"
      />
      <path 
        className="fill-none stroke-[#181818]"
        style={{ strokeWidth: '2px', strokeLinecap: 'round' }}
        d="M70,50 Q75,60 65,70"
      />
      <circle className="fill-[#181818] opacity-20" cx="30" cy="50" r="1" />
      <circle className="fill-[#181818] opacity-20" cx="45" cy="60" r="1" />
      <circle className="fill-[#181818] opacity-20" cx="60" cy="40" r="1" />
      <circle className="fill-[#181818] opacity-20" cx="55" cy="70" r="1" />
    </svg>
  </div>
);

const LemonStickerBottomRight = () => (
  <div className="absolute -bottom-[30px] -right-5 w-[100px] z-10 pointer-events-none" style={{ transform: 'rotate(15deg)' }}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path 
        className="stroke-[#181818]"
        style={{ fill: '#FFF5CC', strokeWidth: '3px', strokeLinecap: 'round', strokeLinejoin: 'round' }}
        d="M10,50 A40,40 0 0,1 90,50 L50,90 Z"
      />
      <path 
        className="fill-none stroke-[#181818]"
        style={{ strokeWidth: '2px', strokeLinecap: 'round' }}
        d="M50,90 L50,50 L80,20"
      />
      <path 
        className="fill-none stroke-[#181818]"
        style={{ strokeWidth: '2px', strokeLinecap: 'round' }}
        d="M50,50 L20,20"
      />
      <path 
        className="fill-none stroke-[#181818]"
        style={{ strokeWidth: '2px', strokeLinecap: 'round' }}
        d="M50,50 L85,65"
      />
      <path 
        className="fill-none stroke-[#181818]"
        style={{ strokeWidth: '2px', strokeLinecap: 'round' }}
        d="M50,50 L15,65"
      />
    </svg>
  </div>
);

const Polaroid = ({ icon, caption, rotation }) => {
  const [hovered, setHovered] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(rotation);

  const handleMouseEnter = () => {
    setHovered(true);
    const randomRotation = (Math.random() * 4) - 2;
    setCurrentRotation(randomRotation);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCurrentRotation(rotation);
  };

  const baseStyle = {
    transform: hovered 
      ? `scale(1.05) rotate(${currentRotation}deg)` 
      : `rotate(${rotation}deg)`,
    transition: 'all 0.2s ease',
    boxShadow: hovered ? '8px 8px 0px rgba(0,0,0,0.1)' : '4px 4px 0px rgba(0,0,0,0.15)'
  };

  return (
    <div 
      className="bg-white p-4 pb-12 border-[2.5px] border-[#181818] cursor-pointer text-center relative z-0"
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#FCEFA6] h-[150px] w-full border-2 border-[#181818] mb-4 flex items-center justify-center overflow-hidden relative">
        {icon}
      </div>
      <div className="font-['Sue_Ellen_Francisco'] text-2xl text-[#444]">{caption}</div>
    </div>
  );
};

const HomePage = () => {
  const [place, setPlace] = useState('');
  const [when, setWhen] = useState('');
  const [buttonText, setButtonText] = useState("Let's Make It Happen");

  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonText('Sent! (I hope you said yes)');
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center p-16 px-8 box-border"
      style={{
        backgroundColor: '#E0EFD5',
        perspective: '1000px',
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")"
      }}
    >
      <div 
        className="bg-[#FFFCF5] w-full max-w-[800px] min-h-[600px] relative p-16 box-border border-[2.5px] border-[#181818] hover:scale-[1.01]"
        style={{
          borderRadius: '2px 255px 3px 25px / 255px 5px 225px 3px',
          boxShadow: '10px 10px 0px rgba(0,0,0,0.1), 5px 5px 15px rgba(0,0,0,0.05)',
          transform: 'rotate(-1deg)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotate(0deg) scale(1.01)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotate(-1deg)';
        }}
      >
        <LemonStickerTopLeft />

        <h1 
          className="font-['Gloria_Hallelujah'] text-[5rem] leading-[0.8] m-0 mb-8 text-center"
          style={{ transform: 'rotate(-2deg)' }}
        >
          To My <span className="inline-block relative z-[1] after:content-[''] after:absolute after:bottom-[10px] after:-left-[10px] after:w-[110%] after:h-[25px] after:bg-[#FCEFA6] after:-z-[1] after:rounded after:opacity-80" style={{ transform: 'skew(-10deg) rotate(-2deg)' }}>Main Squeeze</span>
        </h1>

        <p className="font-['Indie_Flower'] text-2xl leading-[1.6] mb-6">Hey there,</p>
        <p className="font-['Indie_Flower'] text-2xl leading-[1.6] mb-6">
          I was trying to think of a cute way to tell you how much I appreciate you, but my handwriting is terrible. So, I built this little website instead.
        </p>
        <p className="font-['Indie_Flower'] text-2xl leading-[1.6] mb-6">
          You bring the <span className="bg-transparent px-[5px] rounded" style={{ backgroundImage: 'linear-gradient(to right, rgba(252, 239, 166, 0.8), rgba(252, 239, 166, 0.6))' }}>sweetness</span> to my life when things get sour. Thanks for being my partner in crime, my best friend, and the absolute zest part of my day.
        </p>

        <h2 
          className="font-['Gloria_Hallelujah'] text-[2rem] mt-12 border-b-2 border-[#181818] inline-block pb-2"
          style={{ borderRadius: '0 0 100% 0' }}
        >
          Our Highlights
        </h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 my-12">
          <Polaroid 
            rotation={2}
            caption="First Date"
            icon={
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20,80 Q50,10 80,80" />
                <circle cx="50" cy="40" r="10" />
              </svg>
            }
          />
          <Polaroid 
            rotation={-1.5}
            caption="Road Trip"
            icon={
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,50 L30,20 L50,50 L70,30 L90,60" />
              </svg>
            }
          />
          <Polaroid 
            rotation={2}
            caption="New Apt"
            icon={
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M30,40 Q50,20 70,40 T90,60" />
                <path d="M30,40 L30,80 L70,80 L70,40" />
              </svg>
            }
          />
        </div>

        <div 
          className="border-2 border-[#181818] p-6 bg-white rounded mt-8 relative"
          style={{ transform: 'rotate(1deg)' }}
        >
          <div 
            className="absolute -top-[15px] left-5 bg-white px-[10px] font-['Gloria_Hallelujah'] font-bold"
          >
            Plan a Date
          </div>
          <p className="mt-0 font-['Indie_Flower'] text-2xl leading-[1.6] mb-6">
            <strong>Where should we go next?</strong>
          </p>
          <input 
            type="text" 
            className="w-full bg-transparent border-none border-b-2 border-dashed border-[#181818] font-['Indie_Flower'] text-2xl p-2 mb-4 outline-none text-[#555] placeholder:text-[#999] placeholder:italic focus:border-solid focus:bg-[rgba(252,239,166,0.2)]"
            placeholder="Type a place (e.g. Italy, The Couch)..."
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input 
            type="text" 
            className="w-full bg-transparent border-none border-b-2 border-dashed border-[#181818] font-['Indie_Flower'] text-2xl p-2 mb-4 outline-none text-[#555] placeholder:text-[#999] placeholder:italic focus:border-solid focus:bg-[rgba(252,239,166,0.2)]"
            placeholder="When are we free?"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />
          
          <a 
            href="#" 
            className="inline-block bg-[#FCEFA6] font-['Gloria_Hallelujah'] text-2xl py-4 px-12 border-[2.5px] border-[#181818] cursor-pointer no-underline text-[#181818] relative mt-8 w-full text-center box-border hover:bg-[#FFF5CC] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              boxShadow: '4px 4px 0 #181818'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-1px, -1px)';
              e.currentTarget.style.boxShadow = '6px 6px 0 #181818';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '4px 4px 0 #181818';
            }}
            onClick={handleButtonClick}
          >
            {buttonText}
          </a>
        </div>

        <LemonStickerBottomRight />
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
        0% { transform: translateY(0px) rotate(-15deg); }
        50% { transform: translateY(-10px) rotate(-12deg); }
        100% { transform: translateY(0px) rotate(-15deg); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;