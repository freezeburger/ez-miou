import React from 'react';
import AuthSignin from '../auth-signin/authsignin.feature';
import AuthSignup from '../auth-signup/authsignup.feature';

 class Auth extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     render(){
         return (
         <div className="card">
             <AuthSignup></AuthSignup>
             <AuthSignin></AuthSignin>
         </div>
         )
     }
 }

 export default Auth;


