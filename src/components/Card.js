import React from "react";

const Card = props => {
  const { id, name, img } = props.pokemon;
  const doesItemExistInCart =
    props.cart.filter(cartItem => id === cartItem.id).length > 0;

  return (
    <div
      className={`listItem ${
        doesItemExistInCart === true ? "listItem--added" : ""
      }`}
    >
      <img src={img} alt={name} title={name} />
      <h3 className="listItem__name">{name}</h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">$40</div>
      </div>
      <div
        className="listItem__addButton"
        onClick={e => props.onAddToCart(id)}
      >{`${doesItemExistInCart === true ? "Added" : "Add to Cart"}`}</div>
    </div>
  );
};

export default Card;
