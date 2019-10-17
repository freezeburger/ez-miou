/**
 * Defines the props expected by the AuthSignin component.
 * @see AuthSignin
 */
interface AuthSigninProps {
    /**
     * This function will be called when the user tries to log in. This
     * function may process the user input (change the application state,
     * route the user to elsewhere...)
     */
    onLoginAttempt(pseudo: string, password: string): void;
}

export default AuthSigninProps;
