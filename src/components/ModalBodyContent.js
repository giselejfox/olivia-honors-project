import LivPointingModalContent from "./modal-contents/LivPointingModalContent"

export default function ModalBodyContent({ contentTitle }) {
    return (
        <div>
            {contentTitle === "liv-pointing" && <LivPointingModalContent />}
        </div>
    )
}