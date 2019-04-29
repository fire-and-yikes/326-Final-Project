import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
var contentNode = document.getElementById("contents");

class CartFilter extends React.Component {
  render() {
    return <div></div>;
  }
}

const MenuRow = (props) => (
  <tr>
    <td>{props.item.item}</td>
    <td>{props.item.description}</td>
    <td>{props.item.price}</td>
  </tr>
);

function MenuTable(props) {
  const MenuRows = props.items.map(item => (
    <MenuRow key={item._id} item={item} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Description</th>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{MenuRows}</tbody>
    </table>
  );
}

const CartRow = (props) => (
  <tr>
    <td>{props.item.item}</td>
    <td>{props.item.price}</td>
  </tr>
);


function CartTable(props) {
  const CartRows = props.items.map(item => (
    <CartRow key={item._id} item={item} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th> 
        </tr>
      </thead>
      <tbody>{CartRows}</tbody>
    </table>
  );
}

class CartAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.cartAdd;
    this.props.createCart({
      item: form.item.value,
      price: form.price.value,
      status: 'New',
      created: new Date(),
    });
    // Clear the form for the next input.
    form.item.value = '';
    form.price.value = '';
  }

  render() {
    return (
      <div>
        <form name="cartAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="item" placeholder="Item" />
          <input type="text" name="price" placeholder="Price"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class CartList extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };

    this.createCart = this.createCart.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('/api/items').then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log("Total count of records:", data._metadata.total_count);
          this.setState({ items: data.records });
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch issues:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  createCart(newItem) {
    fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(updatedItem => {
              const newItems = this.state.items.concat(updatedItem);
              this.setState({ item: newItems });
            });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to add item: ' + error.message);
            });
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Place an Order</h1>
        <CartFilter />
        <hr />
        <MenuTable items={this.state.items} />
        <hr />   
        <CartAdd createCart={this.createCart} />
        <CartTable items={this.state.items} />
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<CartList />, contentNode);