import React, { useState } from 'react';
import ImageSliderProps from '../@prop-types/image-slider.props';
import defaultProps from './image-slider.default-props';
import './image-slider.component.css';

const ImageSlider = (props:ImageSliderProps) => {

    const [count,setCount] = useState(0);

    // TODO Moche...
    setTimeout( () => {
        setCount((count+1) % 3);
    }, 1500);

    return (
        <div className="imageSlider">
            {
                props.imageList.map( (image,i) => { 
                    if ( i === count) {
                        return(
                            <img key={i.toString()} src={image} alt=""/>
                        )
                    }

                }
                )
            }
        </div>
    );

}

ImageSlider.defaultProps = defaultProps;

export default ImageSlider;



