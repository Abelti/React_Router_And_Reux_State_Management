const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
        console.log(...state, action.payload);
      return [...state, action.payload];

    case "STRIKE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
