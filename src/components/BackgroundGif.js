import { useEffect, useState } from "react"

export default function BackgroundGif() {

    const [currentGifPic, setCurrentGifPic] = useState(1)


    useEffect(() => {
        const intervalId = setInterval(() => {
            // Update the state in a cyclic manner from 1 to 8
            setCurrentGifPic(prevState => (prevState % 8) + 1);
          }, 500);
      
          // Clean up the interval when the component unmounts
          return () => clearInterval(intervalId);
    })
    
    return (
        <img className="background-gif" src={"img/background-gif/lofi-"+currentGifPic+".jpg"} alt="Sketch view of Liv at her sewing machine"/>
    )
}