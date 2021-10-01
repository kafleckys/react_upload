import React from "react";
//import history from "./history";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "scott@test.com",
      password: "scott123",
      message: "",
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h4 className="my-1 py-2 border-bottom">Login</h4>

          {/*Email starts*/}
          <div className="form-group form-row">
            <label className="col-lg-4 m-2">Email:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          {/*email ends*/}

          {/*password starts */}
          <div className="form-group form-row">
            <label className="col-lg-4 m-2">Password:</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
          </div>
          {/*password ends */}

          <div className="text-end">
            {this.state.message}
            <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  } //end of render

  componentDidMount() {
    document.title = "Login-eCommerce";
  }

  onLoginClick = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      {
        method: "GET",
      }
    );
    var body = await response.json();

    if (body.length > 0) {
      //success
      this.setState({
        message: <span className="text-success">Successfully Logged in</span>,
      });
      //yo props app.jsx bata ayeko ho to set loginstatus
      //login huda true logout huda false banauna ko  lagi
      //yesle app.jsx ko function call garcha and teha change hunchha
      this.props.updateIsLoggedInStatus(true);

      //history object ko help le dashboard ma navigate hune after login successfully
      //  history.replace("/dashboard");
      // HashRouter ko lagi
      this.props.history.replace("/dashboard");
    } else {
      //error
      this.setState({
        message: <span className="text-danger">Invalid logged in</span>,
      });
    }
  };
}
