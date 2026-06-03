import { BUY_PHONE } from "./phoneAction";

const initialState = {
  numofPhones: 20,
};

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        numofPhones: state.numofPhones - 1,
      };
    default:
      return state;
  }
};
