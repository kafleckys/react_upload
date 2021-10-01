import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CusotmersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Customer",
      customersCount: 5,
      customers: [],
    };
  }
  render() {
    return (
      <div>
        <h4 className="border-bottom m-2 p-1">
          {this.state.pageTitle}
          {this.state.customersCount}
          <Link to="/new-customer" className="btn btn-primary ms-2">
            New customer
          </Link>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  componentDidMount = async () => {
    document.title = "Customers-eCommerce";
    let response = await fetch("http://localhost:5000/customers", {
      method: "GET",
    });

    if (response.ok) {
      //200 to 299
      let body = await response.json();
      this.setState({ customers: body, customersCount: body.length });
    } else {
      console.log("Error:" + response.status);
    }
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else return <div className="bg-warning text-center p-2">No phone</div>;

    // return phone ? phone : "no number";
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>

          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <Link
              to={`/edit-customer/${cust.id}`}
              className="btn btn-info me-2"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => {
                var id = cust.id;
                this.onDeleteClick(id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/89/60";
    this.setState({ customers: custArr });
  };

  onDeleteClick = async (id) => {
    // console.log(response);
    if (window.confirm("Are you sure to delete this customer?")) {
      //make Delete request to server
      var response = await fetch(`http://localhost:5000/customers/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        //200 to 299
        var allCustomers = [...this.state.customers];

        allCustomers = allCustomers.filter((cust) => {
          return cust.id !== id;
        });
        this.setState({ customers: allCustomers });
      }
    }
  };
}
