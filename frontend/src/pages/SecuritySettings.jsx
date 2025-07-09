import React, { useState } from "react";

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleUpdatePassword = () => {
    console.log({
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
  };

  return (
    <div className=" mx-auto rounded-lg p-6 flex flex-col">
      <div className="">
        <h2 className="text-xl font-semibold mb-2">Security Settings</h2>
        <p className="text-gray-600 mb-4">
          Manage your password and security preferences
        </p>
      </div>

      <div className="">
        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter current password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter new password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Re-enter new password"
          />
        </div>

        <button
          onClick={handleUpdatePassword}
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Update Password
        </button>
      </div>

      <div className="mt-6 border-t border-gray-300 pt-4">
        <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
        <p className="text-gray-600">
          Add an extra layer of security to your account
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-700">Two-Factor Authentication</span>
          <button className="text-blue-500 cursor-pointer">Enable</button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-700">Login Sessions</span>
          <button className="text-blue-500 cursor-pointer">Manage</button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
