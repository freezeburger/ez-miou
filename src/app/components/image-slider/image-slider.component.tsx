import React, { useState, useEffect } from 'react';
import ImageSliderProps from '../@prop-types/image-slider.props';
import defaultProps from './image-slider.default-props';
import './image-slider.component.css';


const ImageSlider = (props:ImageSliderProps) => {

    const [index,setIndex] = useState(0);
    let LR = 1;
  
    const changeImage =() =>{
        
        if(props.loop) {
            console.log('loop mode');
            // setIndex( (index+1) % props.imageList.length);
        } else {
            console.log('unloop mode');
            let nextIndex = index+LR;
            LR = (nextIndex === 0) ? 1 : LR;
            LR = (nextIndex === (props.imageList.length - 1)) ? -1 : LR
        }

        setIndex((index+LR) % props.imageList.length);
    }

    useEffect(() => {
        
        const timer = setInterval(changeImage, props.delay)
        return () => {
          // Clean up the subscription
          clearInterval(timer)
        };
      },
      [props.loop,index]
    );


    return (
        <div className="imageSlider">
            <img src={props.imageList[index]} alt=""/>
           {}
        </div>
    );

}

ImageSlider.defaultProps = defaultProps;

export default ImageSlider;



