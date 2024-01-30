import BottleContent from "./modal-contents/BottleContent"

/* 

This is where you link the components that contain the writing contents (stored in the modal-contents
folder) to an icon that's being clicked

*/

export default function ModalBodyContent({ contentTitle }) {
    return (
        <div>
            {contentTitle === "bottle" && <BottleContent />}
        </div>
    )
}