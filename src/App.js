import { useState, useEffect } from "react";
import { pinnedImagesData } from "./pinnedImagesData";

import ProjectModal from "./components/ProjectModal";
import ImagePreloader from "./components/ImagePreloader";

function App() {

  // projectIconStatus keeps track of which projects/images have been clicked on or not
  const [projectIconStatus, setProjectIconStatus] = useState(
    pinnedImagesData.reduce((acc, icon) => {
      acc[icon.title] = false;
      return acc;
    }, {})
  );
  const [showModal, setShowModal] = useState(false)
  const [modalContentTitle, setModalContentTitle] = useState("")
  const [currentGifPic, setCurrentGifPic] = useState(1)
  const [preLoadedImages, setPreLoadedImages] = useState([]);


  const handleCloseModal = () => setShowModal(false);
  const handleProjectClick = (contentTitle) => {
    // Tells the modal what to show, opens the modal, and changes the status of the icon to true so it turns from white to the image
    setModalContentTitle(contentTitle)
    setShowModal(true)
    // If the project hasn't been clicked before it updates the status to having been clicked
    if (!projectIconStatus[contentTitle]) {
      const newProjectIconStatusHolder = {...projectIconStatus, [contentTitle]: true}
      setProjectIconStatus(newProjectIconStatusHolder)
    }
  }


  // This useEffect takes care of the gif changing and preloading the images
  useEffect(() => {
    const numberOfImages = [1,2,3,4,5,6,7,8]
    const preLoadedImagesArray = numberOfImages.map((num) => (
      <ImagePreloader key={"image-preloader" + num} imageNumber={num} />
    ));

    setPreLoadedImages(preLoadedImagesArray);

    const intervalId = setInterval(() => {
      // Update the state in a cyclic manner from 1 to 8
      setCurrentGifPic(prevState => (prevState % 8) + 1);
    }, 500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount


  // This takes the data we made about the icons and turns it into html
  const pinnedImageElements = pinnedImagesData.map((imageData, key) => {
    return (
      <div onClick={() => handleProjectClick(imageData.title)} key={key + imageData.imageTitle} style={{position: "absolute", zIndex: '1', top:imageData.percentFromTop, left:imageData.percentFromLeft, cursor: "pointer"}}>
        {/* If the icon is labeled as having been clicked (projectIconStatus[title] = true) we show the image, otherwise the blue circle */}
        {projectIconStatus[imageData.title] && <img style={{height: imageData.imageHeight}} src={"img/pinned-images/"+imageData.title+"-clicked.png"} alt={imageData.altText} /> }
        {!projectIconStatus[imageData.title] && <img style={{height: imageData.imageHeight}} src={"img/pinned-images/"+imageData.title+"-unclicked.png"} alt={imageData.altText} /> }
        {/* {!projectIconStatus[imageData.title] && <div style={{height: imageData.imageHeight, width: imageData.imageHeight, backgroundColor: "blue", borderRadius:"50%"}}></div>} */}
      </div>
    )  
  })

  
  return (
    <div className="App">
      <div className="background-image" style={{background: `url("img/background-gif/lofi-` + currentGifPic + `.jpg")`}}>{pinnedImageElements}</div>

      <ProjectModal showModal={showModal} modalContentTitle={modalContentTitle} handleCloseModal={handleCloseModal} />

      {/* This preloads the 8 gif images */}
      {preLoadedImages}
    </div>
  );
}

export default App;


