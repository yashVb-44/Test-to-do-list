import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_TODOS } from '../actions/todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return action.payload;
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo._id === action.payload._id ? action.payload : todo
            );
        case DELETE_TODO:
            return state.filter((todo) => todo._id !== action.payload);
        default:
            return state;
    }
};

export default todoReducer;
