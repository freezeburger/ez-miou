import React, { useState } from 'react';
import ImageSliderProps from '../@prop-types/image-slider.props';
import defaultProps from './image-slider.default-props';
import './image-slider.component.css';


const ImageSlider = (props:ImageSliderProps) => {

    const [count,setCount] = useState(0);

    // TODO Moche...
    setTimeout( () => {
        setCount((count+1) % props.imageList.length);
    }, props.delay);

    return (
        <div className="imageSlider">
            <img src={props.imageList[count]} alt=""/>
           {}
        </div>
    );

}

ImageSlider.defaultProps = defaultProps;

export default ImageSlider;



