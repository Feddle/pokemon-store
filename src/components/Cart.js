import React from "react";

const Cart = props => (
  <div className={`cart ${props.shouldCartOpen ? "cart--active" : ""}`}>
    <div className="cartHeading">My Cart</div>
    <div className="cartCloseBtn" onClick={props.onCartToggle}>
      Close
    </div>
    {props.cart.length !== 0 ? (
      <div className="cartList">
        {props.cart.map(pokemon => (
          <div key={pokemon.id} className="cartListItem">
            <div
              className="cartListItem__removeBtn"
              onClick={e => props.onRemoveFromCart(pokemon.id)}
            >
              <img src="img/error.svg" alt="" />
            </div>
            <img
              className="cartListItem__image"
              src={pokemon.img}
              alt={pokemon.name}
              title={pokemon.name}
            />
          </div>
        ))}
      </div>
    ) : (
      <div className="cartEmpty">Your cart is empty.</div>
    )}
  </div>
);

export default Cart;
