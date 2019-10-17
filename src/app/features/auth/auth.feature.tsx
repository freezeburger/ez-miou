import React from 'react';
import AuthSignin from '../auth-signin/auth-signin.feature';
import AuthSignup from '../auth-signup/auth-signup.feature';

 class Auth extends React.Component{
     
    constructor(props:any){
         super(props);
     }

     //LifeCycle
     componentDidMount(){}

     componentWillUnmount(){}

     render(){
         return (
            <AuthSignin onLoginAttempt={(pseudo, password) => console.log(`${pseudo} is trying to log in with password ${password} (how safe, eh!).`)} />
            <AuthSignup onSignupAttempt={(pseudo, password) => console.log(`${pseudo} is trying to sign up with password ${password} (how safe, eh!).`)} />
         );
     }
 }

export default Auth;
