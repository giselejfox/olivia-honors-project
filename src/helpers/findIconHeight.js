// Determines which height to use based on the window height breakpoints set

export default function findIconHeight(windowHeight, imageData) {
    if (windowHeight < 667) {
        console.log("xs")
        return imageData.xsHeight
    } else if (windowHeight >= 667 && windowHeight < 900) {
        console.log("sm")
        return imageData.smHeight
    } else if (windowHeight >= 900) {
        console.log("md")
        return imageData.mdHeight
    } 
//     else if (windowHeight >= 1150) {
//         console.log("lg")
//         return imageData.lgHeight
//     } else if (windowHeight >= 1400) {
//         console.log("xl")
//         return imageData.xlHeight
//     }
}