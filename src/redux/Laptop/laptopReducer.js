import { BUY_LAPTOP } from "./laptopAction";


const initialState = {
  numofLaptops: 20,
};

export const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return {
        ...state,
        numofLaptops: state.numofLaptops - 1,
      };
    default:
      return state;
  }
};
