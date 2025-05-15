// src/components/HouseCard.js
import React from "react";
import { Link } from "react-router-dom";

// This component will now accept a single 'property' object as a prop
const HouseCard = ({ property }) => {
  if (!property) {
    return null; // Don't render if no property is passed
  }

  // Determine the image to display (mainPicture if available, otherwise default from images array)
  const imageUrl = property.mainPicture
    ? URL.createObjectURL(property.mainPicture) // For submitted files (File objects)
    : property.images && property.images[0]
    ? property.images[0] // For hardcoded properties (URLs)
    : "https://via.placeholder.com/400x300?text=No+Image"; // Fallback image

  // Format price: Assuming price from form is a number, else use original string
  const formattedPrice = property.price
    ? `GHC ${parseFloat(property.price).toLocaleString()}` // Formatted as Ghanaian Cedi
    : property.priceString || 'Price not provided'; // Fallback for original string prices

  return (
    <Link
      key={property.id} // Ensure a unique key is used
      to={`/property/${property.id}`} // Link to a detail page for this property
      state={{ property }} // Pass the whole property object via state if needed on detail page
      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col" // Added flex-col for consistent height
    >
      <div className="flex justify-between items-start p-4">
        <div className="space-x-2">
          {property.isExclusive && ( // These features might not come from our form yet
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
              Only With Us
            </span>
          )}
          {property.isLimitedTime && ( // These features might not come from our form yet
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
              Limited Time
            </span>
          )}
        </div>
        {/* 'addedTime' can be simplified or removed if not coming from form data */}
        {property.addedTime && (
          <span className="text-gray-500 text-sm">
            {property.addedTime === "today" ? "Added today" : property.addedTime}
          </span>
        )}
      </div>

      <img
        className="w-full h-48 object-cover flex-shrink-0" // flex-shrink-0 keeps image from shrinking
        src={imageUrl}
        alt={property.title || property.address || "Property Image"}
      />

      <div className="p-4 flex-grow"> {/* flex-grow to ensure content fills space */}
        <h3 className="text-xl font-bold text-gray-900">{formattedPrice}</h3>
        {/* Use title or address from houseDetails */}
        <h2 className="text-lg font-semibold">{property.title || property.address}</h2>
        {/* Use location or address from houseDetails */}
        <p className="text-gray-600 text-sm">{property.location || property.address}</p>
        {property.description && ( // Show a snippet of description if available
            <p className="text-gray-700 text-sm mt-2 line-clamp-2">{property.description}</p>
        )}
      </div>

      <div className="flex gap-4 p-4 text-sm border-t border-gray-100"> {/* Added border-top for separation */}
        <span>Bed: {property.bedrooms || 'N/A'}</span>
        <span>Bath: {property.bathrooms || 'N/A'}</span>
        {/* Use squareFootage from houseDetails */}
        {property.squareFootage && <span>Area: {property.squareFootage} m²</span>}
      </div>
    </Link>
  );
};

export default HouseCard;