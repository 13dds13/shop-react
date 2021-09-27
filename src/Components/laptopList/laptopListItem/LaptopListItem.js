import React from "react";

const LaptopListItem = ({ laptop, addToCart }) => {
  const addProduct = () => addToCart(laptop);
  return (
    <li>
      <h3>{laptop.name}</h3>
      <img src={laptop.image} alt={laptop.name} />
      <p>
        Sale:{" "}
        {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}
      </p>
      <p>{laptop.description}</p>
      <p>Цена: {laptop.price}</p>
      <button type="button" onClick={addProduct}>
        Добавить в корзину
      </button>
    </li>
  );
};

export default LaptopListItem;
