import React from 'react';
import Button from '../../components/button/button.component';

 class AuthSignup extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return <Button cssClassNames={["sm-btn"]}><span>Signup</span></Button>
     }
 }
export default AuthSignup;

