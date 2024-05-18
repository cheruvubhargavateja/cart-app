import React, { useState } from "react";
import Rating from "./Rating";
import { CartState } from "../context/CartContext";

const Filter = () => {
  const [rating, setRating] = useState(0);
  const { dispatch } = CartState()

  const reset = () => {
    setRating(0);
    dispatch({type: 'reset_filter'})
  };

  const handleRating = (i) => {
    setRating(i)
    dispatch({type: 'sort_by_rating', payload: i})
  }

  return (
    <div className="filter-section">
      <section>
        Assending
        <input
          type="radio"
          name="sortRadio"
          onChange={()=>dispatch({type: 'sort_by_asc'})}
        />
      </section>
      <section>
        Desending
        <input
          type="radio"
          name="sortRadio"
          onChange={()=>dispatch({type: 'sort_by_dec'})}
        />
      </section>
      <section>
        <Rating rating={rating} onClick={(i) => handleRating(i)} />
      </section>
      <section className="reset" onClick={reset}>
        Reset Filter
      </section>
    </div>
  );
};

export default Filter;
