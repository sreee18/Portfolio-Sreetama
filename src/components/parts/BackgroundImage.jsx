import React, { useEffect, useRef } from 'react';
import BackgroundImagesData from '../../data/backgroundImageData.json';

const BackgroundImages = ({pauseTime}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isAnimating = false;

    const animate = () => {
      if (isAnimating) return;
      isAnimating = true;

      const firstImage = container.firstChild;
      const firstImageWidth = firstImage.getBoundingClientRect().width;

      container.style.transition = 'transform 5s linear';
      container.style.transform = `translateX(-${firstImageWidth}px)`;

      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
        container.appendChild(firstImage);
        isAnimating = false;
      }, 5000); // The duration here should match the transition duration
    };

    const intervalId = setInterval(animate, pauseTime); // Adjust this interval to control the frequency of image shifts

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-10 left-0 w-full h-full overflow-hidden z-0 bg-black">
      <div className="scrolling-images flex" ref={containerRef}>
        {BackgroundImagesData.backgroundImages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} key={index} className="w-auto h-full" />
        ))}
      </div>
    </div>
  );
};

export default BackgroundImages;