import { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT } from '../reducers/';

const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: {
            id: item,
            count: 0
        }
    };
};

const deleteItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    };
};

const increment = (item) => {
    console.log('increment was called');
    return {
        type: INCREMENT,
        payload: item
    };
};

const decrement = (item) => {
    return {
        type: DECREMENT,
        payload: item
    };
};

export { addItem, deleteItem, increment, decrement }