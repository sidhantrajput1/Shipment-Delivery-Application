import React from "react";
import NavBar from "../components/Shared/NavBar";

const About = () => {
  return (
    <div className="">
      <NavBar />
      <section className="bg-gray-50 py-16 px-6 md:px-20 h-[100vh]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">TrackSwift</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto font-light">
            <strong>TrackSwift</strong> is a modern shipment tracking and
            logistics management platform designed to simplify deliveries for
            individuals and businesses. With real-time tracking, smart shipment
            organization, and a seamless booking process, TrackSwift helps you
            manage logistics stress-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Real-Time Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Track your packages in real-time and stay updated with every
                movement and status change.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Smart Dashboard
              </h3>
              <p className="text-gray-600 text-sm">
                Easily manage all your shipments in one place with our
                user-friendly and intuitive dashboard.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Secure & Scalable
              </h3>
              <p className="text-gray-600 text-sm">
                Built with modern tech like <strong>React</strong> and{" "}
                <strong>MongoDB</strong>, ensuring speed, data security, and
                seamless scaling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
