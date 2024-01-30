import { useState, useEffect } from "react";

export default function BackgroundAndIcons({pinnedImageElements}) {
    const [currentGifPic, setCurrentGifPic] = useState(1)

    // This useEffect takes care of the gif changing
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Update the state in a cyclic manner from 1 to 8
        setCurrentGifPic(prevState => (prevState % 8) + 1);
      }, 500);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return <div className="background-image" style={{background: `url("img/background-gif/lofi-` + currentGifPic + `.jpg")`}}>{pinnedImageElements}</div>
}