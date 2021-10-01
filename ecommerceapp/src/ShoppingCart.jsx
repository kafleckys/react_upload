import { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [],
  };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here
  componentDidMount = async () => {
    //title ma aucha page ko mathi
    document.title = "Cart-eCommerce";
    //fetch data from data source //
    /* var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });*/

    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    //console.log(prods);//for checking whether array is received from server side or not
    this.setState({ products: prods });
  };
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };
  //executes when user clicks on Delete(X) button in the product component
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update state of current component
      this.setState({ products: allProducts });
    }
  };
}
