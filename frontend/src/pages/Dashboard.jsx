import { Outlet, Link, useLocation } from "react-router-dom";
import DashboardNavBar from "../components/DashboardNavBar";
import Home from "./../assets/img/home.png";
import Setting from "./../assets/img/settings.png";
// import Shipments from "./../assets/img/box.png";
import Tracking from "./../assets/img/delivery-car.png";

const Dashboard = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard/recentshipments", label: "Dashboard", icon: Home },
    // { path: "/dashboard/recentshipments", label: "Shipments", icon: Shipments },
    { path: "/dashboard/tracking", label: "Tracking", icon: Tracking },
    { path: "/dashboard/settings", label: "Settings", icon: Setting },
  ];

  return (
    <div className="h-screen flex flex-col">
      <DashboardNavBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[250px] p-6 border-r overflow-y-auto space-y-3">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <div
                className={`flex gap-2 items-center cursor-pointer p-3 rounded-md ${
                  location.pathname === item.path
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <img className="h-4" src={item.icon} alt="" />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Renders nested content like RecentShipments */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
