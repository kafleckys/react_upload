import React, { Component } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import CustomerList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatcPage";
import SideBar from "./SideBar";
import ProductByID from "./ProductByID";
import NewCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Register from "./Registration";
//React.Fragment le div element return gardaina so multile div hunna output ma
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      //BrowserRouter le default histoty object provide garchha
      //Router rakhne so afnai history supply garna sakios
      //HashRouter use garda browser le everytime hash value change huda request pathaudaina
      //server reloading hudaina harek patak
      //hashRouter ko arko faida paxi market ma run grda path milaune jhanjhat garnu pardaina hash router use garda
      // Hash router ko afnai history object huncha
      <HashRouter>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ? <SideBar></SideBar> : ""}
            </div>
            <div className="col-lg-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/customers" exact component={CustomerList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductByID} />
                <Route path="/new-customer" exact component={NewCustomer} />
                <Route
                  path="/edit-customer/:id"
                  exact
                  component={UpdateCustomer}
                />
                <Route path="/register" component={Register} />
                <Route path="*" component={NoMatchPage} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  //this method can be called by child component to update isLoggedIn property
  //yslai component Login ma pass gariyeko cha as a prop and navbar ma pani
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
