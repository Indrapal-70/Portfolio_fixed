import React, { useState, useRef } from 'react';

const Project = ({ project }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // For tilt effect
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowPreview(true);
    }, 3000); // 3 seconds delay
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setShowPreview(false);
    setTiltStyle({
      transform: `perspective(600px) rotateX(0deg) rotateY(0deg)`,
      boxShadow: 'none',
      transition: 'transform 0.3s ease, box-shadow 0.6s ease',
    }); // reset tilt + glow
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // Mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - cardHeight / 2) / cardHeight) * 15; // max 15 deg
    const rotateY = ((x - cardWidth / 2) / cardWidth) * -15; // max 15 deg

    setTiltStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow:
        '0 0 15px 3px rgba(128, 0, 255, 0.7), 0 0 30px 6px rgba(128, 0, 255, 0.5), 0 0 45px 9px rgba(128, 0, 255, 0.3)',
      transition: 'transform 0.1s ease-out, box-shadow 0.4s ease-in-out',
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-white/60 to-white/30 dark:from-neutral-900/60 dark:to-neutral-800/30 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={tiltStyle}
    >
      {/* Preview with fade in/out */}
      <div
        className={`absolute inset-0 bg-black/70 z-10 flex items-center justify-center rounded-lg
          transition-opacity duration-1000
          ${showPreview ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {project.image && (
          <img
            src={project.image}
            alt={`Preview of ${project.title}`}
            className="w-4/5 h-auto rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Main content underneath */}
      <div className={`relative z-0 transition-all duration-300 ${showPreview ? 'blur-sm' : ''}`}>
        <h3 className="text-lg font-semibold mb-1 text-neutral-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
          {project.description}
        </p>
        <ul className="list-disc list-inside text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          {project.subDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-neutral-100 dark:bg-neutral-700 text-xs px-2 py-1 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
