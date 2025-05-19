// src/pages/PropertyDetailsPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PropertyDetailsPage = ({ listings }) => {
  const { id } = useParams(); // Get the property ID from the URL
  const navigate = useNavigate();

  // Find the matching property based on ID
  const property = listings.find((listing) => listing.id === id);

  // Handle case when property is not found
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Property not found!</h2>
        <p className="text-gray-600 mb-6">
          The property you are looking for does not exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleEnquireClick = () => {
    navigate(`/enquiry/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{property.address}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        {property.mainPicture && (
          <img
            src={URL.createObjectURL(property.mainPicture)}
            alt="Property Main"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}
        <p className="text-lg text-gray-800 mb-2"><strong>Price:</strong> ${property.price}</p>
        <p className="text-gray-700 mb-2"><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p className="text-gray-700 mb-2"><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p className="text-gray-700 mb-4"><strong>Description:</strong> {property.description}</p>

        <button
          onClick={handleEnquireClick}
          className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Enquire About This Property
        </button>

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
