import React from "react";
import CartListItem from "./cartListItem/CartListItem";

const CartList = ({
  cart,
  removeFromCartByID,
  removeAllFromCart,
  orderTotalSum,
}) => {
  const makeOrder = () => removeAllFromCart();
  const total = () => orderTotalSum();
  return (
    <ul>
      {cart.map((prod) => (
        <CartListItem
          key={prod.id}
          prod={prod}
          removeFromCartByID={removeFromCartByID}
        />
      ))}

      {!!total() && (
        <>
          <p>Total: {total()}</p>
          <button type="button" onClick={makeOrder}>
            Оформить заказ
          </button>
        </>
      )}
      {!total() && <p>Добавьте товары в корзину</p>}
    </ul>
  );
};

export default CartList;
