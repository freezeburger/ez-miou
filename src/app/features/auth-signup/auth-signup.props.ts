/**
 * Defines the props expected by the AuthSignin component.
 * @see AuthSignin
 */
interface AuthSigninProps {
    /**
     * This function will be called when the user tries to sign up. This
     * function may process the user input (create the user,
     * route the user to elsewhere...)
     */
    onSignupAttempt(pseudo: string, password: string): void;
}

export default AuthSigninProps;
