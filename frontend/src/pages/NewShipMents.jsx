import { Link } from "react-router-dom";

const NewShipMents = () => {
  return (
    <div className="p-4">

      <div className="flex gap-2 items-center">
        <Link to="/dashboard">
          <span className="text-2xl">&lt;</span>
        </Link>
        <h3 className="text-2xl md:text-3xl font-bold">Create New Shipment</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Sender Info */}
        <div className="border p-4 rounded-md space-y-3">
          <div>
            <h3 className="text-xl md:text-2xl font-medium">Sender Information</h3>
            <p className="text-gray-500 text-sm">Enter the sender's details</p>
          </div>

          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              className="py-2 px-2 outline-none border rounded-md w-full mt-2"
              type="text"
              placeholder="Sidhant Singh"
              id="fullname"
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input
              className="py-2 px-2 outline-none border rounded-md w-full mt-2"
              type="text"
              placeholder="Noida, 201310"
              id="address"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city">City</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="Enter Your City"
                id="city"
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="Enter Your State"
                id="state"
              />
            </div>
            <div>
              <label htmlFor="zip">ZIP Code</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="ZIP Code"
                id="zip"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="Phone Number"
                id="phone"
              />
            </div>
          </div>
        </div>

        {/* Recipient Info */}
        <div className="border p-4 rounded-md space-y-3">
          <div>
            <h3 className="text-xl md:text-2xl font-medium">Recipient Information</h3>
            <p className="text-gray-500 text-sm">Enter the recipient's details</p>
          </div>

          <div>
            <label htmlFor="recipient-fullname">Full Name</label>
            <input
              className="py-2 px-2 outline-none border rounded-md w-full mt-2"
              type="text"
              placeholder="Sidhant Singh"
              id="recipient-fullname"
            />
          </div>

          <div>
            <label htmlFor="recipient-address">Address</label>
            <input
              className="py-2 px-2 outline-none border rounded-md w-full mt-2"
              type="text"
              placeholder="Noida, 201310"
              id="recipient-address"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="recipient-city">City</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="City"
                id="recipient-city"
              />
            </div>
            <div>
              <label htmlFor="recipient-state">State</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="State"
                id="recipient-state"
              />
            </div>
            <div>
              <label htmlFor="recipient-zip">ZIP Code</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="ZIP Code"
                id="recipient-zip"
              />
            </div>
            <div>
              <label htmlFor="recipient-phone">Phone</label>
              <input
                className="w-full py-2 px-2 outline-none border rounded-md mt-2"
                type="text"
                placeholder="Phone"
                id="recipient-phone"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 border rounded-md">
        <h3 className="text-xl md:text-2xl font-medium">Package Details</h3>
        <p className="text-sm text-gray-500">Enter information about the package</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="package">Package Type</label>
            <select className="w-full mt-2 px-4 py-2 text-base border border-gray-300 rounded-md">
              <option value="Box">Box</option>
              <option value="Pallet">Pallet</option>
              <option value="Tube">Tube</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="weight">Weight (Kg)</label>
            <input
              className="py-2 px-2 outline-none border rounded-md w-full mt-2"
              type="number"
              id="weight"
              placeholder="Weight"
            />
          </div>
          <div>
            <label htmlFor="dimensions">Dimensions (L×W×H in inches)</label>
            <input
              className="py-2 px-2 outline-none border rounded-md w-full mt-2"
              type="text"
              id="dimensions"
              placeholder="12×10×8"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message">Special Instructions</label>
          <textarea
            placeholder="Any special handling instruction or notes"
            className="py-3 px-4 mt-2 outline-none border rounded-md w-full"
            id="message"
            rows={4}
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6">
          <button className="text-xl bg-white text-black border py-2 px-6 rounded-md hover:bg-gray-700 hover:text-white transition-all">
            Cancel
          </button>
          <button className="text-xl bg-black text-white border py-2 px-6 rounded-md hover:bg-gray-700 hover:text-amber-100 transition-all">
            Create Shipment
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default NewShipMents;
