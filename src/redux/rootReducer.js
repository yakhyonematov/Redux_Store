import { combineReducers } from "redux";
import { phoneReducer } from "./Phone/phoneReducer";
import { laptopReducer } from "./Laptop/laptopReducer";
import { ticketReducer } from "./Ticket/ticketReducer";

const rootReducer = combineReducers({
    phone: phoneReducer, 
    laptop: laptopReducer,
    ticket: ticketReducer
});

export default rootReducer;
