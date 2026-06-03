import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyLaptop } from "../../redux/Laptop/laptopAction";

export default function LaptopContainer() {
  const numofLaptops = useSelector((state) => state.laptop.numofLaptops);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 text-center">
      <h2 className="text-xl font-semibold mb-2">Laptops</h2>
      <p className="text-3xl font-bold text-blue-600 mb-4">{numofLaptops}</p>
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full"
        onClick={() => dispatch(buyLaptop())}
      >
        Buy Laptop
      </button>
    </div>
  );
}
