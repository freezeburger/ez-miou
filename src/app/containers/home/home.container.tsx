import React from 'react';
import Button from '../../components/button/button.component';
import dispatcher from '../../services/dispatcher/dispatcher.service';
import { AppActionTypes } from '../../services/@types/app-dispatcher';
import globalEmitter from '../../services/event-emitter/global-emitter.service';
import AppEvents from '../../services/event-emitter/app-events.service';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  /**
   * Bind inputs
   * @param event
   */
  private changeState = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  };

  /**
   * Log User
   */
  private email = () => {
    if (this.state.email && this.state.password) {
      this.setState({ error: '' });
      dispatcher
        .dispatch({
          data: {
            email: this.state.email,
            password: this.state.password
          },
          type: AppActionTypes.USER_LOGIN
        })
        .then(response => {
          globalEmitter.emit(AppEvents.EVT_USER_CONNECTED, response.result);
        })
        .catch( err => {
            this.setState({ error: 'Unknown User' }); 
            console.log(err);
        });
    } else {
      this.setState({ error: 'All fields are required' });
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Home</h1>
        <div className="row">
          <span className="col-md-4">email</span>
          <span className="col-md-4">
            <input type="text" id="email" value={this.state.email} onChange={this.changeState} />
          </span>
        </div>
        <div className="row">
          <span className="col-md-4">Password</span>
          <span className="col-md-4">
            <input type="password" id="password" value={this.state.password} onChange={this.changeState} />
          </span>
        </div>
        <div>
          <br />
          <Button action={this.email}></Button>
          <br />
        </div>
        <div style={{ color: 'red' }}>{this.state.error}</div>
      </div>
    );
  }
}

export default Home;
