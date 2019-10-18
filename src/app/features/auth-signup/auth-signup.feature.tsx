import React from 'react';
import Button from '../../components/button/button.component';
import { IoIosLogIn } from "react-icons/io";
import AuthSignupProps from './auth-signup.props';

/**
 * The state contains the term being searched
 */
interface AuthSignupState {
    pseudo: string;
    password: string;
    passwordConfirm: string;
    [key:string]:any;
}

class AuthSignup extends React.Component<AuthSignupProps, AuthSignupState>{
     
    state = {
        pseudo: '',
        password: '',
        passwordConfirm: ''
    };

    // This handler is called whenever any field changes
    handleChangeOf = (name:string) => (event:any) => this.setState( { [name]: event.target.value });

    /**
     * Called whenever the user tries to login and call the onLoginAttempt
     * method received in the props
     */
    login = () => {
        if (this.state.password === this.state.passwordConfirm) {
            this.props.onSignupAttempt(this.state.pseudo, this.state.password);
        }
    };

    render(){
        const pseudo = this.state.pseudo;
        const password = this.state.password;
        const passwordConfirm = this.state.passwordConfirm;

        return (
            <form>
                <fieldset>
                    <label>
                        Pseudo:
                        <input className="form-control" value={pseudo} onChange={this.handleChangeOf('pseudo')} />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        Password:
                        <input type="password" className="form-control" value={password} onChange={this.handleChangeOf('password')} />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        Password confirmation:
                        <input type="password" className="form-control" value={passwordConfirm} onChange={this.handleChangeOf('passwordConfirm')} />
                    </label>
                </fieldset>
                <Button action={this.login} icon={<IoIosLogIn />}>
                    <span>Sign up</span>
                </Button>
            </form>
        );
    }
 }

export default AuthSignup;