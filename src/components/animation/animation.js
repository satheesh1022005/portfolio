import React, { useEffect } from 'react';
import './animation.css';
const colors = [
  '#FFFFFF', '#F5F5F5', '#F0F8FF', '#F0F0FF', '#E6E6FA', '#D8F0F6',
  '#D0E0E3', '#C0C0C0', '#B0E0E6', '#AFEEEE', '#ADD8E6', '#A9A9A9',
  '#8A2BE2', '#808080', '#778899', '#708090', '#6495ED', '#607B8B', '#4682B4'
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const createStars = () => {
  const stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      backgroundColor: getRandomColor(),
      padding: '0.2px',
      borderRadius: '50%',
      left: Math.random() * 100 + 'vw',
      top: Math.random() * 100 + 'vh'
    });
  }
  return stars;
};

const Animation = () => {
  useEffect(() => {
    const loadingContainer = document.querySelector('.loading-container');
    setTimeout(() => {
      if (loadingContainer) {
        loadingContainer.remove();
      }
      // Change background color
      document.body.style.minHeight = '100vh';
      document.body.style.background = 'linear-gradient(#12022B, #000105)';//#2b1055//#180734//#170338
      // Create stars after background color change
      const starsContainer = document.querySelector('.stars-container');
      const stars = createStars();
      stars.forEach(star => {
        const starElement = document.createElement('div');
        starElement.className = 'star';
        Object.assign(starElement.style, star);
        starsContainer.appendChild(starElement);
      });
    }, 1500);
  }, []);

  return (
    <>
      <div className="loading-container">
        <div id="loading-circle" className="loading-circle"></div>
        <p id="dot">It all began with a cosmic <em><b>dot...</b></em></p>
      </div>
      <div className="stars-container"></div>
    </>
  );
};

export default Animation;
