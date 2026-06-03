import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyPhone } from "../../redux/Phone/phoneAction";

export default function PhoneContainer() {
  const numofPhones = useSelector((state) => state.phone.numofPhones);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 text-center">
      <h2 className="text-xl font-semibold mb-2">Phones</h2>
      <p className="text-3xl font-bold text-green-600 mb-4">{numofPhones}</p>
      <button 
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors w-full"
        onClick={() => dispatch(buyPhone())}
      >
        Buy Phone
      </button>
    </div>
  );
}
