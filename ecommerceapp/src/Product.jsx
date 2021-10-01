import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              {this.props.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.props.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-5 border-top">
              {this.props.product.productName}
            </h5>
            <div>${this.props.product.price}</div>
          </div>
          {/*  card body ends here*/}
          <div className="card-footer">
            <div className="float-start">
              <span className="badge rounded-pill bg-info me-2 ">
                {this.props.product.quantity}
              </span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.props.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.props.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/*float-left ends here  
            shopping card component parent ho tesle id pathaucha yslai  as a prop
            bootstrap 5 ma margin right ko lagi me bootstrap 4 ma mr use garne 
            */}
            <div className="float-end">
              <Link to={`product/${this.props.product.id}`} className="me-2">
                Details
              </Link>
              {this.props.children}
            </div>
          </div>
          {/*card-footer ends here */}
        </div>
      </div>
    );
  }
}
