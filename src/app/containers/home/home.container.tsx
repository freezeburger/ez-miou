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
         return <div className="container"><Auth></Auth></div>
     }
 }

export default Home;
