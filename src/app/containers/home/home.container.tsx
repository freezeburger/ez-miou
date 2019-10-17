import React, { useRef } from 'react';
import Button from '../../components/button/button.component';
import { BtnTypes } from '../../components/@prop-types/button.props';

/** state */
interface IState {
    password: string;
}

class Home extends React.Component<IState>{

state = {
    authorized: false,
    password: 'super*password',
};
 
formRef:any;
pswdRef:any;

constructor(props:any){
    super(props);
    this.formRef = React.createRef();
    this.pswdRef = React.createRef();
}

//LifeCycle
componentDidMount(){
    this.focusTextInput();
}

focusTextInput = () => {
    // Focus the text input using the raw DOM API
    if (this.pswdRef) this.pswdRef.current.focus();
};

componentWillUnmount(){}


authorize(e:any) {
    console.log(e.target, this.formRef, this.pswdRef);
    let password = e.target.querySelector(
        'input[type="password"]').value;
    let auth = password === this.state.password;
    this.setState({
        authorized: auth
    });
}


render(){
    const formAuth = (
    <form ref={this.formRef} action="#">
        <input ref={this.pswdRef} type="password" placeholder="password" />
        {/* <input type="submit" /> */}
        <Button action={this.authorize} btnTypes={BtnTypes.DANGER} ><span>Delete</span></Button>
    </form>
    );
    return (formAuth)
}
}

export default Home;
