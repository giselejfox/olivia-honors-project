import BottleContent from "./modal-contents/BottleContent"
import LivPointingModalContent from "./modal-contents/LivPointingModalContent"

export default function ModalBodyContent({ contentTitle }) {
    return (
        <div>
            {contentTitle === "record-player" && <BottleContent />}
        </div>
    )
}