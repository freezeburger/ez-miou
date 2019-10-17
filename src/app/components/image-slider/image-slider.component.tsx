import React, { useState } from 'react';
import ImageSliderProps from '../@prop-types/image-slider.props';
import defaultProps from './image-slider.default-props';
import './image-slider.component.css';


const ImageSlider = (props:ImageSliderProps) => {

    const [index,setIndex] = useState(0);
    const [LR, setLR] = useState(1);
    const [myTimeout, setMyTimeout] = useState(0)

    //console.log('inside ImageSlider func');
    if (myTimeout) {
        clearTimeout(myTimeout)
    }
    // TODO Moche...
    let newTimeout = setTimeout( () => {
        if(props.loop) {
            setIndex((index+1) % props.imageList.length);
        } else {
            // console.log('unloop mode');
            // let nextIndex = index+LR;
            // setIndex(nextIndex);
            // let tLR = (nextIndex === 0) ? 1 : LR;
            // tLR = (nextIndex === (props.imageList.length - 1)) ? -1 : LR
            // setLR(tLR);

        }
    }, props.delay);

    //setMyTimeout(newTimeout);

    return (
        <div className="imageSlider">
            <img src={props.imageList[index]} alt=""/>
           {}
        </div>
    );

}

ImageSlider.defaultProps = defaultProps;

export default ImageSlider;



