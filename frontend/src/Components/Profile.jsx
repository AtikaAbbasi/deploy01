import React from 'react'
import { useNavigate } from 'react-router-dom';
import { removeToken, removeUser } from '../utils/auth';

const Profile = () => {
 const navigate = useNavigate()

    /////////////////////////////logout
       const handleLogout = () => {
        removeUser();
        removeToken();
        navigate("/");
    }

     const user = {
    name: "Ali Raza",
    email: "ali@example.com",
    role: "user",
    joined: "2024-05-01"
  };
 
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div className="bg-white text-black rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="User avatar"
            className="w-24 h-24 rounded-full border-4 border-red-600"
          />
          <h2 className="text-2xl font-bold text-black">kfnakff</h2>
          <p className="text-gray-600">djmkwld</p>
          <span className="px-4 py-1 proBtn bg-red-600 text-white text-sm rounded-full capitalize">
            user
          </span>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4 text-sm text-gray-700">
          <p><span className="font-semibold text-red-600">Joined:</span> apdashj</p>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="proBtn bg-black text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Edit Profile
          </button>
          <button className="proBtn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black transition"
          onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile