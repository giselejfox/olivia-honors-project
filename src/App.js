import { useState, useEffect } from "react";
import { pinnedImagesData } from "./pinnedImagesData";

import ProjectModal from "./components/ProjectModal";
import ImagePreloader from "./components/ImagePreloader";
import BackgroundAndIcons from "./components/BackgroundAndIcons";

import findIconHeight from "./helpers/findIconHeight";

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
  
  const handleCloseModal = () => setShowModal(false);
  const handleProjectClick = (contentTitle) => {
    // Tells the modal what to show, opens the modal, and changes the status of the icon to true so it turns from white to the image

    console.log(contentTitle)
    setModalContentTitle(contentTitle)
    setShowModal(true)
    // If the project hasn't been clicked before it updates the status to having been clicked
    if (!projectIconStatus[contentTitle]) {
      const newProjectIconStatusHolder = {...projectIconStatus, [contentTitle]: true}
      setProjectIconStatus(newProjectIconStatusHolder)
    }
  }

  // This takes the data we made about the icons and turns it into html
  const pinnedImageElements = pinnedImagesData.map((imageData, index) => {

    const windowHeight = window.innerHeight
    const iconHeight = findIconHeight(windowHeight, imageData)

    return (
      <div onClick={() => handleProjectClick(imageData.title)} key={index + imageData.imageTitle} style={{position: "absolute", zIndex: '1', top:imageData.percentFromTop, left:imageData.percentFromLeft, cursor: "pointer"}}>
        {/* If the icon is labeled as having been clicked (projectIconStatus[title] = true) we show the clicked version, otherwise the unclicked version */}
        {projectIconStatus[imageData.title] && <img style={{height: iconHeight}} src={"img/pinned-images/"+imageData.title+"-clicked.png"} alt={imageData.altText} /> }
        {!projectIconStatus[imageData.title] && <img style={{height: iconHeight}} src={"img/pinned-images/"+imageData.title+"-unclicked.png"} alt={imageData.altText} /> }
      </div>
    )  
  })

  const numberOfImages = 8

  return (
    <div className="App">
      {/* <div className="background-image" style={{background: `url("img/background-gif/lofi-` + currentGifPic + `.jpg")`}}>{pinnedImageElements}</div> */}
      <BackgroundAndIcons pinnedImageElements={pinnedImageElements} />

      <ProjectModal showModal={showModal} modalContentTitle={modalContentTitle} handleCloseModal={handleCloseModal} />

      {/* This preloads the 8 gif images */}
      {[...Array(numberOfImages).keys()].map((index) => (
        <ImagePreloader key={"image-preloader" + index} imageNumber={index + 1} />
      ))}
    </div>
  );
}

export default App;


