// pages/PropertyDetail.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PropertyDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  if (!property) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500">No property details found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded text-sm"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">{property.title}</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {property.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Property ${idx + 1}`}
            className="w-full h-64 object-cover rounded"
          />
        ))}
      </div>

      {/* Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
        <p><strong>Area:</strong> {property.area}</p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          {property.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Agent Info */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Agent Info</h2>
        <p><strong>Name:</strong> {property.agent.name}</p>
        <p><strong>Phone:</strong> {property.agent.phone}</p>
      </div>

      {/* Enquiries Button */}
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Enquiries
      </button>
    </div>
  );
};

export default PropertyDetail;
