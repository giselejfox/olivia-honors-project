import LivInBlueModalContent from "./modal-contents/LivInBlueModalContent"
import LivPointingModalContent from "./modal-contents/LivPointingModalContent"

export default function ModalBodyContent({ contentTitle }) {
    return (
        <div>
            {contentTitle === "liv-pointing" && <LivPointingModalContent />}
            {contentTitle === "liv-in-blue" && <LivInBlueModalContent />}
        </div>
    )
}