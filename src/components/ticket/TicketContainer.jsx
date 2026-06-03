import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyTicket1, buyTicket3 } from "../../redux/Ticket/ticketActions";

export default function TicketContainer() {
  const availableTickets = useSelector((state) => state.ticket.availableTickets);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500 text-center">
      <h2 className="text-xl font-semibold mb-2">Tickets</h2>
      <p className="text-3xl font-bold text-purple-600 mb-4">{availableTickets}</p>
      <div className="flex gap-2">
        <button 
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors flex-1"
          onClick={() => dispatch(buyTicket1())}
        >
          Buy 1
        </button>
        <button 
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded transition-colors flex-1"
          onClick={() => dispatch(buyTicket3())}
        >
          Buy 3
        </button>
      </div>
    </div>
  );
}
