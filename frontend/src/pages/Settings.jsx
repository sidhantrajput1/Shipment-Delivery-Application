import { Link, Outlet } from "react-router-dom";

const Settings = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p className="text-gray-500 mb-6">Manage your account settings and preferences</p>

            <div className="flex border-b pb-4 mb-6 ">
                <Link to="profilesettings">
                <button className="text-left  cursor-pointer mr-8">Profile</button>
                </Link>
                <Link to="securitysettings">
                    <button className="text-gray-500 mr-8 cursor-pointer">Security</button>
                </Link>
                <Link to="billing"><button className="text-gray-500 cursor-pointer">Billing</button></Link>
            </div>
            <Outlet />

        </div>
    );
};

export default Settings;
