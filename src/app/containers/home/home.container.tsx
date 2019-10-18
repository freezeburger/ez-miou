import React from 'react';
import Auth from '../../features/auth/auth.feature';

 class Home extends React.Component<any>{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return <React.Fragment><Auth></Auth></React.Fragment>
     }
 }

export default Home;