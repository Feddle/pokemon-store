import React, { Component } from "react";
import CardList from "./CardList.js";
import Header from "./Header.js";
import TypeList from "./TypeList.js";
import Cart from "./Cart.js";

class App extends Component {
  state = {
    pokemons: this.props.pokemons,
    types: this.props.types,
    keyword: "",
    typeTag: 0,
    cart: [],
    shouldCartOpen: false
  };

  handleSearch = filter => {
    typeof filter === "string"
      ? this.setState({ keyword: filter })
      : this.setState({ typeTag: filter });
  };

  handleCartToggle = () => {
    this.setState({ shouldCartOpen: !this.state.shouldCartOpen });
  };

  handleAddToCart = pokemonId => {
    let isAlreadyInCart =
      this.state.cart.filter(item => item.id === pokemonId).length > 0;
    if (!isAlreadyInCart) {
      let cart = [...this.state.cart];
      cart.push(this.state.pokemons.find(el => el.id === pokemonId));
      this.setState({ cart, shouldCartOpen: true });
    }
  };

  handleRemoveFromCart = pokemonId => {
    let cart = [...this.state.cart];
    this.setState({ cart: cart.filter(item => item.id !== pokemonId) });
  };

  render() {
    const {
      pokemons,
      keyword,
      types,
      typeTag,
      cart,
      shouldCartOpen
    } = this.state;

    const filteredPokemons = pokemons.filter(el => {
      let name = el.name.toLowerCase().includes(keyword);
      let type = typeTag === 0 ? true : el.type.includes(typeTag);
      return name && type;
    });

    return (
      <div className="wrapper">
        <Header
          onSearch={this.handleSearch}
          onCartToggle={this.handleCartToggle}
          cartLength={cart.length}
        />
        <TypeList
          types={types}
          onSearch={this.handleSearch}
          selectedType={typeTag}
        />
        <CardList
          pokemons={filteredPokemons}
          onAddToCart={this.handleAddToCart}
          cart={cart}
        />
        <Cart
          cart={cart}
          shouldCartOpen={shouldCartOpen}
          onCartToggle={this.handleCartToggle}
          onRemoveFromCart={this.handleRemoveFromCart}
        />
      </div>
    );
  }
}

export default App;
