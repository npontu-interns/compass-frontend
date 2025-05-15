// src/pages/ListingPhotos.js
import React from 'react';

const ListingPhotos = ({
  mainPicture,
  setMainPicture,
  additionalPictures,
  setAdditionalPictures,
  setCurrentPage,
}) => {
  const handleMainPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainPicture(file);
    }
  };

  const handleAdditionalPicturesChange = (e) => {
    const files = Array.from(e.target.files);
    // Limit to a total of 10 additional pictures
    const newPictures = [...additionalPictures, ...files].slice(0, 10);
    setAdditionalPictures(newPictures);
  };

  const removeAdditionalPicture = (indexToRemove) => {
    setAdditionalPictures(prevPictures =>
      prevPictures.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleNext = () => {
    if (!mainPicture) {
      alert('Please upload a main picture before proceeding.');
      return;
    }
    // New validation: Check for minimum additional pictures
    if (additionalPictures.length < 6) {
      alert(`Please upload at least 6 additional pictures. You currently have ${additionalPictures.length}.`);
      return;
    }
    setCurrentPage(3); // Navigate to the next page (ListingReviews)
  };

  // Common input file styling for the professional look
  const fileInputClass = `
    block w-full text-base text-gray-700
    file:mr-4 file:py-2 file:px-4
    file:rounded-md file:border file:border-gray-400
    file:text-base file:font-normal
    file:bg-gray-100 file:text-gray-800
    hover:file:bg-gray-200 cursor-pointer
    focus:outline-none focus:ring-1 focus:ring-blue-500
  `;

  const labelClass = "block text-gray-800 text-sm font-normal mb-1"; // Consistent with ListingDetails

  return (
    <div className="container mx-auto max-w-4xl font-sans bg-white border border-gray-400"> {/* Same outer container style */}
      {/* Header section mimicking the provided form */}
      <div className="bg-blue-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">showcase Your Property With COMPASS</h1>
        <p className="text-sm mt-2">Please upload high-quality images of your property.</p>
        <p className="text-xs mt-1">Ensure photos are clear, well-lit, and accurately represent the property. The main picture will be featured prominently.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="p-0"> {/* Form without internal padding */}

        {/* Section 1: Main Property Picture */}
        <div className="border-b border-gray-400">
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            1: Main Property Picture
          </div>
          <div className="p-4">
            <p className="text-gray-800 text-sm mb-4">Please upload the primary image for your listing. This will be the first photo buyers see.</p>
            <label className={labelClass} htmlFor="mainPicture">
              Select Main Picture <span className="text-red-500">*</span>
            </label>
            <input
              id="mainPicture"
              type="file"
              accept="image/*"
              onChange={handleMainPictureChange}
              className={fileInputClass}
            />
            {mainPicture && (
              <div className="mt-6 border border-gray-300 p-3 rounded-md bg-gray-50 text-center">
                <p className="text-gray-700 text-base font-semibold mb-3">Main Picture Preview:</p>
                <img src={URL.createObjectURL(mainPicture)} alt="Main House" className="w-full h-64 object-cover border border-gray-200 mx-auto" />
                <p className="text-sm text-gray-600 mt-2 italic">{mainPicture.name}</p>
              </div>
            )}
            {!mainPicture && (
              <div className="mt-4 text-gray-500 italic text-center p-3 border border-dashed border-gray-300 rounded-md">
                No main picture selected.
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Additional Pictures */}
        <div> {/* No bottom border for the last section */}
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            2: Additional Pictures (Optional)
          </div>
          <div className="p-4">
            <p className="text-gray-800 text-sm mb-4">You can upload a minimum of 6 and a maximum of 10 additional pictures to showcase more details of your property.</p> {/* Updated description */}
            <label className={labelClass} htmlFor="additionalPictures">
              Select Additional Pictures <span className="text-red-500">*</span> {/* Added required asterisk */}
            </label>
            <input
              id="additionalPictures"
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalPicturesChange}
              className={fileInputClass}
              disabled={additionalPictures.length >= 10}
            />
            {additionalPictures.length > 0 && (
              <p className="text-sm text-gray-600 mt-4 text-center">
                {additionalPictures.length} of 10 pictures uploaded.
              </p>
            )}

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalPictures.map((file, index) => (
                <div key={index} className="relative group border border-gray-300 rounded-md overflow-hidden shadow-sm bg-gray-50">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Additional House ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => removeAdditionalPicture(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs w-6 h-6 flex items-center justify-center hover:bg-red-700 opacity-90 transition-opacity duration-200"
                    aria-label="Remove picture"
                    title="Remove picture"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-600 mt-1 px-2 pb-2 truncate">{file.name}</p>
                </div>
              ))}
            </div>
            {additionalPictures.length === 0 && (
              <div className="mt-4 text-gray-500 italic text-center p-3 border border-dashed border-gray-300 rounded-md">
                No additional pictures uploaded yet.
              </div>
            )}
            {additionalPictures.length > 0 && additionalPictures.length < 6 && (
                <p className="text-red-600 text-sm mt-2 text-center font-semibold">
                    Minimum 6 pictures required. You need {6 - additionalPictures.length} more.
                </p>
            )}
          </div>
        </div>

        {/* Footer area for buttons */}
        <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-400">
          <button
            onClick={() => setCurrentPage(1)} // Navigate to the previous page (ListingDetails)
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingPhotos;