import React, { Dispatch } from 'react';
import Button from '../../components/button/button.component';
import { BtnTypes } from '../../components/@prop-types/button.props';
import { AppActionTypes } from '../../services/@types/app-dispatcher';
import Dispatcher from '../../services/dispatcher/dispatcher.service';
import { action } from '@storybook/addon-actions';

class AuthSignin extends React.Component {
    private dispatcher = Dispatcher;
  constructor(props: any) {
    super(props);
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}


  authorize(e?:any) {
      const action = {
          type: AppActionTypes.USER_LOGIN,
          data: {
              name: 'toto',
              email: 'toto@mail.com'

          }
        }
      this.dispatcher.dispatch(action).then((wtf) => {console.log(wtf)});
  }
  handleSubmit(event: any) {
    event.preventDefault();
    this.authorize();
  }

  render() {
    return (
      <form onSubmit={(event) => {this.handleSubmit(event)}}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label">Check me out</label>
        </div>
        <Button btnTypes={BtnTypes.INFO}>
          <span>Submit</span>
        </Button>
      </form>
    );
  }
}
export default AuthSignin;
