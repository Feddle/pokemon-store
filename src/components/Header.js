import React from "react";

const Header = props => (
  <React.Fragment>
    <header className="header">
      <div className="logo">
        <img src="img/pokeball.svg" alt="pokeball" />
      </div>
      <div className="cartBtn" onClick={props.onCartToggle}>
        <div className="cartItemCount">{props.cartLength}</div>
        <img src="img/shopping-cart.svg" alt="" />
      </div>
    </header>
    <div className="filterInput">
      <input
        type="text"
        name="keyword"
        placeholder="Gotta Catch'em all"
        onChange={event => props.onSearch(event.target.value)}
      />
    </div>
  </React.Fragment>
);

export default Header;
