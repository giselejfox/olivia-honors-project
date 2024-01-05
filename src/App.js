import { useState } from "react";
import { pinnedImagesData } from "./pinnedImagesData";

import ProjectModal from "./components/ProjectModal";

function App() {

  const [showModal, setShowModal] = useState(false)
  const [modalContentTitle, setModalContentTitle] = useState("")

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (contentTitle) => {
    // Tells the modal what to show and then opens the modal
    setModalContentTitle(contentTitle)
    setShowModal(true)
  }

  // This takes the data we made and turns it into html
  const pinnedImageElements = pinnedImagesData.map((imageData, key) => {
    return <div onClick={() => handleShowModal(imageData.title)} key={key + imageData.imageTitle} style={{position: "absolute", zIndex: '1', top:imageData.percentFromTop, left:imageData.percentFromLeft}}><img style={{height: imageData.imageHeight}} src={"img/pinned-images/"+imageData.imageTitle} alt={imageData.altText} /></div>
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


