// Determines which height to use based on the window height breakpoints set

export default function findIconHeight(windowHeight, imageData) {
    if (windowHeight < 667) {
        return imageData.smHeight
    } else if (windowHeight >= 667 && windowHeight < 900) {
        return imageData.mdHeight
    } else if (windowHeight >= 900) {
        return imageData.lgHeight
    } 
}