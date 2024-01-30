import React, { useEffect } from 'react';

export default function ImagePreloader({ imageNumber }) {
    useEffect(() => {
      const img = new Image();
      img.src = `img/background-gif/lofi-${imageNumber}.jpg`;
  
      // Optional: You can add an event listener to handle the 'load' and 'error' events
      img.onload = () => {
        // console.log(`Image loaded: lofi-${imageNumber}.jpg`);
        // Additional logic can be added here if needed
      };
  
      img.onerror = () => {
        // console.error(`Error loading image: lofi-${imageNumber}.jpg`);
        // Additional error handling can be added here
      };
  
      // Cleanup: Remove event listeners and free up resources when component is unmounted
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }, [imageNumber]);
  
    return <></>; // This component doesn't render anything to the DOM
};