import React from "react";
import { GoStarFill, GoStar } from "react-icons/go";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      <span>Rating</span>
      {[...Array(5)].map((_, i) => {
        return (
          <span className="rating-stars" key={i} onClick={() => onClick(i + 1)}>
            {rating > i ? <GoStarFill /> : <GoStar />}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
