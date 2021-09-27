import React, { Component } from "react";
import data from "../../data";
import CartList from "../cart/CartList";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../Section";

class Main extends Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    if (this.state.cart.find((item) => item.id === product.id)) return;

    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCartByID = (id) => {
    this.setState((prev) => ({
      cart: [...prev.cart.filter((prod) => prod.id !== id)],
    }));
  };

  removeAllFromCart = () => {
    this.setState({
      cart: [],
    });
  };

  orderTotalSum = () =>
    this.state.cart.reduce((acc, prod) => (acc += prod.price), 0);

  render() {
    return (
      <>
        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCartByID={this.removeFromCartByID}
            removeAllFromCart={this.removeAllFromCart}
            orderTotalSum={this.orderTotalSum}
          />
        </Section>
        <Section title="Мобильные телефоны">
          <PhoneList phones={data.phones} addToCart={this.addToCart} />
        </Section>
        <Section title="Ноутбуки">
          <LaptopList laptops={data.laptops} addToCart={this.addToCart} />
        </Section>
      </>
    );
  }
}

export default Main;
