// src/pages/ListingReviews.js
import React from 'react';

const ListingReviews = ({
  houseDetails,
  mainPicture,
  additionalPictures,
  setCurrentPage,
  handleSubmitListing,
}) => {
  const reviewItemClass = "py-2 px-3 border-b border-gray-200 last:border-b-0 flex items-center"; // Class for each review row
  const reviewLabelClass = "font-semibold text-gray-700 w-40 flex-shrink-0"; // Class for the strong label
  const reviewValueClass = "text-gray-800 flex-grow"; // Class for the value

  return (
    <div className="container mx-auto max-w-4xl font-sans bg-white border border-gray-400"> {/* Same outer container style */}
      {/* Header section mimicking the provided form */}
      <div className="bg-blue-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">showcase Your Property With COMPASS</h1>
        <p className="text-sm mt-2">Please review your listing details carefully before submission.</p>
        <p className="text-xs mt-1">Ensure all information is accurate and all necessary photos are included. Once submitted, changes may require contacting support.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="p-0"> {/* Form without internal padding */}

        {/* Section 1: Property Details Review */}
        <div className="border-b border-gray-400">
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            1: Property Details
          </div>
          <div className="p-4 bg-white">
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className={reviewItemClass}><span className={reviewLabelClass}>Address:</span> <span className={reviewValueClass}>{houseDetails.address || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Property Type:</span> <span className={reviewValueClass}>{houseDetails.propertyType || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Listing Price:</span> <span className={reviewValueClass}>{houseDetails.price ? `$${parseFloat(houseDetails.price).toLocaleString()}` : 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Bedrooms:</span> <span className={reviewValueClass}>{houseDetails.bedrooms || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Bathrooms:</span> <span className={reviewValueClass}>{houseDetails.bathrooms || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Living Area:</span> <span className={reviewValueClass}>{houseDetails.squareFootage ? `${houseDetails.squareFootage} sq ft` : 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Year Built:</span> <span className={reviewValueClass}>{houseDetails.yearBuilt || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Year Renovated:</span> <span className={reviewValueClass}>{houseDetails.yearRenovated || 'N/A'}</span></div>
              <div className={`${reviewItemClass} block`}>
                <span className={reviewLabelClass}>Description:</span>
                <p className="text-gray-800 mt-1">{houseDetails.description || 'No description provided.'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Interior Features Review */}
        <div className="border-b border-gray-400">
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            2: Interior Features
          </div>
          <div className="p-4 bg-white">
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className={reviewItemClass}><span className={reviewLabelClass}>Flooring:</span> <span className={reviewValueClass}>{houseDetails.flooring || 'Not specified'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Heating/Cooling:</span> <span className={reviewValueClass}>{houseDetails.heatingCooling || 'Not specified'}</span></div>
            </div>
          </div>
        </div>

        {/* Section 3: Exterior & Lot Features Review */}
        <div className="border-b border-gray-400">
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            3: Exterior & Lot Features
          </div>
          <div className="p-4 bg-white">
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className={reviewItemClass}><span className={reviewLabelClass}>Lot Size:</span> <span className={reviewValueClass}>{houseDetails.lotSize || 'Not provided'}</span></div>
              <div className={`${reviewItemClass} block`}>
                <span className={reviewLabelClass}>Exterior Features:</span>
                <p className="text-gray-800 mt-1">{houseDetails.exteriorFeatures || 'Not specified'}</p>
              </div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Parking:</span> <span className={reviewValueClass}>{houseDetails.parking || 'Not specified'}</span></div>
            </div>
          </div>
        </div>

        {/* Section 4: Seller Contact Information Review */}
        <div className="border-b border-gray-400"> {/* Added border-b for consistency in review layout */}
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            4: Seller Contact Information
          </div>
          <div className="p-4 bg-white">
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className={reviewItemClass}><span className={reviewLabelClass}>Name:</span> <span className={reviewValueClass}>{houseDetails.sellerName || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Email:</span> <span className={reviewValueClass}>{houseDetails.sellerEmail || 'Not provided'}</span></div>
              <div className={reviewItemClass}><span className={reviewLabelClass}>Phone:</span> <span className={reviewValueClass}>{houseDetails.sellerPhone || 'Not provided'}</span></div>
            </div>
          </div>
        </div>

        {/* Section 5: Pictures Review */}
        <div> {/* No bottom border for the very last section */}
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            5: Pictures
          </div>
          <div className="p-4 bg-white">
            <div className="border border-gray-300 rounded-md p-4"> {/* Container for pictures */}
              <p className="font-semibold text-base text-gray-700 mb-3 text-center">Main Picture:</p>
              {mainPicture ? (
                <div className="mb-6 text-center">
                  <img
                    src={URL.createObjectURL(mainPicture)}
                    alt="Main House"
                    className="w-full md:w-3/4 h-64 object-cover border border-gray-200 mx-auto"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">{mainPicture.name}</p>
                </div>
              ) : (
                <div className="text-gray-500 italic text-center p-3 border border-dashed border-gray-300 rounded-md mb-6">
                  No main picture provided.
                </div>
              )}

              <p className="font-semibold text-base text-gray-700 mb-3 text-center">Additional Pictures:</p>
              {additionalPictures.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {additionalPictures.map((file, index) => (
                    <div key={index} className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Additional House ${index + 1}`}
                        className="w-full h-28 object-cover"
                      />
                      <p className="text-xs text-gray-600 p-1 truncate">{file.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 italic text-center p-3 border border-dashed border-gray-300 rounded-md">
                  No additional pictures provided.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer area for buttons */}
        <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-400">
          <button
            onClick={() => setCurrentPage(2)} // Navigate to the previous page (ListingPhotos)
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          >
            Previous
          </button>
          <button
            onClick={handleSubmitListing}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingReviews;