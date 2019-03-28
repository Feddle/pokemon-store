import React from "react";
import Card from "./Card";

const CardList = props => {
  const { pokemons, onAddToCart, cart } = props;
  return (
    <React.Fragment>
      {pokemons.length > 0 ? (
        <div className="list">
          {pokemons.map(pokemon => (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              cart={cart}
              onAddToCart={() => onAddToCart(pokemon.id)}
            />
          ))}
        </div>
      ) : (
        <div className="list--empty">
          <img src="img/razz-berry.svg" alt="" />
          <p>Awww! We don't have the pokemon you are looking for.</p>
          <p>Till we get it for you, have this razzberry !</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default CardList;
