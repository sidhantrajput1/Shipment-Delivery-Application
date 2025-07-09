import deliveryCard from "./../assets/img/delivery-car.png";
import SearchImg from "./../assets/img/search-interface-symbol.png";
import Profile from "./../assets/img/profile.png";
import Notification from "./../assets/img/bell.png";
import Home from './../assets/img/home.png'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const DashboardNavBar = () => {
  return (
    <div>
      <nav className="shadow-sm  h-20 bg-white border-b-1">
        <div className="px-8 flex justify-between items-center h-full">
          <div className="flex gap-8 items-center">
            <div className="text-2xl flex gap-1 font-bold">
              <img className="w-7" src={deliveryCard} alt="shipment-img" />
              <span>TrackSwift</span>
            </div>
            <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm w-full max-w-md transition-all focus-within:ring-1 focus-within:ring-gray-600 ml-8">
                <img className="w-5 h-5 opacity-60" src={SearchImg} alt="Search Icon" />
                <input
                    className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    type="search"
                    placeholder="Search Shipments..."
                />
            </div>

          </div>
          <div className="flex gap-8 items-center">
                <Link to="/"> <img className="w-6 h-6 cursor-pointer" src={Home} alt="Home" /></Link>
                <img className="w-6 h-6 cursor-pointer" src={Notification} alt="" />
                <img className="w-9 cursor-pointer" src={Profile} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavBar;
