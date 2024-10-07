import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="landing-container flex flex-col items-center justify-center h-screen bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the Landing Page</h1>
        <p className="text-lg text-gray-600 mt-4">This is one and only route!</p>

    </div>
);
};

export default Landing;
