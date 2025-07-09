const About = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-medium text-gray-700 mb-8">
          About TrackSwift
        </h2>
        <p className="text-gray-600 text-md mb-6 font-light">
          <strong>TrackSwift</strong> is a
          modern shipment tracking and logistics management platform designed to
          simplify deliveries for both individuals and businesses. With
          real-time tracking, smart shipment organization, and a seamless
          booking process, ShipMate helps you manage your logistics stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600 text-sm">
              Track your packages in real-time and stay updated with every
              movement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Smart Dashboard
            </h3>
            <p className="text-gray-600 text-sm">
              Easily manage all your shipments in one place with our
              user-friendly dashboard.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure & Scalable
            </h3>
            <p className="text-gray-600 text-sm">
              Built with modern tech like React and MongoDB, ensuring speed,
              security, and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
