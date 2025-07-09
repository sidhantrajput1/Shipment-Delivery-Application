
const SettingProfile = () => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <p className="text-gray-500 mb-2">Update your personal information and profile settings</p>

                <div className="flex items-center mb-4">
                    <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-2xl text-gray-400">
                        <span>D</span>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-bold">Sidhant Singh</h3>
                        <p className="text-gray-500">sidhant808310@gmail.com</p>
                        <button className="text-blue-500 underline">Change Avatar</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Sidhant Singh"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="sidhant808310@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="+91 96935610845"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="ABC Logistics"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Logistics Manager"
                        />
                    </div>
                </div>

                <button className="bg-black text-white py-2 px-4 rounded-lg">Save Changes</button>
            </div>
        </div>
    );
}

export default SettingProfile;
