import React, { useEffect, useState } from 'react';

export default function FallingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newStar = {
        id,
        left: Math.random() * window.innerWidth,
        size: Math.random() * 6 + 3, // Random size between 3px and 9px
        duration: Math.random() * 3 + 2,
        color: '#FFFFFF', // Default color
      };

      setStars((prev) => [...prev, newStar]);

      // Remove the star after it "falls"
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, newStar.duration * 1000);
    }, 150); // Controls how many stars per second

    return () => clearInterval(interval);
  }, []);

  const handleStarHover = (id) => {
    setStars((prevStars) =>
      prevStars.map((star) =>
        star.id === id
          ? { ...star, color: '#FFD700', size: star.size + 2 } // Change color and increase size on hover
          : star
      )
    );
  };

  const handleStarClick = (id) => {
    // Trigger a sparkle effect or add a special class on click
    setStars((prevStars) =>
      prevStars.map((star) =>
        star.id === id
          ? { ...star, color: '#FF6347', size: star.size * 1.5 } // Change color and increase size on click
          : star
      )
    );

    // Reset size and color after a short delay (simulating the effect)
    setTimeout(() => {
      setStars((prevStars) =>
        prevStars.map((star) =>
          star.id === id
            ? { ...star, color: '#FFFFFF', size: star.size / 1.5 }
            : star
        )
      );
    }, 500);
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-100 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full opacity-80 shadow-lg"
          style={{
            top: 0,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color, // Apply dynamic color
            animation: `fall ${star.duration}s linear forwards`,
          }}
          onMouseEnter={() => handleStarHover(star.id)} // On hover, change color and size
          onClick={() => handleStarClick(star.id)} // On click, trigger sparkle effect
        />
      ))}

      {/* Falling animation */}
      <style jsx="true">{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
