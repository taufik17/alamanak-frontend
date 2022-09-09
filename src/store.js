import { combineReducers, createStore } from "redux";

const defaultState = {
  loading: true,
  profile: null,
};

const exampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        loading: false,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        loading: false,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  example: exampleReducer, authReducer,
});

// Redux: Store
const store = createStore(rootReducer);

// Exports
export default store;
