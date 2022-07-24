const ReducerFn = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        userProfiles: [...state.userProfiles, action.payload],
      };
    }
    case "GET_USER": {
      return {
        ...state,
        userProfiles: action.payload,
      };
    }
    case "UPDATE_USER": {
      console.log(state);
      return {
        ...state,
        userProfiles: [...state.userProfiles, action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default ReducerFn;
