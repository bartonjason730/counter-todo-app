import { combineReducers } from "redux";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const defaultState = [
  {
    id: "Add more items to add counters to ^^^",
    count: 0,
  },
  {
    id: "<---- Click here to delete this item!",
    count: 0,
  },
];

const itemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const sameItem = [...state].find((item) => item.id === action.payload.id);
      return sameItem ? [...state] : [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case INCREMENT:
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: item.id,
            count: item.count + 1,
          };
        }
        return item;
      });
    case DECREMENT:
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: item.id,
            count: item.count - 1,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default combineReducers({ items: itemReducer });

export { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT };
