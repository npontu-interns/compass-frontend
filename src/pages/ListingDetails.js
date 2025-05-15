// src/pages/ListingDetails.js
import React from 'react';

const ListingDetails = ({ houseDetails, setHouseDetails, setCurrentPage }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHouseDetails(prevDetails => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: ensure required fields are not empty
    if (!houseDetails.address || !houseDetails.price || !houseDetails.propertyType || !houseDetails.sellerName || !houseDetails.sellerEmail || !houseDetails.sellerPhone) {
      alert('Please fill in all required fields (marked with *).');
      return;
    }
    setCurrentPage(2); // Navigate to the next page (ListingPhotos)
  };

  const inputClass = "block w-full p-2 border border-gray-400 focus:outline-none focus:border-blue-500 text-base text-gray-800";
  const labelClass = "block text-gray-800 text-sm font-normal mb-1"; // Adjusted for the form's smaller label font

  return (
    <div className="container mx-auto max-w-4xl font-sans bg-white border border-gray-400"> {/* Removed page padding, added outer border */}
      {/* Header section mimicking the provided form */}
      <div className="bg-blue-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Propert Recruits - Property Registration Form</h1>
        <p className="text-sm mt-2">Please answer all the questions on this form.</p>
        <p className="text-xs mt-1">Please be aware that if you fail to provide any of the relevant information or provide us with misleading or false information your application may be removed from our application process. Please fill in the form and email back to us via the upload link on the website.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-0"> {/* Removed inner padding from form */}

        {/* Section 1: Basic Property Information */}
        <div className="border-b border-gray-400"> {/* Section separator */}
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg"> {/* Section header bar */}
            1: Property Essentials
          </div>
          <div className="p-4"> {/* Padding for content inside section */}
            <div className="mb-4">
              <label className={labelClass} htmlFor="address">Address <span className="text-red-500">*</span></label>
              <input
                className={inputClass}
                id="address"
                type="text"
                name="address"
                value={houseDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass} htmlFor="propertyType">Property Type <span className="text-red-500">*</span></label>
                <select
                  className={inputClass}
                  id="propertyType"
                  name="propertyType"
                  value={houseDetails.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Single Family Home">Single Family Home</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Multi-Family">Multi-Family</option>
                  <option value="Land">Land</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="price">Listing Price ($) <span className="text-red-500">*</span></label>
                <input
                  className={inputClass}
                  id="price"
                  type="number"
                  name="price"
                  value={houseDetails.price}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className={labelClass} htmlFor="description">Detailed Description</label>
              <textarea
                className={`${inputClass} h-24 resize-y`}
                id="description"
                name="description"
                value={houseDetails.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Section 2: Interior Features */}
        <div className="border-b border-gray-400">
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            2: Interior Features
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={labelClass} htmlFor="bedrooms">Bedrooms</label>
                <input
                  className={inputClass}
                  id="bedrooms"
                  type="number"
                  name="bedrooms"
                  value={houseDetails.bedrooms}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="bathrooms">Bathrooms</label>
                <input
                  className={inputClass}
                  id="bathrooms"
                  type="number"
                  name="bathrooms"
                  value={houseDetails.bathrooms}
                  onChange={handleChange}
                  step="0.5"
                  min="0"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="squareFootage">Living Area (sq ft)</label>
                <input
                  className={inputClass}
                  id="squareFootage"
                  type="number"
                  name="squareFootage"
                  value={houseDetails.squareFootage}
                  onChange={handleChange}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass} htmlFor="yearBuilt">Year Built</label>
                <input
                  className={inputClass}
                  id="yearBuilt"
                  type="number"
                  name="yearBuilt"
                  value={houseDetails.yearBuilt}
                  onChange={handleChange}
                  min="1700"
                  max={new Date().getFullYear()}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="yearRenovated">Year of Last Renovation (Optional)</label>
                <input
                  className={inputClass}
                  id="yearRenovated"
                  type="number"
                  name="yearRenovated"
                  value={houseDetails.yearRenovated}
                  onChange={handleChange}
                  min="1700"
                  max={new Date().getFullYear()}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass} htmlFor="flooring">Flooring Types (e.g., Hardwood, Tile, Carpet)</label>
              <input
                className={inputClass}
                id="flooring"
                type="text"
                name="flooring"
                value={houseDetails.flooring}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className={labelClass} htmlFor="heatingCooling">Heating/Cooling System</label>
              <input
                className={inputClass}
                id="heatingCooling"
                type="text"
                name="heatingCooling"
                value={houseDetails.heatingCooling}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Section 3: Exterior & Lot Details */}
        <div className="border-b border-gray-400">
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            3: Exterior & Lot Details
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label className={labelClass} htmlFor="lotSize">Lot Size (sq ft or acres)</label>
              <input
                className={inputClass}
                id="lotSize"
                type="text"
                name="lotSize"
                value={houseDetails.lotSize}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className={labelClass} htmlFor="exteriorFeatures">Exterior Features (e.g., Deck, Patio, Garden, Pool, Fence)</label>
              <textarea
                className={`${inputClass} h-24 resize-y`}
                id="exteriorFeatures"
                name="exteriorFeatures"
                value={houseDetails.exteriorFeatures}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className={labelClass} htmlFor="parking">Parking (e.g., Garage, Carport, Driveway)</label>
              <input
                className={inputClass}
                id="parking"
                type="text"
                name="parking"
                value={houseDetails.parking}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Seller Contact Information */}
        <div> {/* No bottom border for the last section */}
          <div className="bg-blue-700 text-white p-3 font-semibold text-lg">
            4: Seller Contact Information
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label className={labelClass} htmlFor="sellerName">Seller Name <span className="text-red-500">*</span></label>
              <input
                className={inputClass}
                id="sellerName"
                type="text"
                name="sellerName"
                value={houseDetails.sellerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass} htmlFor="sellerEmail">Seller Email <span className="text-red-500">*</span></label>
                <input
                  className={inputClass}
                  id="sellerEmail"
                  type="email"
                  name="sellerEmail"
                  value={houseDetails.sellerEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="sellerPhone">Seller Phone <span className="text-red-500">*</span></label>
                <input
                  className={inputClass}
                  id="sellerPhone"
                  type="tel"
                  name="sellerPhone"
                  value={houseDetails.sellerPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4 bg-gray-50 border-t border-gray-400"> {/* Footer area for button */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            type="submit"
          >
            Proceed to Photos
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingDetails;