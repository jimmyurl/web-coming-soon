import React, { useState, useEffect } from "react";

const UnderMaintenance = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-03-15T00:00:00"); // Replace with your maintenance end time
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate - now;
      if (timeDiff <= 0) {
        clearInterval(interval);
        setTimeLeft("Maintenance is over!");
      } else {
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white text-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
        We're Under Maintenance
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Our website is currently undergoing scheduled maintenance.
        <br /> We’ll be back soon!
      </p>
      
      {/* Spinning loader */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mb-6"></div>
      
      {/* Time left countdown */}
      <p className="text-2xl font-semibold text-gray-800 mb-6">
        Time left: {timeLeft}
      </p>

      {/* Social media links */}
      <div className="flex gap-6 mb-8"> 
  <a href="https://x.com" className="text-blue-500 hover:text-blue-700 transition duration-300">
    <i className="fab fa-x text-2xl"></i>
  </a>

        <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700 transition duration-300">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700 transition duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>

      {/* Contact or additional info */}
      <p className="text-sm text-gray-500">For inquiries, please contact us at <a href="mailto:support@karibumnadani.co.tz" className="text-blue-500">support@karibumnadani.co.tz</a>.</p>
    </div>
  );
};

export default UnderMaintenance;
