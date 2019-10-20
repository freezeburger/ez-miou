import React, {
    useRef
} from 'react';
import Button from '../../components/button/button.component';
import {
    BtnTypes
} from '../../components/@prop-types/button.props';
import {
    FaLock
} from 'react-icons/fa';
import './home.scss';
import Dispatcher from '../../services/dispatcher/dispatcher.service';
import GlobalEmitter from '../../services/event-emitters/global-emitter.service';
import {
    AppActionTypes,
    AppDispatcherAction
} from '../../services/@types/app-dispatcher';


/** state */
interface IState {
    password ? : string;
}


class Home extends React.Component < IState > {

    state = {
        authorized: false,
        password: 'super*password',
    };

    formRef: any;
    pswdRef: any;
    inputRef: any;
    history: any;

    private dispatcher = Dispatcher;
    private globalEmitter = GlobalEmitter;

    constructor(props: any) {
        super(props);
        const {
            history
        } = props;
        this.history = history;

        this.formRef = React.createRef();
        this.inputRef = React.createRef();
        this.pswdRef = React.createRef();
        this.authorize = this.authorize.bind(this);
    }

    //LifeCycle
    componentDidMount() {
        this.focusTextInput();
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log(prevProps, prevState, this.state);
    }

    authorize(e ? : any) {

        const action: AppDispatcherAction = {
            type: AppActionTypes.USER_LOGIN,
            data: {
                name: this.inputRef.current.value,
                email: this.pswdRef.current.value
            }
        };

        this.dispatcher.dispatch(action)
            .then(action => {

                // console.log(action);
                this.globalEmitter.emit('EVT_USER_CONNECTED', action.result);

            })
            .catch(err => alert('Nope !'))
    }

    focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.pswdRef) this.pswdRef.current.focus();
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.authorize();
    }


    render() {
        const icon = < FaLock /> ;
        const formAuth = (
            <div className="main_container">
                <div className="circle">EV-MIAOU</div>
                <div className="content">
                    <form ref={this.formRef} onSubmit={this.handleSubmit}>
                            <label className="label">Email</label>
                            <input ref={this.inputRef} type="email" className="input_content" placeholder="Email Id"/>
                            <label className="label">Password</label>
                            <input ref={this.pswdRef} type="password" className="input_content" placeholder="Password"/>
                            <Button icon={icon} action={this.authorize} btnTypes={BtnTypes.PRIMARY} cssClassNames={['input_content_button']}>
                                <span>Login</span>
                            </Button>
                    </form> 
                </div>
                <div className="help">
                    <a href="#"><p>Lost your Password</p></a>
                </div>
            </div>
        );
        
        return (formAuth)
    }
}

export default Home;
