import { Component } from "react";
import { Link } from "react-router-dom";
export default class ProductByID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card m-2">
            <div className="card-body">
              <div className="text-muted">
                {this.state.product.id}
                <span
                  className="pull-right hand-icon"
                  onClick={() => {
                    this.props.onDelete(this.state.product);
                  }}
                >
                  <i className="fa fa-times"></i>
                </span>
              </div>
              <h5 className="pt-5 border-top">
                {this.state.product.productName}
              </h5>
              <div>${this.state.product.price}</div>
            </div>
            {/*  card body ends here*/}
            <div className="card-footer">
              <div className="float-start">
                <span className="badge rounded-pill bg-info m-1 ">
                  {this.state.product.quantity}
                </span>

                <div className="btn-group">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              {/*float-left ends here  */}
              <div className="float-end">
                <Link to="/cart" className="btn btn-secondary">
                  Back...
                </Link>
                {/*yo khas ma as a children tag bhitra  provide garnu parcha */}
                {this.state.children}
              </div>
            </div>
            {/*card-footer ends here */}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    document.title = `${this.state.product.productName}-eCommerce`;

    var id = this.props.match.params.id;
    var response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "GET",
    });

    var body = await response.json();
    //you will get response as object in body variable
    if (body) {
      this.setState({ product: body });
    }
  };
}
