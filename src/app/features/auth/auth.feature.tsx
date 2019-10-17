import React from 'react';
import AuthSignin from '../auth-signin/authsignin.feature';
import AuthSignup from '../auth-signup/authsignup.feature';

 class Auth extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return <div className="row">
             <AuthSignin></AuthSignin>
             <AuthSignup></AuthSignup>
             </div>
             
     }
 }
export default Auth;

