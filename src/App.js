import { useState } from "react";
import { pinnedImagesData } from "./pinnedImagesData";

import ProjectModal from "./components/ProjectModal";

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
    setModalContentTitle(contentTitle)
    setShowModal(true)
    const newProjectIconStatusHolder = projectIconStatus[contentTitle] = true
    setProjectIconStatus(newProjectIconStatusHolder)
  }

  // This takes the data we made and turns it into html
  const pinnedImageElements = pinnedImagesData.map((imageData, key) => {
    return (
      <div onClick={() => handleProjectClick(imageData.title)} key={key + imageData.imageTitle} style={{position: "absolute", zIndex: '1', top:imageData.percentFromTop, left:imageData.percentFromLeft}}>
        {/* If it's the icon is labeled as true we show the image, otherwise the white circle */}
        {projectIconStatus[imageData.title] && <img style={{height: imageData.imageHeight}} src={"img/pinned-images/"+imageData.imageTitle} alt={imageData.altText} /> }
        {!projectIconStatus[imageData.title] && <div style={{height: imageData.imageHeight, width: imageData.imageHeight, backgroundColor: "white", borderRadius:"50%"}}></div>}
      </div>
    )  
  })

  return (
    <div className="App">

      {/* CHANGE THE BACKGROUND by changing the name of the file in the quotes here -------***    (right now it's styrofoam-texture.jpeg)      */}
      <div className="vw-100 vh-100" style={{zIndex: "-1", background: `url("img/styrofoam-texture.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
      
      {pinnedImageElements}

      <ProjectModal showModal={showModal} modalContentTitle={modalContentTitle} handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default App;


