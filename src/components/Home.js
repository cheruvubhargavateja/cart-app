import React from "react";
import { CartState } from "../context/CartContext";
import Product from "./Product";

const Home = () => {
  const {
    state: {
      products,
      searchQuery,
      isAsc,
      isDec,
      isSearched,
      searchByRating,
      ratingValue,
    },
  } = CartState();

  const fetchedProducts = () => {
    let sortProducts = products;
    console.log('searchedQuery', searchQuery)

    if (isAsc) {
      sortProducts = sortProducts.sort((a, b) => a.price - b.price);
    }

    if (isDec) {
      sortProducts = sortProducts.sort((a, b) => b.price - a.price);
    }

    if (isSearched && searchQuery.length > 0) {
      console.log('inside the search...')
      sortProducts = sortProducts.filter((ele) =>
        ele.name.toLowerCase().includes(searchQuery)
      );
    }

    if (searchByRating) {
      sortProducts = sortProducts.filter((ele) => ele.ratings >= ratingValue);
    }
    console.log({isAsc, isDec, searchByRating, isSearched})
    if (!isAsc && !isDec && !searchByRating && !isSearched) {
      return products;
    }

    return sortProducts;
  };

  return (
    <div className="home-section">
      {fetchedProducts()?.map((ele) => {
        return <Product ele={ele} key={ele.id} />;
      })}
    </div>
  );
};

export default Home;
