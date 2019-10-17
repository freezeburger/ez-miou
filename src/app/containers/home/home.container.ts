import React  from 'react';
import Auth from '../../features/auth/auth.feature';
import ImageSlider from '../../components/image-slider/image-slider.component';

 class Home extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     render(){
         return (
            <React.Fragment>
                <Auth/>
                <ImageSlider/>
            </React.Fragment>
         )
     }
 }

export default Home;
