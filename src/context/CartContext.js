import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./cartReducer";

const CartContext = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.product(),
    price: Math.floor(faker.commerce.price()),
    image: faker.image.avatar(),
    ratings: Math.floor(Math.random() * 6),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    searchQuery: '',
    isSearched: false,
    isAsc: false,
    isDec: false,
    searchByRating: false,
    ratingVaue: 0
  });


  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
