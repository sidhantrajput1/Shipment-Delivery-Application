import deliveryCard from "./../../assets/img/delivery-car.png";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
  return (
    <nav className="shadow-sm bg-white h-16 md:h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold">
          <img className="w-6 sm:w-7 md:w-8" src={deliveryCard} alt="shipment-img" />
          <span>TrackSwift</span>
        </div>

        {/* Navigation Link */}
        <Link
          to="/"
          className="text-sm sm:text-base md:text-lg bg-white text-black px-4 sm:px-6 py-1.5 border rounded-md hover:bg-gray-700 hover:text-amber-100 transition duration-200"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavBar;
