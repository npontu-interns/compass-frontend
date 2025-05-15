// src/pages/PropertyDetailsPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Note: Navbar and Footer are now rendered globally in App.js
// so they are not imported or rendered here.

const PropertyDetailsPage = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const navigate = useNavigate();

  // In a real application, you would fetch property details from a backend
  // using this 'id'. For now, we'll just display the ID.

  const handleEnquireClick = () => {
    // Navigate to the enquiry form, passing the property ID
    navigate(`/enquiry/${id}`);
  };

  return (
    // Removed min-h-screen flex flex-col and flex-grow as App.js handles it
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Property Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <p className="text-lg text-gray-800 mb-4">
          Displaying details for Property ID: <span className="font-semibold text-blue-600">{id}</span>
        </p>
        <p className="text-gray-600 mb-6">
          This is where comprehensive information about the property, including images, price, description,
          features, and seller contact details would be shown. You'd fetch this data from your backend.
        </p>

        {/* The new Enquire Button */}
        <button
          onClick={handleEnquireClick}
          className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Enquire About This Property
        </button>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mt-4 w-full bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;