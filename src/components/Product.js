import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiRupee } from "react-icons/bi";
import Rating from "./Rating";
import { CartState } from "../context/CartContext";

function Product({ ele }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={ele.image} />
      <Card.Body>
        <Card.Title>{ele.name}</Card.Title>
        <Card.Text>
          Price: <BiRupee />
          {ele.price}
        </Card.Text>
        <Card.Text>
          <Rating rating={ele.ratings} onClick={() => {}} />
        </Card.Text>
        {cart.some((p) => p.id === ele.id) ? (
          <Button
            variant="danger"
            onClick={() => dispatch({ type: "remove_from_cart", payload: ele })}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => dispatch({ type: "add_to_cart", payload: ele })}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
