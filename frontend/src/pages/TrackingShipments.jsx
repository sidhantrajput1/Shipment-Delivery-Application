import React from "react";
import SearchImg from "./../assets/img/search-interface-symbol.png";

const TrackingShipments = () => {
  return (
    <div className="">
      <div className="mb-4">
        <h3 className="font-medium text-2xl">Track Shipment</h3>
        <p className="font-light text-gray-500">Enter a tracking number to get real-time updates on your shipment</p>
      </div>

      <div className="border p-4 rounded-md">
        <div className="">
          <h3 className="font-medium text-2xl">Shipment Tracking</h3>
          <p className="font-light text-gray-500">Enter the tracking number to track your shipment</p>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm w-[90%]  transition-all focus-within:ring-1 focus-within:ring-gray-600">
            <img
              className="w-5 h-5 opacity-60"
              src={SearchImg}
              alt="Search Icon"
            />
            <input
              className=" outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
              type="search"
              placeholder="Search Shipments..."
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-2 cursor-pointer text-lg font-medium text-black border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-200">Track</button>
        </div>
      </div>
    </div>
  );
};

export default TrackingShipments;
