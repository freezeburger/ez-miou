import React from 'react';
import AuthSignin from '../auth-signin/auth-signin.feature';
import AuthSignup from '../auth-signup/auth-signup.feature';
import Dispatcher from '../../services/dispatcher/dispatcher.service';
import { AppActionTypes } from '../../services/@types/app-dispatcher';

class Auth extends React.Component {

    private dispatcher = Dispatcher;

    authorize = (pseudo: string, password: string) => {
        const action = {
            type: AppActionTypes.USER_LOGIN,
            data: {
                name: pseudo,
                email: `${pseudo}@ez-miou.com`,
            }
        }
        this.dispatcher.dispatch(action).then(result => {
            //console.log(`${pseudo} is trying to log in with password ${password} (how safe, eh!).`);
            console.log(result);
        });
    }

    render() {
        return (
            <React.Fragment>
                <AuthSignin onLoginAttempt={this.authorize} />
                <AuthSignup onSignupAttempt={(pseudo, password) => console.log(`${pseudo} is trying to sign up with password ${password} (how safe, eh!).`)} />
            </React.Fragment>
        );
    }
}

export default Auth;
