import React from "react";

const CartListItem = ({ prod, removeFromCartByID }) => {
  const removeProd = () => removeFromCartByID(prod.id);
  return (
    <li>
      <p>{prod.name}</p>
      <span>{prod.price}</span>
      <button type="button" onClick={removeProd}>
        Удалить
      </button>
    </li>
  );
};

export default CartListItem;
