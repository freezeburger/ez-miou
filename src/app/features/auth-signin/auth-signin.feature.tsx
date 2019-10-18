import React from 'react';
import Button from '../../components/button/button.component';
import { IoIosLogIn } from "react-icons/io";
import AuthSigninProps from './auth-signin.props';

/**
 * The state contains the term being searched
 */
interface AuthSigninState {
    pseudo: string;
    password: string;
}

class AuthSignin extends React.Component<AuthSigninProps, AuthSigninState>{

    state = {
        pseudo: '',
        password: ''
    };

    handleChangePseudo = (e: any) => {
        this.setState({ pseudo: e.target.value });
    };

    // TODO Find a better way to handle each input change in one method
    handleChangePassword = (e: any) => {
        this.setState({ password: e.target.value });
    };

    /**
     * Called whenever the user tries to login and call the onLoginAttempt
     * method received in the props
     */
    login = () => {
        this.props.onLoginAttempt(this.state.pseudo, this.state.password);
    };

    render(){
        const pseudo = this.state.pseudo;
        const password = this.state.password;

        return (
            <form>
                <fieldset>
                    <label>
                        Pseudo:
                        <input className="form-control" value={pseudo} onChange={this.handleChangePseudo} />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        Password:
                        <input type="password" className="form-control" value={password} onChange={this.handleChangePassword} />
                    </label>
                </fieldset>
                <Button action={this.login} icon={<IoIosLogIn />}>
                    <span>Log in</span>
                </Button>
            </form>
        );
    }
 }

export default AuthSignin;