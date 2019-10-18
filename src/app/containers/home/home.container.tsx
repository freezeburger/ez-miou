import React from "react";
import Button from "../../components/button/button.component";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      login: "",
      password: "",
      error: ""
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
  private login = () => {
    if (this.state.login && this.state.password) {
      this.setState({ error: "" });
    } else {
      this.setState({ error: "unknow User" });
    }
  };

  render() {
    return (
      <div
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        <h1>Home</h1>
        <div className="row">
          <span className="col-md-4">Login</span>
          <span className="col-md-4">
            <input
              type="text"
              id="login"
              value={this.state.login}
              onChange={this.changeState}
            />
          </span>
        </div>
        <div className="row">
          <span className="col-md-4">Password</span>
          <span className="col-md-4">
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.changeState}
            />
          </span>
        </div>
        <div>
          <br />
          <Button action={this.login}></Button>
          <br />
        </div>
        <div style={{ color: "red" }}>{this.state.error}</div>
      </div>
    );
  }
}

export default Home;
