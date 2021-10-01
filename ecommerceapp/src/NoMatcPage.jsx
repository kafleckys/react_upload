import { Component } from "react";

export default class NoMatchPage extends Component {
  render() {
    return (
      <div>
        <h1>NOOO</h1>
      </div>
    );
  }

  componentDidMount() {
    document.title = "404-eCommerce";
  }
}
