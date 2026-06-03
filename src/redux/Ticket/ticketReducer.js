import { BUY_TICKET, BUY_TICKET3 } from "./ticketActions";

const initialState = {
  availableTickets: 50,
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_TICKET:
      return {
        ...state,
        availableTickets: state.availableTickets - 1,
      };
      case BUY_TICKET3:
        return {
          ...state,
          availableTickets: state.availableTickets - 3,
        };
    default:
      return state;
  }
};
