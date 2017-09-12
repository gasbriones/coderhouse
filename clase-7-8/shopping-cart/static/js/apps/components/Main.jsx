import React from 'react';
import ItemsList from './ItemsList';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemsAdded: [],
      totalAmount: 0
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/items')
      .then(response => response.json())
      .then(items => {
        this.setState({
          items: items.catalog
        })
      }).catch(error => console.log('Error: ', error));
  }

  getItemById = (id) => {
    return this.state.items.filter((obj) => obj.id === id);
  };

  addToCart = (id) => {
    let item = this.getItemById(id);
    this.setState((prevState) => ({
      itemsAdded: prevState.itemsAdded.concat(item),
      totalAmount: parseInt(prevState.totalAmount) + parseInt(item.map(x => x.price))
    }));
  };

  removeToCart = (id) => {
    let item = this.getItemById(id);

    this.setState((prevState) => ({
      itemsAdded: prevState.itemsAdded.filter(obj => {
        return obj.id !==id
      }),
      totalAmount: parseInt(prevState.totalAmount) - parseInt(item.map(x => x.price))
    }))
  };

  render() {
    return (<div className="col-10 grid">
      <h1 className="col-12">Items Added</h1>
      <h1>Total: {this.state.totalAmount}</h1>
      <ItemsList items={this.state.itemsAdded} action={this.removeToCart} actionMsg={'Remove to Cart'}/>
      <h1 className="col-12">Product List</h1>
      <ItemsList items={this.state.items} action={this.addToCart} actionMsg={'Add to Cart'}/>
    </div>);
  }
}
