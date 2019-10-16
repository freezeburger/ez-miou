/**
 * Displays an horizontal slideshow.. 
 * Size ?
 */

export interface ImageSliderProps {
    imageList: string[]; // Array of images to display
    delay?: number; // Pause between images in seconds
    loop?: boolean; // loop if true, go backwards if false
}

export default ImageSliderProps;