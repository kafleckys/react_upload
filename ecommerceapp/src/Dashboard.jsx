import { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>hello sarkar from Dashboard</h1>
      </div>
    );
  }

  componentDidMount() {
    document.title = "Dashboard-eCommerce";
  }
}
