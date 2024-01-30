import { useState } from "react";
import { pinnedImagesData } from "./pinnedImagesData";

import ProjectModal from "./components/ProjectModal";
import ImagePreloader from "./components/ImagePreloader";
import BackgroundAndIcons from "./components/BackgroundAndIcons";

import findIconHeight from "./helpers/findIconHeight";


function App() {

  // ___ STATES ___

  // Takes the pinned images data and turns it into an object that looks like:
  // {bottle: true, sewing-machine: false, newspaper: true}
  // true means that the icon has been clicked on, false means it hasn't been clicked on yet
  const [projectIconStatus, setProjectIconStatus] = useState(
    pinnedImagesData.reduce((acc, icon) => {
      acc[icon.title] = false;
      return acc;
    }, {})
  );
  // Determines whether or not the modal with the writing about a topic is showing
  const [showModal, setShowModal] = useState(false)
  // Sets what content to show inside the modal based on what icon you clicked on
  const [modalContentTitle, setModalContentTitle] = useState("")


  // ___ HANDLERS ___
  
  const handleCloseModal = () => setShowModal(false);
  const handleProjectClick = (contentTitle) => {
    // Tells the modal what to show, opens the modal, and changes the status of the icon to true so it turns from white to the image
    setModalContentTitle(contentTitle)
    setShowModal(true)
    console.log(projectIconStatus)
    // If the project hasn't been clicked before it updates the status to having been clicked
    if (!projectIconStatus[contentTitle]) {
      const newProjectIconStatusHolder = {...projectIconStatus, [contentTitle]: true}
      setProjectIconStatus(newProjectIconStatusHolder)
    }
  }


  // ___ ELEMENT BUILDERS ___

  // This takes the data we made about the icons and turns it into html
  const pinnedImageElements = pinnedImagesData.map((imageData, index) => {
    const iconHeight = findIconHeight(window.innerHeight, imageData)
    // If the icon is labeled as having been clicked (projectIconStatus[title] = true) we show the clicked version, otherwise the unclicked version
    return (
      <div onClick={() => handleProjectClick(imageData.title)} key={index + imageData.imageTitle} className="topic-icon" style={{top:imageData.percentFromTop, left:imageData.percentFromLeft}}>
        {projectIconStatus[imageData.title] && <img style={{height: iconHeight}} src={"img/pinned-images/"+imageData.title+"-clicked.png"} alt={imageData.altText} /> }
        {!projectIconStatus[imageData.title] && <img style={{height: iconHeight}} src={"img/pinned-images/"+imageData.title+"-unclicked.png"} alt={imageData.altText} /> }
      </div>
    )  
  })


  // ___ RETURN STATEMENT ___

  return (
    <div className="App">
      <BackgroundAndIcons pinnedImageElements={pinnedImageElements} />
      <ProjectModal showModal={showModal} modalContentTitle={modalContentTitle} handleCloseModal={handleCloseModal} />
      {/* This preloads the 8 gif images */}
      {[...Array(8).keys()].map((index) => (
        <ImagePreloader key={"image-preloader" + index} imageNumber={index + 1} />
      ))}
    </div>
  );
}

export default App;


