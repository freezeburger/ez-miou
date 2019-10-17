import React from 'react';
import ImageSlider from '../../components/image-slider/image-slider.component';

 class Home extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return (
         <React.Fragment>
             <Auth/>
             <ImageSlider />
        </React.Fragment>);
     }
 }

export default Home;
