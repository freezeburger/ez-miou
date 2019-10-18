import React from 'react';
import AuthSignin from '../auth-signin/authsignin.feature';
import AuthSignup from '../authsignup/authsignup.feature';

 class Auth extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return <React.Fragment>
             <AuthSignin></AuthSignin>
             <AuthSignup></AuthSignup>
             </React.Fragment>
             
     }
 }
export default Auth;

