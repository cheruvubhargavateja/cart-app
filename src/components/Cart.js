import ListGroup from "react-bootstrap/ListGroup";
import { BiRupee } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { CartState } from "../context/CartContext";
import Rating from "./Rating";

const Cart = () => {
  // const [total, setTotal] = useState(0);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const calculateTotalPriceOfItems = () => {
    const tempTotal = cart.reduce((totalValue, value)=>{
      return totalValue + value.price;
    }, 0)
    return tempTotal;
    // setTotal(tempTotal);
  }


  return (
    <div className="row">
    <ListGroup className="home-section">
      {cart?.length < 1 ? (
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
          No items are available in cart
        </h1>
      ) : null}
      {cart?.map((ele) => {
        return (
          <ListGroup.Item
            style={{
              width: "98%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px 1px rgb(0, 0, 0, 0.1)",
              padding: "1.5rem",
              margin: "1rem",
            }}
            key={ele.id}
          >
            <div style={{ width: "20rem" }}>
              <img src={ele.image} alt={ele.name} height="200px" />
            </div>
            <div style={{ width: "20rem" }}>
              <p>Product Name:</p>
              <h2>{ele.name}</h2>
            </div>
            <div style={{ width: "20rem" }}>
              <Rating rating={ele.ratings} onClick={() => {}} />
            </div>

            <div style={{ width: "20rem" }}>
              Price: <BiRupee size={'1.2rem'}/>
              {ele.price}
            </div>
            <div>
              <MdDelete
                size="2rem"
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({ type: "remove_from_cart", payload: ele })
                }
              />
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
    <section className="filter-section">
        <div style={{position:'fixed'}}>
            <p className="cart-value-list">Total items: {cart.length}</p>
            <p className="cart-value-list">Total Price: {calculateTotalPriceOfItems()}</p>
        </div>
    </section>
    </div>
  );
};

export default Cart;
