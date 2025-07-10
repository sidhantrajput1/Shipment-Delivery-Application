import React from "react";
import NavBar from "../components/Shared/NavBar";

const Services = () => {
  return (
    <div className="">
      <NavBar />
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto font-light">
            At <strong>TrackSwift</strong>, we provide smart and efficient
            shipment services to simplify your logistics journey, whether you're
            a growing business or an individual sender.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Service 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Real-Time Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Monitor your shipment location and delivery updates live, right
                from your dashboard.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Bulk Upload
              </h3>
              <p className="text-gray-600 text-sm">
                Upload multiple shipments at once with an easy-to-use CSV format
                and process them in seconds.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Booking System
              </h3>
              <p className="text-gray-600 text-sm">
                Schedule pickups and deliveries quickly with our flexible and
                user-friendly interface.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Visualize your shipping performance and track shipment volume,
                status, and speed metrics.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Storage
              </h3>
              <p className="text-gray-600 text-sm">
                Your shipment data is protected using the latest technologies
                and securely stored.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 text-sm">
                Need help? Our friendly support team is available anytime to
                assist you with any query.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
