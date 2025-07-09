import Shipments from "./../assets/img/box.png";
import Tracking from "./../assets/img/delivery-car.png";
import Delivered from "./../assets/img/delivered.png";
import Pending from "./../assets/img/clock.png";
import { Link } from "react-router-dom";

const RecentShipments = () => {
  const shipments = [
    {
      id: "SHP-1234",
      trackingNumber: "TRK-9876543",
      sender: "ABC Electronics",
      recipient: "XYZ Corp",
      status: "In Transit",
      date: "2024-05-20",
    },
    {
      id: "SHP-1235",
      trackingNumber: "TRK-9876544",
      sender: "Global Imports",
      recipient: "Local Retail",
      status: "Delivered",
      date: "2024-05-19",
    },
    {
      id: "SHP-1236",
      trackingNumber: "TRK-9876545",
      sender: "Tech Solutions",
      recipient: "Office Supplies Inc",
      status: "Processing",
      date: "2024-05-21",
    },
    {
      id: "SHP-1237",
      trackingNumber: "TRK-9876546",
      sender: "Fashion Outlet",
      recipient: "Department Store",
      status: "Out for Delivery",
      date: "2024-05-20",
    },
    {
      id: "SHP-1238",
      trackingNumber: "TRK-9876547",
      sender: "Book Publishers",
      recipient: "City Library",
      status: "Delivered",
      date: "2024-05-18",
    },
    {
      id: "SHP-1239",
      trackingNumber: "TRK-9876546",
      sender: "Fashion Outlet",
      recipient: "Department Store",
      status: "Out for Delivery",
      date: "2024-05-20",
    },
    {
      id: "SHP-1241",
      trackingNumber: "TRK-9876547",
      sender: "Book Publishers",
      recipient: "City Library",
      status: "Delivered",
      date: "2024-05-18",
    },
  ];

  const statusStyles = {
    "In Transit": "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
    Processing: "bg-gray-100 text-gray-800",
    "Out for Delivery": "bg-blue-100 text-blue-800",
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <main className="flex-1 bg-white mb-9">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">Dashboard</h1>
          <Link to="/dashboard/newshipment">
            <button className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-medium text-black border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-200">
              <span className="text-xl">+</span>
              New Shipment
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-2 sm:p-4">
          <div className="bg-blue-100 p-6 rounded-lg shadow space-y-2">
            <div className="flex items-center justify-between">
              <h3>Total Shipments</h3>
              <img className="h-4" src={Shipments} alt="Total Shipments" />
            </div>
            <h3 className="text-4xl">127</h3>
            <p>+5.4% from last month</p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow space-y-2">
            <div className="flex items-center justify-between">
              <h3>In Transit</h3>
              <img className="h-5" src={Tracking} alt="In Transit" />
            </div>
            <h3 className="text-4xl">24</h3>
            <p>-2.1% from last month</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow space-y-2">
            <div className="flex items-center justify-between">
              <h3>Delivered</h3>
              <img className="h-5" src={Delivered} alt="Delivered" />
            </div>
            <h3 className="text-4xl">89</h3>
            <p>+1.0% from last month</p>
          </div>

          <div className="bg-sky-200 p-6 rounded-lg shadow space-y-2">
            <div className="flex items-center justify-between">
              <h3>Pending</h3>
              <img className="h-4" src={Pending} alt="Pending" />
            </div>
            <h3 className="text-4xl">14</h3>
            <p>+1.4% from last month</p>
          </div>
        </div>
      </main>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
        <div>
          <h3 className="font-medium text-xl sm:text-2xl">Recent Shipments</h3>
          <p className="text-gray-500">Manage your recent shipments</p>
        </div>

        <div className="w-full sm:w-64">
          <select className="w-full px-4 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="All Shipments">All Shipments</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Processing">Processing</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100 text-sm sm:text-base">
              <th className="py-2 px-4 text-left">Shipment ID</th>
              <th className="py-2 px-4 text-left">Tracking Number</th>
              <th className="py-2 px-4 text-left">Sender</th>
              <th className="py-2 px-4 text-left">Recipient</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm sm:text-base">
            {shipments.map((shipment) => (
              <tr key={shipment.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">{shipment.id}</td>
                <td className="py-3 px-4">{shipment.trackingNumber}</td>
                <td className="py-3 px-4">{shipment.sender}</td>
                <td className="py-3 px-4">{shipment.recipient}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-3 py-1 rounded ${statusStyles[shipment.status]}`}>
                    {shipment.status}
                  </span>
                </td>
                <td className="py-3 px-4">{shipment.date}</td>
                <td className="py-3 px-4">
                  <button className="text-gray-600 hover:text-gray-800">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentShipments;
