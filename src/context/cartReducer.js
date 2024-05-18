export default function cartReducer(state, action) {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((ele) => ele.id !== action.payload.id),
      };
    case "search_item":
      return {
        ...state,
        searchQuery: action.payload,
        isSearched: true,
      };
    case "sort_by_asc":
      return {
        ...state,
        isAsc: true,
        isDec: false,
      };
    case "sort_by_dec":
      return {
        ...state,
        isDec: true,
        isAsc: false,
      };
    case "sort_by_rating":
      return {
        ...state,
        searchByRating: true,
        ratingValue: action.payload,
      };
    case "reset_filter":
      return {
        ...state,
        isAsc: false,
        isDec: false,
        searchByRating: false,
        ratingValue: 0,
        isSearched: false,
        searchQuery: ''
      };
    default:
      return state;
  }
}
